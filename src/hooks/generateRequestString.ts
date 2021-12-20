export const generateRequestString = (body: any = {}): any => {
  if (typeof body === "undefined") {
    return [];
  } else {
    var isArray: boolean = Array.isArray(body);
    var requestString: string = "[";
    for (let i in body) {
      var val = body[i];
      if (typeof val !== "undefined" && typeof val !== "function") {
        if (!isArray) {
          requestString += i + "=";
        }
        if (typeof val === "object") {
          requestString += generateRequestString(val);
        } else {
          requestString += val;
        }
        requestString += isArray ? ", " : ",";
      }
    }
    requestString = requestString.slice(0, isArray ? -2 : -1);
    requestString += "]";
    return requestString;
  }
};
