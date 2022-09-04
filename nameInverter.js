const nameInverter = function(name) {
  let newName = "";
  if (name === undefined) {
    throw "Error";
  }
  if (name) {
    const trimmedString = name.trim();
    const newString = trimmedString.split(" ");
    if (newString.length === 1) {
      if (newString[0] === "Dr.") {
        return "";
      }
      return newString;
    } else if (newString.length === 2) {
      if (newString[0] === "Dr.") {
        return (`${newString[0]} ${newString[1]}`);
      } else {
        return (`${newString[1]}, ${newString[0]}`);
      }
    } else if (newString.length === 3) {
      if (newString[0] === "Dr.") {
        return (`${newString[0]} ${newString[2]}, ${newString[1]}`);
      }
    }
  }
  return newName;
};
nameInverter(" steven");

module.exports = nameInverter;