let button = document.querySelector("button");
button.addEventListener("click", addBook);

let books = [];

function addBook(){

    let newBook = {}

    newBook.author = document.querySelector("#author").value;
    newBook.title = document.querySelector("#title").value;
    newBook.genre = document.querySelector("#genre").value;
    newBook.pages = document.querySelector("#pages").value;

    books.push(newBook);

    let newBooks = JSON.stringify(books);

    sessionStorage.setItem("book", newBooks);

    addToPage();
}

function addToPage(){
    let gettingValues = sessionStorage.getItem("book");
    let convert = JSON.parse(gettingValues);

    for (i = 0; i < 1; i++) {

        console.log("Working!");

        let container = document.createElement("div");

        let author = document.createElement("h3");
        author.innerHTML = `Author: ${convert[convert.length - 1].author}`;
        author.setAttribute("contentEditable", "true");

        let title = document.createElement("h3");
        title.innerHTML = `Title: ${convert[convert.length - 1].title}`;
        title.setAttribute("contentEditable", "true");

        let genre = document.createElement("h3");
        genre.innerHTML = `Genre: ${convert[convert.length - 1].genre}`;
        genre.setAttribute("contentEditable", "true");

        let pages = document.createElement("h3");
        pages.innerHTML = `Pages: ${convert[convert.length - 1].pages}`;
        pages.setAttribute("contentEditable", "true");

        let deleteButton = document.createElement("button");
        deleteButton.addEventListener("click", deleteBook);
        deleteButton.innerHTML = "🗑";

        document.body.appendChild(container);
        container.appendChild(author);
        container.appendChild(title);
        container.appendChild(genre);
        container.appendChild(pages);
        container.appendChild(deleteButton);
    
        let reset = document.querySelectorAll("input");
        reset.forEach(a => {
            a.value = "";
        });
      }
}

function deleteBook(){
    this.parentNode.classList.add('removeBook');
}