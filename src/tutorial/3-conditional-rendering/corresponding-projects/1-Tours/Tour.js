import React, { useState } from "react";

// III.Component
const Tour = ({ id, image, info, name, price, removeTour }) => {
  //2
  const [readMore, setReadMore] = useState(false);
  //1
  return (
    <article className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {/*2a conditional rendering: 
          if readMore is true render full info description 
          or if readMore is false => short description 200 printed characters*/}
          {readMore ? info : `${info.substring(0, 200)}...`}
          {/*2b toggle readMore state */}
          <button onClick={() => setReadMore(!readMore)}>
            {/*2c conditional name on button */}
            {readMore ? "show less" : " read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
