import React, { useState } from "react";

export default React.memo(() => {
  //set state
  const [name, setName] = useState("");
  return (
    <label className="header-name">
      <input
        /* state */
        value={name}
        /*update state === new value */
        onChange={(e) => setName(e.target.value)}
        /* click  => setSelectionRange will take 
        starting & end index:
        starting=0; 
        end index=e.target.value.length of string
        => whole word/phrase
        */

        onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
        placeholder="Untitled"
      />
    </label>
  );
});
