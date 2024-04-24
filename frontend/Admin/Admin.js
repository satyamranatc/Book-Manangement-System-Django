let BookForm = document.getElementById('bookForm');
let AllBooks = [];
BookForm.addEventListener('submit', (e)=>
{
    e.preventDefault();
 

    let Book = {
        Img: "https://via.placeholder.com/300x200",
        BookTitle: e.target[0].value,
        Desc: e.target[1].value,
        Author: e.target[2].value,
        Price: e.target[3].value,
    }
    AllBooks.push(Book);
    console.log(AllBooks)
})