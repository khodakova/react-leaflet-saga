import { requests } from "../http/requests";
import { IPoint } from "../store/points/types";

/**
 * Получение всех точек
 */
export async function getPoints() {
    return await requests.get<IPoint[]>(`/points`);
}