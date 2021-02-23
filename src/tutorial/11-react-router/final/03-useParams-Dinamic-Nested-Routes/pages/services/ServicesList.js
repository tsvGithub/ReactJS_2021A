import React from "react";
import servicesData from "./servicesData";
import { Link } from "react-router-dom";

function ServicesList() {
  const servicesItems = servicesData.map((item) => (
    <h3 key={item._id}>
      {/*dinamic route */}
      <Link to={`/services/${item._id}`}>{item.name}</Link> - ${item.price}
    </h3>
  ));
  return (
    <div>
      <h1>Services List Page</h1>
      {servicesItems}
    </div>
  );
}

export default ServicesList;
