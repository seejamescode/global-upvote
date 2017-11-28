import React, { Component } from "react";
import ReactGA from 'react-ga';
import styled from "styled-components";
import Placeholder from "./Placeholder";

const Body = styled.div`
  display: ${props => props.url ? "initial" : "none"};

  @media (min-width: 1056px) {
    column-gap: 3.03vw;
    column-width: 20.21vw;
  }

  @media (min-width: 1650px) {
    column-gap: 50px;
    column-width: 346px;
  }

  p {
    line-height: 1.6;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  text-align: justify;
  
  p {
    margin-top: 0;
  }
`;

const Image = styled.img`
  margin-bottom: -1rem;
  position: absolute;
  width: 100%;
`;

const ImageContainer = styled.div`
  background: #909090;
  display: ${props => props.thumbnail && props.url !== "" ? "block" : "none"};
  margin-bottom: 2.17rem;
  position: relative;
  width: 100%;

  :after {
    content: "";
    display: ${props => props.thumbnail && props.url !== "" ? "block" : "none"};
    padding-bottom: ${props => props.height / props.width * 100}%;
  }
`;

const ReadMore = styled.a`
  color: inherit;
  font-weight: 400;
  text-decoration: none;
`;

const Right = styled.p`
  margin: 1rem 0 0 0;
  text-align: right;
`;

const Title = styled.h2`
  font-size: 1.618rem;
  font-weight: 400;
  line-height: 1.25;
  margin-top: 0;
  
  @media (min-width: 320px) {
    font-size: calc( 25.888px + (41.888 - 25.888) * (100vw - 320px) / (1056 - 320) );
  }
  
  @media (min-width: 1056px) {
    font-size: 2.618rem;
  }
`;

class Story extends Component {
  static defaultProps = {
    className: "",
    description: "",
    domain: "",
    image: {
      url: ""
    },
    title: "",
    url: ""
  };

  render() {
    return (
      <section
        className={
          this.props.thumbnail || this.props.double
            ? 'double'
            : null
        }
      >
        <Placeholder
          double={this.props.double}
          fetching={this.props.fetching}
          thumbnail={this.props.thumbnail}
        />
        <Content>
          <Title>{this.props.title}</Title>
          <ImageContainer
            thumbnail={this.props.thumbnail}
            height={this.props.image.height}
            url={this.props.image.url}
            width={this.props.image.width}
          >
            <Image alt="" src={this.props.image.url} />
          </ImageContainer>
          <Body
            url={this.props.url}
          >
            <Description
              dangerouslySetInnerHTML={{ __html: this.props.description }}
            />
            <Right>
              <ReadMore
                href={this.props.url}
                onClick={() => {ReactGA.event({
                  category: 'story',
                  action: 'click',
                  label: this.props.url
                })}}
              >
                Read more at {this.props.domain}
              </ReadMore>
            </Right>
          </Body>
        </Content>
      </section>
    );
  }
}

export default Story;
