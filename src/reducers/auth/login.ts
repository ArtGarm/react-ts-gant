import { auth } from "../../actions";

interface IAction {
  type: string;
  payload: any;
}

const initialState = {
  loading: true,
};

export default function check(state = initialState, action: IAction) {
  switch (action.type) {
    case auth.login.start:
      return { ...state, loading: true };

    case auth.login.end:
      return {
        ...state,
        loading: false,
      };

    case auth.login.error:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
