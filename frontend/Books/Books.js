let BookMain = document.getElementById("BookMain");

async function GetBooks()
{
    let BookData = await fetch("http://127.0.0.1:8000/api/books")
    BookData = await BookData.json();
    console.log(BookData);

}
GetBooks()


let Books = [
    {
        img: "https://via.placeholder.com/300x200",
        title: "The Hobbit",
        author: "Dummy",
        desc: "Hi By Book"
    },
    {
        img: "https://via.placeholder.com/300x200",
        title: "The Hobbit",
        author: "Dummy",
        desc: "Hi By Book"
    },
    {
        img: "https://via.placeholder.com/300x200",
        title: "The Hobbit",
        author: "Dummy",
        desc: "Hi By Book"
    },
    {
        img: "https://via.placeholder.com/300x200",
        title: "The Hobbit",
        author: "Dummy",
        desc: "Hi By Book"
    },
    {
        img: "https://via.placeholder.com/300x200",
        title: "The Hobbit",
        author: "Dummy",
        desc: "Hi By Book"
    },
    {
        img: "https://via.placeholder.com/300x200",
        title: "The Hobbit",
        author: "Dummy",
        desc: "Hi By Book"
    },
    {
        img: "https://via.placeholder.com/300x200",
        title: "The Hobbit",
        author: "Dummy",
        desc: "Hi By Book"
    },
]


Books.map((Book)=>{
    BookMain.innerHTML += `
    <div class="BookCard">
    <img src= ${Book.img} alt="Dummy Image">
    <div id="BookContent">
      <h2>${Book.title}</h2>
      <p>${Book.desc}</p>
      <p>${Book.author}</p>
      <button>Read Now</button>
    </div>
  </div>
    
    `

})