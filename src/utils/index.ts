/**
 * Сортировка массива объектов по полю
 * @param field - поле, по которому будем сортировать
 */
export function byField<T>(field: keyof T) {
    return (a: T, b: T) => a[field] > b[field] ? 1 : -1;
}
