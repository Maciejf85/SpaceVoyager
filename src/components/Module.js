import React from "react";
import { graphql } from "react-apollo";
import { getModuleInfo } from "../queries/queries";
import Loading from "./layout/Loading";
import PlanetDetails from "./layout/PlanetDetails";
import H1 from "./layout/H1";
import CloseButton from "./layout/CloseButton";
import PersonList from "./layout/PersonList";

class Module extends React.Component {
  backToList = () => {
    this.props.view(this.props.page);
  };

  displayPlanets = () => {
    const data = this.props.data;

    if (data.loading) {
      return <Loading>Loading Planets </Loading>;
    } else {
      return (
        <div>
          <PlanetDetails>
            <H1 big>{data.planet.name}</H1>
            <li>
              <span>population: </span>
              {data.planet.population}
            </li>
            <li>
              <span>diameter: </span>
              {data.planet.diameter}
            </li>
            <li>
              <span>gravity:</span> {data.planet.gravity}
            </li>
            <ul>
              <span>terrains:</span>
              {data.planet.terrains.map(item => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
            <li>
              <span>rotation period:</span> {data.planet.rotationPeriod}
            </li>
            <li>
              <span>orbital period:</span> {data.planet.orbitalPeriod}
            </li>
            <li>
              <span>created:</span> {data.planet.created}
            </li>
            <li>
              <span>edited:</span> {data.planet.edited}
            </li>
            <ul>
              <span>climates:</span>
              {data.planet.climates.map(item => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
            <li>
              <span>rotationPeriod:</span> {data.planet.rotationPeriod}
            </li>
            <li>
              <span>surfaceWater:</span> {data.planet.surfaceWater}
            </li>

            <h2>Movies</h2>
            {data.planet.filmConnection.films.map(item => (
              <li key={item.title}>
                <span>title:</span> {item.title}
                <span>director:</span>
                {item.director}
                <span>date:</span>
                {item.releaseDate}
              </li>
            ))}
            <h2>Persons</h2>
            <PersonList>
              {data.planet.residentConnection.residents.map(item => (
                <li key={item.name}>
                  <span>name:</span> {item.name}
                  <span className="green">gender:</span>
                  {item.gender === "n/a" ? "robot" : item.gender}
                </li>
              ))}
              <CloseButton onClick={this.backToList}>back</CloseButton>
            </PersonList>
          </PlanetDetails>
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
