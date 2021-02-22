import React from "react";

class CardClassComponent extends React.Component {
  //for Class Component use static:
  static defaultProps = {
    cardColor: "blue",
    height: 100,
    width: 100,
  };

  render() {
    const styles = {
      backgroundColor: this.props.cardColor,
      height: this.props.height,
      width: this.props.width,
    };

    return <div style={styles}></div>;
  }
}
export default CardClassComponent;
