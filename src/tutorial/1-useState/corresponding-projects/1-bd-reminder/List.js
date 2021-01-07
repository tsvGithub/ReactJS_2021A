import React from "react";

function List({ animals }) {
  const animal = animals.map((animal) => (
    <article key={animal.id} className="animal">
      <img src={animal.image} style={{ width: 200 }} alt={animal.name} />
      <div>
        <h4>
          {animal.name} is {animal.age} years old
        </h4>
      </div>
    </article>
  ));
  return <div>{animal}</div>;
}

export default List;
