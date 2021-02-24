import React from "react";
import { Link, useLocation } from "react-router-dom";
// useLocation gives us easy access to information about
//the location in your app, i.e. the path that you are
//currently at.
import servicesData from "./servicesData";

function ServicesList() {
  //use location hook
  const location = useLocation();
  console.log(location);
  // {
  //NB=>pathname for full path were I'm in the APP
  //     pathname: "/services",
  //NB=>search for search query string in the path
  //that is after and including ?mark to the end:
  //(example===>search: "?something=hello&blah=goodbye")
  //     search: "",
  //     hash: "",
  //NB=>state for message to be send through ReactRouter
  //     state: null,
  //     key: "qyfp8w"
  // }
  const services = servicesData.map((service) => (
    <div key={service._id}>
      <h3>
        <Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}
      </h3>
    </div>
  ));
  return (
    <div>
      <h1>Services List Page</h1>
      {services}
    </div>
  );
}

export default ServicesList;
