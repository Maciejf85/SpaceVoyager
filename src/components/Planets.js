import React from "react";
import { graphql } from "react-apollo";
import { getPlanetsList } from "../queries/queries";
import Pagination from "./Pagination";
import Loading from "./layout/Loading";
import Module from "./layout/Module";
import Button from "./layout/Button";
import ListWrapper from "./layout/ListWrapper";
import H1 from "./layout/H1";
import H2 from "./layout/H2";
import PlanetInfo from "./layout/PlanetInfo";

class Planets extends React.Component {
  state = {
    page: this.props.page,
    numbers: this.props.numbers,
    pagesCount: this.props.numberOfPages
  };

  componentDidUpdate() {
    const count = this.props.data.allPlanets.planets.length;
    if (count !== this.state.numbers) {
      this.setState({
        numbers: count,
        pagesCount: count / 10
      });
    }
  }
  componentDidMount() {
    if (this.props.data.loading !== true) {
      const count = this.props.data.allPlanets.planets.length;
      if (count !== this.state.numbers) {
        this.setState({
          numbers: count,
          pagesCount: count / 10
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
      return <Loading>Loading Planets ...</Loading>;
    } else {
      return data.allPlanets.planets.map((item, index) => {
        if (index >= (page - 1) * 10 && index < page * 10) {
          return (
            <Module key={item.id}>
              <H1>{item.name}</H1>
              <PlanetInfo>
                <H2>
                  population:
                  <span>
                    {item.population === null ? "0" : item.population}
                  </span>
                </H2>
                <H2>
                  gravity: <span>{item.gravity}</span>
                </H2>
                <H2>
                  rotation Period: <span>{item.rotationPeriod}</span>
                </H2>
                <H2>
                  orbital Period:<span>{item.orbitalPeriod}</span>
                </H2>
                <H2>
                  terrain:
                  {item.terrains.map(item => {
                    return <span key={item}>{item} </span>;
                  })}
                </H2>
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
    return (
      <>
        <ListWrapper>{this.displayPlanets()}</ListWrapper>
        <ListWrapper>
          <Button name="prev" onClick={this.handlePageChange}>
            &lt; prev
          </Button>
          <Pagination page={this.state.page} count={this.state.pagesCount} />
          <Button name="next" onClick={this.handlePageChange}>
            next &gt;
          </Button>
        </ListWrapper>
      </>
    );
  }
}

export default graphql(getPlanetsList)(Planets);
