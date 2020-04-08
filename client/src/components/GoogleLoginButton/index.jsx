import React from "react";
import GoogleLogin from "react-google-login";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const AuthGoogle = gql`
  mutation AuthGoogle($accessToken: String!) {
    authGoogle(accessToken: $accessToken) {
      token
      name
    }
  }
`;

const GoogleLoginButton = () => {
  const [authGoogle, { data }] = useMutation(AuthGoogle);

  const responseGoogle = (response) => {
    // console.log(response.accessToken);
    authGoogle({ variables: { accessToken: response.accessToken } });
  };

  console.log("data", data);

  return (
    <GoogleLogin
      clientId="520481995065-2kd38l4990787a6pnb1qvnhd0l5cr4g0.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  );
};

export default GoogleLoginButton;
