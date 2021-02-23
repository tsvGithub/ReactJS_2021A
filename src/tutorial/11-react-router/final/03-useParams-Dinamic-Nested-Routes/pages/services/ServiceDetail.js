import React from "react";

//useParam is a part of URL after /:
import { useParams } from "react-router-dom";
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

//data
import servicesData from "./servicesData";

//details
function ServiceDetail(props) {
  //useParam is a part of URL after /:
  //=> this is serviceId
  //destructuring serviceId
  const { serviceId } = useParams();
  console.log(serviceId);
  //In real world use AJAX call to get the info
  //about the specified service

  //find current service to display:
  const thisService =
    //serviceData array
    servicesData.find(
      (service) =>
        //check id
        service._id === serviceId
    );
  return (
    <div>
      <h1>Service Detail Page</h1>
      <h3>
        {thisService.name} - ${thisService.price}
      </h3>
      <p>{thisService.description}</p>
    </div>
  );
}

export default ServiceDetail;
