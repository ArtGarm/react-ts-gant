import {all, fork} from 'redux-saga/effects';
import { Saga } from '@redux-saga/core';

import auth from './auth';

const sagas: Array<Saga> = [ ...auth ];

export default function* rootSaga() {
    yield all(sagas.map(saga => fork(saga)));
}