import React from "react";

function Card(props) {
  // console.log(props)
  //set style using props:
  const styles = {
    backgroundColor: props.bgcolor,
    height: props.height,
    width: props.width,
  };
  return <div style={styles}>Hi</div>;
}
//defaultProps is a fallback if any props are missing
Card.defaultProps = {
  bgcolor: "#555",
  height: 25,
  width: 25,
};

export default Card;
