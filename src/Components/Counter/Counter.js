import React from "react"; //ES6

const Counter = (props) => {
  const num = 1;

  return (
    <div>
      <p> This box is {props.count} </p>
    </div>
  );
};

export default Counter;

// function Counter(){

// } //same as above
