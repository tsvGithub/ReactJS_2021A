import React, { useState } from "react";
// short-circuit evaluation: || + &&
// Short-circuit evaluation means evaluating boolean
//expressions (logical AND and OR )
// a || b => a===true=> return a(1); a===false=> return b(2)
// a && b => a is true=>return b(2); a===false => return nothing;

// ternary operator: something ? first or second

const ShortCircuit = () => {
  const [text, setText] = useState("true");
  const [isError, setIsError] = useState(false);
  /******************** */
  // //||if text===false=>'hello world'(2); if text===true=>'text'(1)
  const firstValue = text || "hello world";
  // //&& if text===false=>''(1); if text===true=>'hello world'(2)
  const secondValue = text && "hello world";

  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1>

      {/*if there is TEXT(true) return it, otherwise (text===false) return 'john doe'  */}
      <h1>"TEXT" is true</h1>
      <h1>{text || "john doe"}</h1>
      {text && <h1>opposite of "text"</h1>}
      {!text && <h1>opposite of !"text"</h1>}

      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>

      {/*if there is Error(true) return <h1>Error...</h1>, 
      otherwise (Error===false) return nothing  */}
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
