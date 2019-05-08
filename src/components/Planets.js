import React from "react";
import { graphql } from "react-apollo";
import { getPlanetsList } from "../queries/queries";
import Pagination from "./Pagination";
import Loading from "./layout/Loading";
import Module from "./layout/Module";
import Button from "./layout/Button";
import PageButton from "./layout/PageButton";
import ListWrapper from "./layout/ListWrapper";
import H1 from "./layout/H1";
import PlanetInfo from "./layout/PlanetInfo";

class Planets extends React.Component {
  state = {
    page: this.props.page,
    numbers: this.props.numbers,
    pagesCount: this.props.numberOfPages,
    isReady: false
  };

  componentDidUpdate() {
    const count = this.props.data.allPlanets.planets.length;
    if (count !== this.state.numbers) {
      this.setState({
        numbers: count,
        pagesCount: count / 10,
        isReady: true
      });
    }
  }
  componentDidMount() {
    if (this.props.data.loading !== true) {
      const count = this.props.data.allPlanets.planets.length;
      if (count !== this.state.numbers) {
        this.setState({
          numbers: count,
          pagesCount: count / 10,
          isReady: true
        });
      }
    }
  }
  handlePageChange = e => {
    const value = e.target.name === "next" ? 1 : -1;
    const currPage = this.state.page;
    var page = currPage;

    if (currPage + value >= 1 && currPage + value <= this.state.pagesCount) {
      page = page + value;
    }
    this.setState({
      page
    });
  };
  viewDetails = e => {
    const planetId = e.target.id;
    const page = this.state.page;
    this.props.item(planetId, page);
  };

  displayPlanets = () => {
    const data = this.props.data;
    const { page } = this.state;

    if (data.loading) {
      return <Loading>Loading Planets</Loading>;
    } else {
      return data.allPlanets.planets.map((item, index) => {
        if (index >= (page - 1) * 10 && index < page * 10) {
          return (
            <Module key={item.id}>
              <H1>{item.name}</H1>
              <PlanetInfo>
                <li>
                  <span>population:</span>
                  {item.population === null ? "0" : item.population}
                </li>
                <li>
                  <span>gravity:</span>
                  {item.gravity}
                </li>

                <li>
                  <span>rotation period:</span> {item.rotationPeriod}
                </li>
                <li>
                  <span> orbital period:</span>
                  {item.orbitalPeriod}
                </li>
                <ul>
                  <span>terrain:</span>
                  {item.terrains.map(item => {
                    return <li key={item}>{item} </li>;
                  })}
                </ul>
                <ul>
                  <span>climates:</span>
                  {item.climates.map(item => {
                    return <li key={item}>{item} </li>;
                  })}
                </ul>
              </PlanetInfo>
              <Button module id={item.id} onClick={this.viewDetails}>
                more
              </Button>
            </Module>
          );
        } else {
          return null;
        }
      });
    }
  };

  render() {
    const { isReady } = this.state;
    return (
      <>
        <ListWrapper>{this.displayPlanets()}</ListWrapper>
        <ListWrapper>
          {isReady && (
            <>
              <PageButton name="prev" onClick={this.handlePageChange}>
                &lt; prev
              </PageButton>
              <Pagination
                page={this.state.page}
                count={this.state.pagesCount}
              />
              <PageButton name="next" onClick={this.handlePageChange}>
                next &gt;
              </PageButton>
            </>
          )}
        </ListWrapper>
      </>
    );
  }
}

export default graphql(getPlanetsList)(Planets);
