import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchPointsFailure, fetchPointsSuccess } from "./actions";
import { FETCH_POINTS_REQUEST } from "./actionTypes";
import { IPoint } from "./types";
import { getPoints } from "../../services/pointService";

/**
 * Получение всех точек и проброс их в стор
 */
function* fetchPointsSaga() {
    try {
        const response: IPoint[] = yield call(getPoints);
        yield put(
            fetchPointsSuccess({
                points: response,
            })
        );
    } catch (e: any) {
        yield put(
            fetchPointsFailure({
                error: e.message,
            })
        );
    }
}

function* pointsSaga() {
    yield all([takeLatest(FETCH_POINTS_REQUEST, fetchPointsSaga)]);
}

export default pointsSaga;
