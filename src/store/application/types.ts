import {
    FETCH_APPLICATION_REQUEST,
    FETCH_APPLICATION_SUCCESS,
    FETCH_APPLICATION_FAILURE,
    SET_SELECTED_APPLICATION, CHANGE_APPLICATION,
} from "./actionTypes";

export interface IApplication {
    id: number,
    number: number,
    customer: string,
    point1: number,
    point2: number
}

export interface ApplicationState {
    selectedApplication: IApplication | null,
    pending: boolean;
    applications: IApplication[];
    error: string | null;
}

export interface SetSelectedApplicationPayload {
    selectedApplication: IApplication;
}
export type SetSelectedApplication = {
    type: typeof SET_SELECTED_APPLICATION;
    payload: SetSelectedApplicationPayload;
}

export interface ChangeApplicationPayload {
    changedApplication: IApplication;
}
export type ChangeApplication = {
    type: typeof CHANGE_APPLICATION;
    payload: ChangeApplicationPayload;
}

export interface FetchApplicationSuccessPayload {
    applications: IApplication[];
}
export type FetchApplicationSuccess = {
    type: typeof FETCH_APPLICATION_SUCCESS;
    payload: FetchApplicationSuccessPayload;
};

export interface FetchApplicationFailurePayload {
    error: string;
}
export type FetchApplicationFailure = {
    type: typeof FETCH_APPLICATION_FAILURE;
    payload: FetchApplicationFailurePayload;
};

export interface FetchApplicationRequest {
    type: typeof FETCH_APPLICATION_REQUEST;
}

export type ApplicationActions =
    | SetSelectedApplication
    | ChangeApplication
    | FetchApplicationRequest
    | FetchApplicationSuccess
    | FetchApplicationFailure;
