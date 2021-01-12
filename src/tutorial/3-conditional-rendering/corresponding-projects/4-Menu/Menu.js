import React from "react";

// II Component
const Menu = ({ items }) => {
  //1
  return (
    <div className="section-center">
      {/*2 map Menu items */}
      {items.map((menuItem) => {
        // 2a destructuring props
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
