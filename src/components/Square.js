import React from 'react';
import './Square.css';
// controlled component

// functional component layout nodes style
// const Square = (props) => {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// };

// functional component layout 1
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}&nbsp;
    </button>
  );
}

export default Square;
