import React, { Component } from "react";
import ReactGA from 'react-ga';
import styled from "styled-components";

const Container = styled.section`
  border: ${props => `3px solid ${props.black}`};
  padding-bottom: 50%;
  position: relative;
  width: 100%;

  @media (min-width: 640px) {
    width: 46.66%;
  }

  @media (min-width: 1056px) {
    padding-bottom: 22.58%;
    width: 22.58%;
  }
`;

const Content = styled.a`
  align-items: center;
  color: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  position: absolute;
  text-align: center;
  text-decoration: none;
  top: 0; bottom: 0; left: 0; right: 0;
  width: calc(100% - 2rem);

  * {
    font-style: italic;
    font-weight: 400;
    margin-bottom: 0;
  }

  svg {
    height: 50%;
  }

  @media (min-width: 1056px) {
    flex-direction: row;
    justify-content: space-around;

    * {
      margin-top: 0;
    }
  }
`;

const Text = styled.h2`
  flex: 0;
  font-size: 1rem;

  @media (min-width: 320px) {
    font-size: calc( 16px + (25.888 - 16) * (100vw - 320px) / (640 - 320) );
  }

  @media (min-width: 640px) {
    font-size: 1.618rem;
  }
`

class Ad extends Component {
  static defaultProps = {
    url: ""
  };

  render() {
    return (
      <Container
        black={this.props.black}
      >
        <Content
          href={this.props.url}
          onClick={() => {ReactGA.event({
            category: 'ad',
            action: 'click',
            label: this.props.text
          })}}
        >
          <svg
            dangerouslySetInnerHTML={{__html: this.props.svg}}
            viewBox="0 0 252 302"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          />
          <Text dangerouslySetInnerHTML={{__html: this.props.text}} />
        </Content>
      </Container>
    );
  }
}

export default Ad;
