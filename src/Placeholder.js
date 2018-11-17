import React, { Component } from "react";
import styled from "styled-components";

const gray = "#909090";

const Container = styled.div`
  flex-direction: column;
  display: ${props => (props.fetching ? "flex" : "none")};
  grid-area: ${props => props.gridArea};
`;

const ImageContainer = styled.div`
  background: ${gray};
  display: ${props => (props.double ? "initial" : "none")};
  margin-bottom: 2.17rem;
  padding-bottom: 50%;
  position: relative;
  width: 100%;
`;

const PlaceholderNormal = styled.p`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1056px) {
    display: ${props => (props.double ? "none" : "flex")};
  }
`;

const PlaceholderFeaturedLargeContainer = styled.div`
  display: none;

  @media (min-width: 1056px) {
    display: ${props => (props.double ? "flex" : "none")};
    justify-content: space-between;
    width: 100%;
  }
`;

const PlaceholderFeaturedLarge = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 346px;
  width: 20.21vw;
`;

const PlaceholderBody = styled.span`
  background: ${gray};
  height: 0.85rem;
  margin-bottom: 0.7rem;
  width: 100%;
`;

const PlaceholderBodyQuarter = styled.span`
  background: ${gray};
  height: 0.85rem;
  margin-bottom: 0.7rem;
  width: 100%;

  margin-bottom: 2rem;
  width: 25%;
`;

const PlaceholderReadMoreQuarter = styled.span`
  background: ${gray};
  height: 0.85rem;
  margin-left: 65%;
  width: 35%;
`;

const PlaceholderTitle = styled.span`
  background: ${gray};
  height: 2rem;
  margin: 0.6rem 0;
  width: 100%;
`;

const PlaceholderTitleMd = styled.span`
  background: ${gray};
  height: 2rem;
  margin: 0.6rem 0;
  width: 100%;

  display: none;

  @media (min-width: 640px) {
    display: initial;
  }
`;

const PlaceholderTitleLg = styled.span`
  background: ${gray};
  height: 2rem;
  margin: 0.6rem 0;
  width: 100%;

  display: none;

  @media (min-width: 1056px) {
    display: initial;
  }
`;

const PlaceholderTitleQuarter = styled.span`
  background: ${gray};
  height: 2rem;
  margin: 0.6rem 0;
  width: 100%;

  margin-bottom: 3.4rem;
  width: 25%;
`;

class Placeholder extends Component {
  render() {
    return (
      <Container fetching={this.props.fetching} gridArea={this.props.gridArea}>
        <PlaceholderTitle />
        <PlaceholderTitle />
        <PlaceholderTitleMd />
        <PlaceholderTitleLg />
        <PlaceholderTitleQuarter />

        <ImageContainer double={this.props.double} />

        <PlaceholderNormal double={this.props.double}>
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
        </PlaceholderNormal>

        <PlaceholderFeaturedLargeContainer double={this.props.double}>
          <PlaceholderFeaturedLarge>
            <PlaceholderBody />
            <PlaceholderBody />
            <PlaceholderBody />
            <PlaceholderBody />
            <PlaceholderBody />
            <PlaceholderBodyQuarter />

            <PlaceholderBody />
            <PlaceholderBody />
          </PlaceholderFeaturedLarge>

          <PlaceholderFeaturedLarge>
            <PlaceholderBody />
            <PlaceholderBodyQuarter />

            <PlaceholderBody />
            <PlaceholderBody />
            <PlaceholderBody />
            <PlaceholderBodyQuarter />

            <PlaceholderReadMoreQuarter />
          </PlaceholderFeaturedLarge>
        </PlaceholderFeaturedLargeContainer>
      </Container>
    );
  }
}

export default Placeholder;
