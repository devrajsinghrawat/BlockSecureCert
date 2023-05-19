export const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  
  export const objectValueToUpperCase = (obj) => {
    const newObj = Object.keys(obj).reduce((accumulator, key) => {
      return { ...accumulator, [key]: toTitleCase(obj[key]) };
    }, {});
  
    return newObj;
  };
  