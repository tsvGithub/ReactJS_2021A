import React, { useState } from "react";

function UseStateForm() {
  const [inputData, setInputData] = useState({ firstName: "", lastName: "" });
  const [contactsData, setContactsData] = useState([]);

  function handleChange(event) {
    // update inputData state
    const { name, value } = event.target;
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    // add the inputData to the contactsData array
    event.preventDefault();
    setContactsData((prevContacts) => [...prevContacts, inputData]);
  }

  const contacts = contactsData.map((contact) => (
    <h2 key={contact.firstName + contact.lastName}>
      {contact.firstName} {contact.lastName}
    </h2>
  ));

  // console.log(contactsData)
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="First Name" name="firstName" value={inputData.firstName} onChange={handleChange} />
        <input placeholder="Last Name" name="lastName" value={inputData.lastName} onChange={handleChange} />
        <br />
        <button className="btn">Add contact</button>
      </form>
      {contacts}
    </>
  );
}

export default UseStateForm;
