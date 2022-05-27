import { IApplication } from "../store/application/types";
import { requests } from "../http/requests";

/**
 * Получение заявок
 */
export async function getApplications() {
    return await requests.get<IApplication[]>(`/applications`);
}