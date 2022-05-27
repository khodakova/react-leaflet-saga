import {
    CHANGE_APPLICATION,
    FETCH_APPLICATION_FAILURE,
    FETCH_APPLICATION_REQUEST,
    FETCH_APPLICATION_SUCCESS,
    SET_SELECTED_APPLICATION,
} from "./actionTypes";

import {ApplicationActions, ApplicationState} from "./types";
import {byField} from "../../utils";

const initialState: ApplicationState = {
    selectedApplication: null,
    pending: false,
    applications: [],
    error: null,
};

export default (state = initialState, action: ApplicationActions) => {
    switch (action.type) {
        case SET_SELECTED_APPLICATION:
            return {
                ...state,
                selectedApplication: action.payload.selectedApplication
            };
        case CHANGE_APPLICATION:
            // измененная заявка
            const changedApplication = action.payload.changedApplication;
            // все заявки без измененной
            const filteredApplications = [...state.applications].filter(item =>
                item.id !== changedApplication.id
            );
            // формируем обновленный массив заявок
            const newApplications = [...filteredApplications, changedApplication].sort(byField('id'));
            return {
                ...state,
                selectedApplication: changedApplication,
                applications: newApplications
            };
        case FETCH_APPLICATION_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case FETCH_APPLICATION_SUCCESS:
            return {
                ...state,
                pending: false,
                applications: action.payload.applications,
                error: null,
            };
        case FETCH_APPLICATION_FAILURE:
            return {
                ...state,
                pending: false,
                applications: [],
                error: action.payload.error,
            };
        default:
            return {
                ...state,
            };
    }
};
