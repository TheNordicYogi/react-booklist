import React from "react";
import ReactDOM from "react-dom";
import Book from "./componenents/Book"
import { books } from "./componenents/Books";

import "./index.css"




function Booklist() {
  return (
    <section className="booklist">
    {books.map((book)=>{
      return(
        <Book key={book.id} book={book}></Book>
      )
    })}
    </section>
  );
}



ReactDOM.render(<Booklist />, document.getElementById("root"));
