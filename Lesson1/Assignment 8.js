function createBook(title, author, read = false) {
  return {
    title: title,
    author: author,
    read: read,
    readBook() {
      this.read = true;
    },
    description() {
      return `${title} was written by ${author}` +
             `I ${this.read ? 'have' : "haven't"} read it.`;
    }
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

console.log(book1.read); // => false
console.log(book2.read); // => false
console.log(book3.read); // => true