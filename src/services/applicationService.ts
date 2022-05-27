import { IApplication } from "../store/application/types";
import { requests } from "../http/requests";
import {applications} from "../applications";

/**
 * Получение заявок
 */
export async function getApplications() {
    return applications;
    // return await requests.get<IApplication[]>(`/applications`);
}
