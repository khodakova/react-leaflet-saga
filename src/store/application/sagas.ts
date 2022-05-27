import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchApplicationFailure, fetchApplicationSuccess, setSelectedApplication } from "./actions";
import { FETCH_APPLICATION_REQUEST } from "./actionTypes";
import { IApplication } from "./types";
import { getApplications } from "../../services/applicationService";

/**
 * Получение заявок и проброс их в строк
 * Выбираем первую заявку в качестве активной
 */
function* fetchApplicationSaga() {
    try {
        const response: IApplication[] = yield call(getApplications);
        yield put(
            fetchApplicationSuccess({
                applications: response,
            })
        );
        const selectedApplication = response[0];
        yield put(
            setSelectedApplication({
                selectedApplication: selectedApplication
            })
        );
    } catch (e: any) {
        yield put(
            fetchApplicationFailure({
                error: e.message,
            })
        );
    }
}

function* applicationSaga() {
    yield all([takeLatest(FETCH_APPLICATION_REQUEST, fetchApplicationSaga)]);
}

export default applicationSaga;
