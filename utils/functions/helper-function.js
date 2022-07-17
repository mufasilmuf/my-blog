//function to trim a text...
export const TrimFunction = (text, textLength) => {
    var trimText;
    if (text.length > textLength) {
        trimText = text.slice(0, textLength) + '...';
    } else {
        trimText = text;
    }
    return trimText;
}

//function to convert the created at as string...
export const DateConvertor = (date) => {
    var formatter = new Intl.DateTimeFormat("en-us", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });
    return formatter.format(Date.parse(date));
}

//function to reduce the array length...
export const reduceArray = (array, length) => {
    const temp = [];
    array.map((item, index) => {
        index < length && temp.push(item);
    })
    return temp;
}