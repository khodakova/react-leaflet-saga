import { requests } from "../http/requests";
import { IPoint } from "../store/points/types";
import {points} from "../points";

/**
 * Получение всех точек
 */
export async function getPoints() {
    return points;
    // return await requests.get<IPoint[]>(`/points`);
}
