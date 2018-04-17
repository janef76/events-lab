const handleFormSubmit = function(event) {
  event.preventDefault();
  const title = this.title.value;
  const author = this.author.value;
  const category = this.category.value;
  const genre = this.genre.value;
  addBookToList(title, author, category, genre);
  console.log(title, author, category, genre);


}

const addBookToList = function (titleInput, authorInput, categoryInput, genreInput) {

  const books = document.querySelector('#book-list')
  const book = document.createElement('ul');

  const titleLi = document.createElement('li');
  const authorLi = document.createElement('li');
  const categoryLi = document.createElement('li');
  const genreLi = document.createElement('li');

  titleLi.textContent = titleInput;
  authorLi.textContent = authorInput;
  categoryLi.textContent = categoryInput;
  genreLi.textContent = genreInput;


  books.appendChild(book);
  book.appendChild(titleLi);
  book.appendChild(authorLi);
  book.appendChild(categoryLi);
  book.appendChild(genreLi);
}

document.addEventListener('DOMContentLoaded', () => {

  const save = document.querySelector('#book-form');
  save.addEventListener('submit', handleFormSubmit);
});
