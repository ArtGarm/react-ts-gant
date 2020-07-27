import { delay, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/core";

import { auth } from "../../actions";

interface ILogin {
  payload: string;
  type: string;
}

function* login({ payload }: ILogin): SagaIterator {
  yield delay(1000);
  console.log(payload);
}

export default function* loginSaga(): Generator {
  yield takeLatest(auth.login.start, login);
}
