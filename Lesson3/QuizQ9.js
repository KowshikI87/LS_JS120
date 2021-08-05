function convertCase(char) {
  return char.toUpperCase();
}


let str = 'Naveed Fida';
//Solution 1
// str = [1, 2, 3].map.call(str, convertCase).join('');
str = Array.from(str).map(convertCase).join("");
console.log('stop');