import React from "react";
import { graphql } from "react-apollo";
import { getModuleInfo } from "../queries/queries";

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
            <li>terrains: {data.planet.terrains}</li>
            <li>orbitalPeriod: {data.planet.orbitalPeriod}</li>
            <li>created: {data.planet.created}</li>
            <li>climates: {data.planet.climates}</li>
            <li>rotationPeriod: {data.planet.rotationPeriod}</li>
            <li>surfaceWater: {data.planet.surfaceWater}</li>

            <h2>Movies</h2>
            {data.planet.filmConnection.films.map(item => (
              <li key={item.title}> {item.title}</li>
            ))}
            <h2>Persons</h2>
            {data.planet.residentConnection.residents.map(item => (
              <li key={item.name}>
                name: {item.name} gender:
                {item.gender === "n/a" ? "robot" : item.gender}
              </li>
            ))}
          </ul>

          <button onClick={this.backToList}>close</button>
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
