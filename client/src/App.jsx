import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import QueryExample from "components/QueryExample";
import GoogleLoginButton from "components/GoogleLoginButton";
import client from "./ApolloClient";
import UserContextProvider from "components/UserContextProvider";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <div>
          <GoogleLoginButton />
          <QueryExample />
        </div>
      </UserContextProvider>
    </ApolloProvider>
  );
};

export default App;
