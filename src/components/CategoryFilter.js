import React from "react";

function CategoryFilter({ categories, selectedCategory, setCategory }) {

  const categoryList = categories.map((category) => {
    const className = selectedCategory === category ? "selected" : null
    return (
      <button key={category} className={className} onClick={() => setCategory(category)}>{category}</button>
    ) 
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
