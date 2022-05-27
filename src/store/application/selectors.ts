import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

export const getSelectedApplication = (state: AppState) => state.application.selectedApplication;

const getPending = (state: AppState) => state.application.pending;

const getAppications = (state: AppState) => state.application.applications;

const getError = (state: AppState) => state.application.error;

export const getApplicationsSelector = createSelector(getAppications, (applications) => applications);

export const getPendingSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
