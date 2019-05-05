import React from "react";
import { gql } from "apollo-boost";
import { graphql } from 'react-apollo'


const getPlanetsList = gql`
  {
    allPlanets {
      planets{
        id
        name
        population
        gravity
        terrains
        orbitalPeriod
        created
        climates
        rotationPeriod
        surfaceWater
    }
  }
}
`;

class Planets extends React.Component {
  state = {
    page: 1,
    numbers: 0
  }



  displayPlanets = () => {
    const data = this.props.data;
    const { page } = this.state;


    if (data.loading) {
      return (
        <div>Loading Planets ...</div>
      )
    } else {
      return data.allPlanets.planets.map((item, index) => {
        if (index >= ((page - 1) * 10) && index < page * 10) {
          return (
            <li key={item.id}>
              {item.name} {item.population} {item.gravity} {item.rotationPeriod} <button>more</button>
            </li>
          )
        }
      })
    }
  }






  render() {
    return (
      <>
        <h1>Planets list {this.props.page}</h1>
        <ul>
          {this.displayPlanets()}
        </ul>
      </>
    )
  }
}

export default graphql(getPlanetsList)(Planets);
