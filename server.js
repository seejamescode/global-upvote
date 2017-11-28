import compression from "compression";
import express from "express";
import fs from "fs";
import path from "path";
import request from "request";

const app = express();
const keys = require("./keys.json");
const port = process.env.PORT || 8080;
const snoowrap = require("snoowrap");

app.use(compression());
app.enable("trust proxy");

const reddit = new snoowrap(keys);

let current = 0;
let length = 0;
let newStories = [];
let stories = [];

const getComments = story => {
  reddit.getSubmission(story.id).fetch().then(post => {
    current += 1;

    for (let comment of post.comments) {
      if (comment.author.name === "autotldr") {
        const description = comment.body_html.substr(
          comment.body_html.indexOf("<blockquote>") + 13,
          comment.body_html.indexOf("</blockquote>") -
            comment.body_html.indexOf("<blockquote>") -
            13
        );

        const image = post.preview &&
          post.preview.images &&
          post.preview.images[0]
          ? post.preview.images[0].resolutions[3]
          : [];

        newStories = [
          ...newStories,
          {
            description,
            domain: post.domain,
            id: post.id,
            image,
            position: post.position,
            title: post.title,
            url: post.url
          }
        ];
      }

      if (
        current >= length &&
        length > 0
      ) {
        current = 0;
        length = 0;
        stories = newStories;
      }
    }
  });
};

const getStories = () => {
  reddit.getSubreddit("worldnews").getHot({
    limit: 50
  }).then(posts => {
    newStories = [];
    length = posts.length;

    for (var i = 0; i < posts.length; i++) {
      getComments({
        ...posts[i],
        position: i,
      });
    }
  });
};

getStories();

setInterval(() => {
  getStories();
}, 60000);

app.get("/worldnews", (req, res) => {
  res.send({ stories });
});

app.use((req, res, next) => {
  if (
    req.secure ||
    req.headers.host === `localhost:${port}` ||
    req.url.includes('/.well-known/acme-challenge/')
  ) {
    next();
  } else {
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
});

app.get(`/.well-known/acme-challenge/${process.env.LETS_ENCRYPT_ROUTE}`,
  (req, res) => {
    res.send(process.env.LETS_ENCRYPT_VERIFICATION);
  },
);

app.use(express.static("./build"));

app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`App and API is live at http://localhost:${port}`);
});
