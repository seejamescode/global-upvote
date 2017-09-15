import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${props => props.black};
  box-sizing: border-box;
  display: ${props => !props.offline ? "none" : null};
  color: #fff;
  padding: .5rem 1rem;
  text-align: none;
  width: 100%;
`;

const Text = styled.p`
  margin: 0;
`;

class Offline extends Component {
  render() {
    return (
      <Container
        black={this.props.black}
        offline={this.props.offline}
      >
        <Text>
          You are offline and viewing saved stories. Reconnect to see the latest stories.
        </Text>
      </Container>
    );
  }
}

export default Offline;
