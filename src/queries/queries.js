import { gql } from "apollo-boost";

const getPlanetsList = gql`
  {
    allPlanets {
      planets {
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
const getModuleInfo = gql`
  query($id: ID) {
    planet(id: $id) {
      name
      diameter
      rotationPeriod
      orbitalPeriod
      gravity
      population
      climates
      terrains
      created
      edited
      surfaceWater

      filmConnection {
        films {
          id
          title
          director
          releaseDate
        }
      }
      residentConnection {
        residents {
          name
          gender
        }
      }
    }
  }
`;

export { getPlanetsList, getModuleInfo };
