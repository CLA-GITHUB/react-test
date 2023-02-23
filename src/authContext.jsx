import React, { useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //TODO
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user_id,
        token: action.payload.token,
        role: action.payload.role,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  const role =
    localStorage.getItem("role") && JSON.parse(localStorage.getItem("role"));
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "Logout",
    });
    localStorage.clear();
    window.location.href = "/" + role + "/login";
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const checkToken = async () => {
    const req = await sdk.check("admin");
    console.log(req);

    if (req.error) {
      tokenExpireError(dispatch, req.message);
    }
  };

  const resetContext = () => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("user") &&
      localStorage.getItem("role")
    ) {
      dispatch({
        type: "LOGIN",
        payload: {
          user_id: JSON.parse(localStorage.getItem("user_id")),
          token: JSON.parse(localStorage.getItem("token")),
          role: JSON.parse(localStorage.getItem("role")),
        },
      });
    }
  };

  React.useEffect(() => {
    //TODO
    checkToken();
    resetContext();
  }, [sdk, dispatch, tokenExpireError]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
