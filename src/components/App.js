import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import DisplayData from "./DisplayData";

const GlobalStyles = createGlobalStyle`

html{
  font-size: 15px;
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


class App extends React.Component {
  state={
    page:1,
    selected:false
  }
  render(){
  return (
    <>
      <ApolloProvider client={client}>
      <GlobalStyles/>
        <DisplayData />
      </ApolloProvider>
    </>
  );
}
}

export default App;
