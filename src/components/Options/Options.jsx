import React from "react";

const Options = ({ updateFeedback }) => {
  //   const handleReset = () => {
  //     alert(
  //       "Olumsuzluklar canını sıkmasın bunlardan ders çıkarmak ve anlamak senin elinde..Lotus çiçeğinin bataklıkta açtığını sakın unutma!"
  //     );
  //     updateFeedback("reset");
  //   };

  return (
    <div className="options">
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={() => updateFeedback("reset")}>Reset</button>
    </div>
  );
};
export default Options;
