// порядок сортировки свойств: ["name", "level"], остальные по алфавиту
export default function orderByProps(obj, arr) {
  const resultArray = [];
  let arrOnAlphabet = [];
  const properties = Object.keys(obj);

  function arrayPush(array) {
    for (let i = 0; i < array.length; i += 1) {
      const key = array[i];
      const value = obj[key];
      resultArray.push({ key, value });
    }
  }

  if (arr) {
    arrOnAlphabet = properties.filter((property) => !arr.includes(property));
    arrayPush(arr);
  } else {
    arrOnAlphabet = properties;
  }

  if (arrOnAlphabet.length > 0) {
    arrOnAlphabet.sort((a, b) => a.localeCompare(b));
    arrayPush(arrOnAlphabet);
  }
  return resultArray;
}
