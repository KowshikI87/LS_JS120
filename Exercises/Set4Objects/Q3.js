function objectsEqual(obj1, obj2) {
  let isSameNumKeys = Object.keys(obj1).length === Object.keys(obj2).length;
  let isAllKeyValPairSame = Object.keys(obj1).every(key => {
    return Object.keys(obj2).includes(key) && obj1[key] === obj2[key];
  });

  return (isSameNumKeys && isAllKeyValPairSame);
}


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false; require the first condition for this to be false