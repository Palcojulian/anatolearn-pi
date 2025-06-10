/**
 * @description get data form localStorage
 */
export const getData = (datakey: string): string | null => {
    return window.localStorage.getItem(datakey);
};

/**
 * @description save data into localStorage
 * @param data: string
 */
export const saveData = (datakey: string, data: string): void => {
    window.localStorage.setItem(datakey, data);
};

/**
 * @description remove data form localStorage
 */
export const destroyData = (datakey: string): void => {
    window.localStorage.removeItem(datakey);
};

export const destroyAllData = (): void => {
    window.localStorage.clear()
};

export default { getData, saveData, destroyData, destroyAllData };