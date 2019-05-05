import React from "react";
import { gql } from "apollo-boost";
import { graphql } from 'react-apollo'


const getModuleInfo = gql`
{planet(id:"cGxhbmV0czox") {
  name
  population
  gravity
  terrains
  orbitalPeriod
  created
  climates
  rotationPeriod
  surfaceWater

  filmConnection{
    films{
      id
      title
      director
      releaseDate
    }
  }
  residentConnection{
    residents{
      name
      gender
    }
  }
}}
`;

class Module extends React.Component {

  displayPlanets = () => {
    const data = this.props.data;
    console.log(data.planet)

    if (data.loading) {
      return (
        <div>Loading Planets ...</div>
      )
    } else {
      return (
        <div>
          <ul><h1>{data.planet.name}</h1>
          <li>{data.planet.population}</li>
          <li>{data.planet.gravity}</li>
          <li>{data.planet.terrains}</li>
          <li>{data.planet.orbitalPeriod}</li>
          <li>{data.planet.created}</li>
          <li>{data.planet.climates}</li>
          <li>{data.planet.rotationPeriod}</li>
          <li>{data.planet.surfaceWater}</li>
 
            <h2>Movies</h2>
            {data.planet.filmConnection.films.map(item => (
              <li key={item.title}> {item.title}</li>
            ))}
            <h2>Persons</h2>
            {data.planet.residentConnection.residents.map(item => (
              <li key={item.name}> {item.gender}</li>
            ))}

          </ul>

          <button onClick={this.props.view}>more</button>
        </div>
      )
    }
  }



  render() {
    return (
      <>
        <ul>
          {this.displayPlanets()}
        </ul>
      </>
    )
  }
}

export default graphql(getModuleInfo)(Module);
