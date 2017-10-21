import React, { Component } from "react";
import styled from "styled-components";

const gray = '#909090';

const Container = styled.div`
  flex-direction: column;
  display: ${props => props.fetching ? "flex" : "none"};
  grid-area: ${props => props.gridArea};
`;

const ImageContainer = styled.div`
  background: ${gray};
  display: ${props => props.thumbnail ? "initial" : "none"};
  margin-bottom: 2.17rem;
  padding-bottom: 50%;
  position: relative;
  width: 100%;
`;

const PlaceholderBody = styled.span`
  background: ${gray};
  height: .85rem;
  margin-bottom: .7rem;
  width: 100%;
`;

const PlaceholderBodyQuarter = styled.span`
  background: ${gray};
  height: .85rem;
  margin-bottom: .7rem;
  width: 100%;

  margin-bottom: 2rem;
  width: 25%;
`;

const PlaceholderReadMoreQuarter = styled.span`
  background: ${gray};
  height: .85rem;
  margin-left: 65%;
  width: 35%;
`;

const PlaceholderTitle = styled.span`
  background: ${gray};
  height: 2rem;
  margin: .6rem 0;
  width: 100%;
`;

const PlaceholderTitleMd = styled.span`
  background: ${gray};
  height: 2rem;
  margin: .6rem 0;
  width: 100%;

  display: none;

  @media (min-width: 640px) {
    display: initial;
  }
`;

const PlaceholderTitleLg = styled.span`
  background: ${gray};
  height: 2rem;
  margin: .6rem 0;
  width: 100%;

  display: none;

  @media (min-width: 1056px) {
    display: initial;
  }
`;

const PlaceholderTitleQuarter = styled.span`
  background: ${gray};
  height: 2rem;
  margin: .6rem 0;
  width: 100%;

  margin-bottom: 3.4rem;
  width: 25%;
`;

class Placeholder extends Component {
  render() {
    return (
      <Container
        fetching={this.props.fetching}
        gridArea={this.props.gridArea}
      >
        <PlaceholderTitle />
        <PlaceholderTitle />
        <PlaceholderTitleMd />
        <PlaceholderTitleLg />
        <PlaceholderTitleQuarter />

        <ImageContainer
          thumbnail={this.props.thumbnail}
        />

        <PlaceholderBody />
        <PlaceholderBody />
        <PlaceholderBody />
        <PlaceholderBodyQuarter />

        <PlaceholderBody />
        <PlaceholderBody />
        <PlaceholderBody />
        <PlaceholderBodyQuarter />

        <PlaceholderBody />
        <PlaceholderBody />
        <PlaceholderBody />
        <PlaceholderBodyQuarter />

        <PlaceholderReadMoreQuarter />
      </Container>
    );
  }
}

export default Placeholder;
