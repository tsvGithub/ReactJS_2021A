import React, { useState } from "react";
import List from "./List";
import data from "./data";

// import "./styles.css";

function Main() {
  //set state
  const [animals, setAnimals] = useState(data);

  const title =
    animals.length >= 1 ? `There are ${animals.length} birthdays today` : `There is ${animals.length} birthday today`;

  return (
    <main>
      <section className="container">
        <h3>{title}</h3>
        <List animals={animals} />
        <button className="btn" onClick={() => setAnimals([])}>
          delete all
        </button>
      </section>
    </main>
  );
}

export default Main;
