import {
    FETCH_POINTS_FAILURE,
    FETCH_POINTS_REQUEST,
    FETCH_POINTS_SUCCESS,
    SET_POINT1,
    SET_POINT2
} from "./actionTypes";
import {
    FetchPointFailure,
    FetchPointFailurePayload,
    FetchPointsRequest,
    FetchPointsSuccess,
    FetchPointSuccessPayload,
    SetPoint,
    SetPointPayload
} from "./types";

export const setPoint1 = (payload: SetPointPayload): SetPoint => ({
    type: SET_POINT1,
    payload
});

export const setPoint2 = (payload: SetPointPayload): SetPoint => ({
    type: SET_POINT2,
    payload
});

export const fetchPointsRequest = (): FetchPointsRequest => ({
    type: FETCH_POINTS_REQUEST,
});

export const fetchPointsSuccess = (payload: FetchPointSuccessPayload): FetchPointsSuccess => ({
    type: FETCH_POINTS_SUCCESS,
    payload,
});

export const fetchPointsFailure = (payload: FetchPointFailurePayload): FetchPointFailure => ({
    type: FETCH_POINTS_FAILURE,
    payload,
});
