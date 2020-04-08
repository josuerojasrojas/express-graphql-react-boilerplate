import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import QueryExample from "components/QueryExample";
import GoogleLoginButton from "components/GoogleLoginButton";
import client from "./ApolloClient";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <GoogleLoginButton />
        <QueryExample />
      </div>
    </ApolloProvider>
  );
};

export default App;
