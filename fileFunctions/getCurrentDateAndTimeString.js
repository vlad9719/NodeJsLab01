module.exports = function getCurrentDateAndTimeString() {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${day}-${month}-${year}-${hours}:${minutes}:${seconds}`;
};
