import React, { useState } from "react";




function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  function handleTextChange(e) {
    setText(e.target.value)
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      text: text,
      category: category,
    }

    onTaskFormSubmit(newTask)
  }



  return (

    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} >
          {categories.map((category) => {
            if (category !== 'All') {
              return <option key={category}>{category}</option>;
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
