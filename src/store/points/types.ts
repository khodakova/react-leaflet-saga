import {
    SET_POINT1,
    SET_POINT2,
    FETCH_POINTS_REQUEST,
    FETCH_POINTS_SUCCESS,
    FETCH_POINTS_FAILURE,
} from "./actionTypes";

export interface IPoint {
    id: number,
    name: string,
    x: number,
    y: number
}

export interface PointState {
    point1: IPoint | null,
    point2: IPoint | null,
    pending: boolean;
    points: IPoint[];
    error: string | null;
}

export interface SetPointPayload {
    point: IPoint
}

export interface SetPoint {
    type: typeof SET_POINT1 | typeof SET_POINT2,
    payload: SetPointPayload
}

export interface FetchPointSuccessPayload {
    points: IPoint[];
}

export interface FetchPointFailurePayload {
    error: string;
}

export interface FetchPointsRequest {
    type: typeof FETCH_POINTS_REQUEST;
}

export type FetchPointsSuccess = {
    type: typeof FETCH_POINTS_SUCCESS;
    payload: FetchPointSuccessPayload;
};

export type FetchPointFailure = {
    type: typeof FETCH_POINTS_FAILURE;
    payload: FetchPointFailurePayload;
};

export type PointsActions =
    | SetPoint
    | FetchPointsRequest
    | FetchPointsSuccess
    | FetchPointFailure;
