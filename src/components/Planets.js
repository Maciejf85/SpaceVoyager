import React from "react";
import { graphql } from "react-apollo";
import { getPlanetsList } from "../queries/queries";
import Pagination from "./Pagination";

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
      return <div>Loading Planets ...</div>;
    } else {
      return data.allPlanets.planets.map((item, index) => {
        if (index >= (page - 1) * 10 && index < page * 10) {
          return (
            <li key={item.id}>
              {item.name} {item.population} {item.gravity} {item.rotationPeriod}
              <button id={item.id} onClick={this.viewDetails}>
                more
              </button>
            </li>
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
        <h1>Planets list</h1>
        <ul>{this.displayPlanets()}</ul>
        <button name="prev" onClick={this.handlePageChange}>
          prev
        </button>
        <Pagination page={this.state.page} count={this.state.pagesCount} />
        <button name="next" onClick={this.handlePageChange}>
          next
        </button>
      </>
    );
  }
}

export default graphql(getPlanetsList)(Planets);
