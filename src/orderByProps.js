// порядок сортировки свойств: ["name", "level"], остальные по алфавиту
export default function orderByProps(obj, arr) {
  const resultArray = [];
  let sortProperties = [];
  let resultProperties = [];
  const properties = Object.keys(obj);

  if (arr) {
    sortProperties = properties.filter((property) => !arr.includes(property));
    sortProperties.sort((a, b) => a.localeCompare(b));
    resultProperties = [...arr, ...sortProperties];
  } else {
    resultProperties = properties.sort((a, b) => a.localeCompare(b));
  }

  for (const property in obj) {
    const index = resultProperties.indexOf(property);
    resultArray[index] = { key: property, value: obj[property] };
  }
  return resultArray;
}
