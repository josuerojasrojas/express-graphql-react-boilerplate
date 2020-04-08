import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { UserContext } from "components/UserContextProvider";
import { STORAGE_JWT } from "constants/index";
import jwt_decode from "jwt-decode";

const AuthGoogle = gql`
  mutation AuthGoogle($accessToken: String!) {
    authGoogle(accessToken: $accessToken) {
      token
      name
    }
  }
`;

const GoogleLoginButton = () => {
  const { setUser } = useContext(UserContext);
  const [authGoogle] = useMutation(AuthGoogle, {
    onCompleted: (data) => {
      const token = data.authGoogle.token;
      localStorage.setItem(STORAGE_JWT, data.authGoogle.token);
      setUser(jwt_decode(token));
    },
  });

  const responseGoogle = (response) => {
    authGoogle({ variables: { accessToken: response.accessToken } });
  };

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
