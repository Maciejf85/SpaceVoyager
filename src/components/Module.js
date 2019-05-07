import React from "react";
import { graphql } from "react-apollo";
import { getModuleInfo } from "../queries/queries";
import Button from "./layout/Button";

class Module extends React.Component {
  backToList = () => {
    this.props.view(this.props.page);
  };

  displayPlanets = () => {
    const data = this.props.data;

    if (data.loading) {
      return <div>Loading Planets ...</div>;
    } else {
      return (
        <div>
          <ul>
            <h1>{data.planet.name}</h1>
            <li>population: {data.planet.population}</li>
            <li>gravity: {data.planet.gravity}</li>
            <ul>
              terrains:
              {data.planet.terrains.map(item => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
            <li>orbitalPeriod: {data.planet.orbitalPeriod}</li>
            <li>created: {data.planet.created}</li>
            <ul>
              climates:
              {data.planet.climates.map(item => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
            <li>rotationPeriod: {data.planet.rotationPeriod}</li>
            <li>surfaceWater: {data.planet.surfaceWater}</li>

            <h2>Movies</h2>
            {data.planet.filmConnection.films.map(item => (
              <li key={item.title}>
                {item.title} {item.director} {item.releaseDate}
              </li>
            ))}
            <h2>Persons</h2>
            {data.planet.residentConnection.residents.map(item => (
              <li key={item.name}>
                name: {item.name} gender:
                {item.gender === "n/a" ? "robot" : item.gender}
              </li>
            ))}
          </ul>

          <Button onClick={this.backToList}>close</Button>
        </div>
      );
    }
  };

  render() {
    return (
      <>
        <ul>{this.displayPlanets()}</ul>
      </>
    );
  }
}

export default graphql(getModuleInfo, {
  options: props => {
    return {
      variables: {
        id: props.id
      }
    };
  }
})(Module);
