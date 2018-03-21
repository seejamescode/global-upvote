import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${props => props.black};
  box-sizing: border-box;
  display: ${props => (!props.display ? "none" : null)};
  color: #fff;
  padding: 0.5rem 1rem;
  text-align: none;
  width: 100%;
`;

const Text = styled.p`margin: 0;`;

class Error extends Component {
  render() {
    return (
      <Container black={this.props.black} display={this.props.display}>
        <Text>
          The summary service Global Upvote relies on is down right now. We hope
          to see it back soon.
        </Text>
      </Container>
    );
  }
}

export default Error;
