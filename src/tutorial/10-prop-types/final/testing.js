import React from "react";
import PropTypes from "prop-types";
//shortcut "rafcp"

//Component for PropTypes
const testing = (props) => {
  return <div></div>;
};

testing.propTypes = {
  name: PropTypes.array.isRequired,
  //shorcut for PropTypes:
  // image:pt... ptar
};

export default testing;
