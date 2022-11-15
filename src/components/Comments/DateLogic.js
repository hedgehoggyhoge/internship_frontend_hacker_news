export function dateLogic(date) {
    const dateFormat = new Date(date * 1000);
    const displayDate = `${dateFormat.getDate()}.${dateFormat.getMonth() + 1}.${dateFormat.getFullYear()}`;
    return displayDate
}