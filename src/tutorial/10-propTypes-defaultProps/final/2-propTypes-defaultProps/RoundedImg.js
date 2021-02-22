import React from "react";
import PropTypes from "prop-types";

//(https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)

function RoundedImg(props) {
  return <img src={props.src} style={{ borderRadius: props.borderRadius }} className="round-img" />;
}

//DEFAULT PROPS
//defaultProps is a fallback if any props are missing
RoundedImg.defaultProps = {
  borderRadius: "50%",
};

//PROP TYPES
//propTypes allows you to specify incoming props
//should be of the specific data type and require
//Types checking for incoming props
//*****
//NB!!!if isRequired but isn't set => but it's in defaultProps => OK
RoundedImg.propTypes = {
  src: PropTypes.string.isRequired,
  //oneOf chooses from one of a couple options
  //oneOfType is function that takes an array of options (types)
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default RoundedImg;
