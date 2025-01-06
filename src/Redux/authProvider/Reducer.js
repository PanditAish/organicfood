import { logOut, loginSuccess } from "./Action";

const authReducer = (state = null, { type, payload }) => {
  switch (type) {
    
    case loginSuccess:
      return {
        ...state,
        data: payload,
      };
    case logOut:
      localStorage.removeItem("userr");
      return payload;
    default:
      return state;
  }
};

export default authReducer;