const file = require('./sample.json');
let arr = [];
function getPackageIntegrity(source, parentName) {
  for (let el in source) {
    if (source[el] && typeof source[el] === 'object') {
      getPackageIntegrity(source[el], el);
    } else if (el === 'integrity') {
      arr.push({
        name: parentName,
        integrity: source[el]
      });
    }
  }
}
getPackageIntegrity(file);
console.log(arr);

