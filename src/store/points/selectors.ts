import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

export const getPoint1 = (state: AppState) => state.point.point1;
export const getPoint2 = (state: AppState) => state.point.point2;

const getPointsPending = (state: AppState) => state.point.pending;

const getPoints = (state: AppState) => state.point.points;

const getPointsError = (state: AppState) => state.point.error;

export const getPointsSelector = createSelector(getPoints, (points) => points);

export const getPendingSelector = createSelector(
    getPointsPending,
    (pending) => pending
);

export const getErrorSelector = createSelector(getPointsError, (error) => error);
