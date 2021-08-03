let a = {
  word : 'hello',
  word2 : this.word //can't do this as the object a has not been created yet
};

console.log(a.word);
console.log(a.word2);
a.word2 = a.word;
console.log(a.word2);