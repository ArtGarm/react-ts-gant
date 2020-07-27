import createAction from "../utils/actionsHelper";
import { IDefaultState, defaultState } from "../utils/actionsHelper/constants";

interface AuthInterface {
  logout: IDefaultState;
  check: IDefaultState;
  login: IDefaultState;
}

export default createAction(
  {
    login: defaultState,
    logout: defaultState,
    check: defaultState,
  },
  "auth_"
) as AuthInterface;
