import React from "react";

// III Component
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {/*return btn for each category */}
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            type="button"
            key={index}
            //fires filterItems func (Main.js 3) to filter data for item category
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
