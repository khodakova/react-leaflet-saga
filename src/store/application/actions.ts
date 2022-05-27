import {
    CHANGE_APPLICATION,
    FETCH_APPLICATION_FAILURE,
    FETCH_APPLICATION_REQUEST,
    FETCH_APPLICATION_SUCCESS,
    SET_SELECTED_APPLICATION,
} from "./actionTypes";
import {
    ChangeApplication,
    ChangeApplicationPayload,
    FetchApplicationFailure,
    FetchApplicationFailurePayload,
    FetchApplicationRequest,
    FetchApplicationSuccess,
    FetchApplicationSuccessPayload,
    SetSelectedApplication,
    SetSelectedApplicationPayload,
} from "./types";

/**
 * Выбор заявки
 * @param payload
 */
export const setSelectedApplication = (payload: SetSelectedApplicationPayload): SetSelectedApplication => ({
    type: SET_SELECTED_APPLICATION,
    payload
});

/**
 * Изменение заявки при выборе новой точки в селекте
 * @param payload
 */
export const changeApplication = (payload: ChangeApplicationPayload): ChangeApplication => ({
    type: CHANGE_APPLICATION,
    payload
});

/**
 * Загрузка заявок
 */
export const fetchApplicationRequest = (): FetchApplicationRequest => ({
    type: FETCH_APPLICATION_REQUEST,
});

/**
 * Успешная загрузка заявок
 * @param payload - должны получить массив заявок
 */
export const fetchApplicationSuccess = (payload: FetchApplicationSuccessPayload): FetchApplicationSuccess => ({
    type: FETCH_APPLICATION_SUCCESS,
    payload,
});

/**
 * Провальная попытка загрузки заявок
 * @param payload - ошибка
 */
export const fetchApplicationFailure = (payload: FetchApplicationFailurePayload): FetchApplicationFailure => ({
    type: FETCH_APPLICATION_FAILURE,
    payload,
});
