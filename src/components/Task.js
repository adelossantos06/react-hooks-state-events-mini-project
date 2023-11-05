import React from "react";



function Task({ text, category }) {
  function handleClick(event) {
    const item = event.target.className;
    if (item.includes('delete')) {
      event.target.parentNode.remove()
    }
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick} >X</button>
    </div>
  );
}

export default Task;

