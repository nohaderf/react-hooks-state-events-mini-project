import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("code")

  const categoryOptions = categories.map((category) => {
    return <option key={category}>{category}</option>
  })

  function handleSubmit(e){
    e.preventDefault()
      // when form submits, run onTaskFormSubmit callback to add newTask to tasks list in App
    onTaskFormSubmit({text, category})
    // resent text and category
    setText("") 
    setCategory("code")

  }

  console.log({text, category})
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
