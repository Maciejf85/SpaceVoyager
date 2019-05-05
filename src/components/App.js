import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Module from "./Module";

const GlobalStyles = createGlobalStyle`

html{
  font-size: 10px;
}
body{
  padding:0;
  margin:0;
  font-family: 'Montserrat', sans-serif;
  background:#1D2124;
  color:white;
}
`;

const H1 = styled.h1`
  font-size: ${({ big }) => (big ? "5em" : "3em")};
  text-align: center;
  letter-spacing: 5px;
  color: ${({ isWhite }) => (isWhite ? "white" : "#f9c32b")};
`;
const client = new ApolloClient({
  uri: `https://swapi.apis.guru`
});
const getData = gql`
  {
    allPlanets {
      planets {
        name
        gravity
        diameter
        population
        rotationPeriod
      }
    }
  }
`;

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <H1 big isWhite>
          Planets
        </H1>
        <Query query={getData}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            console.log(data);
            // data.dogs.map(dog => (
            //   <option key={dog.id} value={dog.breed}>
            //     {dog.breed}
            //   </option>
            // ));
          }}
        </Query>

        <Module />
      </ApolloProvider>
    </>
  );
}

export default App;
