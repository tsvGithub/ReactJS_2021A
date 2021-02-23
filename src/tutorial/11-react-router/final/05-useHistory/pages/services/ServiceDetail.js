import React from "react";
import { useParams, useHistory } from "react-router-dom";
// The useHistory hook allows us to programmatically go back
// and forward and jump to different spots within in the
// history of our application.
// Note: If you want to just click a button or a link and
// go to another location, use the Link tag.
// However, if you need to perform an operation such as
// running some JS before redirecting to another page, e.g.
// in a login page, then useHistory is the way to go.
// const history = useHistory();

import servicesData from "./servicesData";

function ServiceDetail() {
  const { serviceId } = useParams();
  //use history from useHistory hook
  const history = useHistory();
  // {
  //     length: 13,
  //     action: "PUSH",
  //     location: {
  //         pathname: "/services/2",
  //         search: "",
  //         hash: "",
  //         state: null,
  //         key: "nulft8"
  //     },
  //     createHref: createHref(location),
  //!!USEFUL!! push: push(path, state),
  //!!USEFUL!!replace: replace(path, state),
  //     go: go(n),
  //!!USEFUL!! goBack: goBack(),
  //     goForward: goForward(),
  //     block: block(prompt),
  //     listen: listen(listener)
  // }

  const thisService = servicesData.find((service) => service._id === serviceId);

  function handleClick() {
    console.log("Submitting...");
    //pretend ajax request
    setTimeout(() => {
      //call history.push as a function
      //and put in a new path to redirect programmatically
      //to another path. Like push it to the array af history
      history.push("/services");
    }, 2000);
    // //go back 1 p in the history
    // history.goBack()
    // //the same as:
    // history.go(-1)
    //"clean" history => replace the last place
    history.replace("");
  }

  return (
    <div>
      <h1>Service Detail Page</h1>
      <h3>
        {thisService.name} - ${thisService.price}
      </h3>
      <p>{thisService.description}</p>
      <button onClick={handleClick}>Go back to all services</button>
    </div>
  );
}

export default ServiceDetail;
