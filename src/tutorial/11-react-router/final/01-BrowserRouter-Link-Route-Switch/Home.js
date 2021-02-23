import React from "react";
//1.1
import { useLocation, useParams, useHistory, useRouteMatch } from "react-router-dom";

// II
//1
//Using the component prop gives us access to history,
//location, match and staticContext.
//Using children instead of the component prop does
//not automatically give our components access to these props.
//Solutions are using hooks such as useLocation, useParams, useHistory and useRouteMatch.
function Home(props) {
  return <h1>Home Page</h1>;
}

export default Home;

//built in props:
// {
//     history: {
//         length: 32,
//         action: "POP",
//         location: {
//             pathname: "/",
//             search: "",
//             hash: "",
//             state: null
//         },
//         createHref: createHref(location),
//         push: push(path, state),
//         replace: replace(path, state),
//         go: go(n),
//         goBack: goBack(),
//         goForward: goForward(),
//         block: block(prompt),
//         listen: listen(listener)
//     },
//     location: {
//         pathname: "/",
//         search: "",
//         hash: "",
//         state: null
//     },
//     match: {
//         path: "/",
//         url: "/",
//         isExact: true,
//         params: {}
//     },
//     staticContext: null
// }
