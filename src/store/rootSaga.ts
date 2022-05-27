import { all, fork } from "redux-saga/effects";

import applicationSaga from "./application/sagas";
import pointSaga from "./points/sagas";

export function* rootSaga() {
    yield all([fork(applicationSaga), fork(pointSaga)]);
}
