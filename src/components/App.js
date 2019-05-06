import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import DisplayData from "./DisplayData";
import Layout from "./layout/layout";
import StyledWrapper from "./layout/StyledWrapper";

const client = new ApolloClient({
  uri: `https://swapi.apis.guru`
});

class App extends React.Component {
  state = {
    page: 1,
    selected: false
  };
  render() {
    return (
      <>
        <ApolloProvider client={client}>
          <Layout>
            <StyledWrapper>
              <DisplayData />
            </StyledWrapper>
          </Layout>
        </ApolloProvider>
      </>
    );
  }
}

export default App;
