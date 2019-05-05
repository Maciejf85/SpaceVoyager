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
      population
      gravity
      terrains
      orbitalPeriod
      created
      climates
      rotationPeriod
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
