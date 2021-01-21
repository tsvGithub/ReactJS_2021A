import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

import "./styles.css";
//==============================
//10a
//The localStorage object stores the data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.
//  //Create a localStorage name/value pair with name="list" and value="list"
//Note: Name/value pairs are always stored as strings. Remember to convert them to another format when needed!

const getLocalStorage = () => {
  //get items from localStorage list
  let list = localStorage.getItem("list");
  //if list exist
  if (list) {
    //parse and return [list] from localStorage
    // return (list = JSON.parse(localStorage.getItem("list")));
    return JSON.parse(localStorage.getItem("list"));
  } else {
    //if list is not exist
    return [];
  }
};
//==================================
//1
function Main() {
  //2
  //state for form; title===name
  const [name, setName] = useState("");
  //array of items from localStorage (10b)
  const [list, setList] = useState(getLocalStorage());
  //flag for is Editing or not for button edit/submit
  const [isEditing, setIsEditing] = useState(false);
  //id of which item edit
  const [editID, setEditID] = useState(null);
  //notification for user
  const [alert, setAlert] = useState({
    //not displayed
    show: false,
    //msg for message on showAlert
    msg: "",
    //type for className: danger or success
    type: "",
  });
  //----------------------------
  //7
  const handleSubmit = (e) => {
    e.preventDefault();
    //7a if name is empty
    if (!name) {
      //display alert
      //   setAlert({ show: true, msg: "please enter value", type: "danger" });
      //or call func showAlert (*) & pass in values for show, type, msg
      showAlert(true, "danger", "please enter value");
    } //7b if there is name && isEditing===true
    else if (name && isEditing) {
      //deal with edit
      //set list to a new value
      setList(
        //map list
        list.map((item) => {
          //if item is editing
          if (item.id === editID) {
            //copy all properties from item & change title
            return { ...item, title: name };
          }
          //return item if it is not edited
          return item;
        })
      );
      //set name to empty
      setName("");
      //clear editID
      setEditID(null);
      //clear isEditing
      setIsEditing(false);
      //show alert
      showAlert(true, "success", "value changed");
    } //7c other
    else {
      //show alert
      showAlert(true, "success", "item added to the list");
      //create new item
      //id===date; title ===name from state
      const newItem = { id: new Date().getTime().toString(), title: name };
      //add item to the list
      setList([
        //previous value
        ...list,
        //add new item
        newItem,
      ]);
      //clear name state to empty
      setName("");
    }
  };
  //==========================
  //* 8 with default values
  const showAlert = (show = false, type = "", msg = "") => {
    //set alert with properties+values
    setAlert({ show, type, msg });
  };
  //-------------------
  // 5 deleting the all items
  const clearList = () => {
    //show alert with values
    showAlert(true, "danger", "empty list");
    //set state
    setList([]);
  };
  //-----------------------
  // 4
  const removeItem = (id) => {
    //show alert with values
    showAlert(true, "danger", "item removed");
    //filter list & return only items that don't clicked for remove
    setList(list.filter((item) => item.id !== id));
  };
  //---------------------------
  //4
  const editItem = (id) => {
    //get item with specific ID
    const specificItem = list.find((item) => item.id === id);
    //set state for 3b button value: edit/submit
    setIsEditing(true);
    //set editID to (id) for 7b
    setEditID(id);
    //fill in input with that title===name value
    //set state
    setName(specificItem.title);
  };
  //---------------------
  //10 SetItem + 10a getItem +10b state list
  //The localStorage object stores the data with no expiration date.
  //The data will not be deleted when the browser is closed, and will be available the next day, week, or year.
  //---------------------------------
  //every time list changed =>
  //Create a localStorage name/value pair with name="list" and value="list"
  //Note: Name/value pairs are always stored as strings. Remember to convert them to another format when needed!
  useEffect(() => {
    //call loaclStorage
    //set Item key=list; value= stringify list
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  //========================
  //3
  return (
    <section className="section-center">
      {/**6 */}
      <form className="grocery-form" onSubmit={handleSubmit}>
        {
          /* 8*/
          //if there is an alert => display Component
          alert.show && (
            <Alert
              //pass down 'show, msg, type' from state alert
              {...alert}
              //showAlert(show, type, msg)
              removeAlert={showAlert}
              //array of items
              list={list}
            />
          )
        }
        {/**3a */}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            //controlled input (state)
            value={name}
            //change state
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit" className="submit-btn">
            {
              //3b depends on state value
              isEditing ? "edit" : "submit"
            }
          </button>
        </div>
      </form>

      {/* 4 if there are items => display List*/}
      {list.length > 0 && (
        <div className="grocery-container">
          <List
            //prop items has an array of items
            //need for List to know when list is changed
            //to call useEffect
            items={list}
            //remove one item
            removeItem={removeItem}
            //edit item
            editItem={editItem}
          />
          {/**5 */}
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default Main;
