import React from "react";

const ErrorExample = () => {
  let title = "random title";

  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };
  return (
    <React.Fragment>
      {/*the title displayed 'Random title' */}
      <h2>{title}</h2>
      <button
        type="button"
        className="btn"
        //console logged "Hello people"
        onClick={handleClick}
      >
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
