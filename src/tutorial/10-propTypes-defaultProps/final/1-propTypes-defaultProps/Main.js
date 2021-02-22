import React from "react";
import Card from "./Card";
import CardClassComponent from "./CardClassComponent";

function App() {
  return (
    <div>
      {/*Component without parameters for using defaultProps */}
      <Card />
      {/*------------------- */}
      <Card bgcolor="pink" height={50} width={50} />
      <Card bgcolor="violet" height={75} width={75} />
      <Card bgcolor="gray" height={100} width={100} />
      <br />
      <hr />
      <br />
      {/*Class Component without parameters for using static defaultProps */}
      <CardClassComponent cardColor="red" height={200} width={200} />
      <CardClassComponent />
      <CardClassComponent cardColor="green" />
      {/*------------------- */}
    </div>
  );
}

export default App;
