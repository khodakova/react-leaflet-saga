import {FETCH_POINTS_FAILURE, FETCH_POINTS_REQUEST, FETCH_POINTS_SUCCESS, SET_POINT1, SET_POINT2} from "./actionTypes";

import {PointsActions, PointState} from "./types";

const initialState: PointState = {
    point1: null,
    point2: null,
    pending: false,
    points: [],
    error: null,
};

export default (state = initialState, action: PointsActions) => {
    switch (action.type) {
        case SET_POINT1:
            return {
                ...state,
                point1: action.payload.point
            };
        case SET_POINT2:
            return {
                ...state,
                point2: action.payload.point
            };
        case FETCH_POINTS_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case FETCH_POINTS_SUCCESS:
            return {
                ...state,
                pending: false,
                points: action.payload.points,
                error: null,
            };
        case FETCH_POINTS_FAILURE:
            return {
                ...state,
                pending: false,
                points: [],
                error: action.payload.error,
            };
        default:
            return {
                ...state,
            };
    }
};
