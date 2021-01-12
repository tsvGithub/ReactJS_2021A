import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import "./styles.css";

//data
import items from "./data";
//4
//Unique Values ES6
//Set filters arr for unique categories
const allCategories =
  // 4) allCategories should be an array
  [
    "all", //3) also need 'all' category
    // 2) Set data structure => only get unique values;
    //2a) ... spread a new array
    ...new Set(
      //1) map over  data items for category property
      //returns all categories (3 breakfast, 3 lunch, 3 shakes...)
      //but we need only 1 for breakfast, 1 for lunch etc. => see above 2)
      items.map((item) => item.category)
    ),
  ];

// I Component
function Main() {
  //1 state
  const [menuItems, setMenuItems] = useState(items);
  //4a pass allCategories to state
  const [categories, setCategories] = useState(allCategories);
  //----------------
  // 3 filtering original data for items categories:
  const filterItems = (category) => {
    //if category===al => set all items to menuItems
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    //iterate over original data (items)
    //if item's category matches to recieved category
    //ruturn that item to newItems array
    const newItems = items.filter((item) => item.category === category);
    //update state with filtered data
    //& display only filtered Menu
    setMenuItems(newItems);
  };
  //---------------
  //2
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          {/**3a 4b */}
          <Categories categories={categories} filterItems={filterItems} />
          {/**2a */}
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default Main;
