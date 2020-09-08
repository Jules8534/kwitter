import { GETONEUSER } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  result: null,
  loading: false,
  error: null
};

const getOneUser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default withAsyncReducer(GETONEUSER, getOneUser);