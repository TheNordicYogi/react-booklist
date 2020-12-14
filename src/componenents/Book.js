import React from 'react';


function Book(props) {
  const { img, title, author } = props.book;
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("Hello World");
  };
  const complexExample = () => {
    console.log({ author });
  };


  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}> {title} </h1>
      <h4> {author} </h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={complexExample}>
        More complex example
      </button>
    </article>
  );
}

export default Book

