import React from "react";

const Feedback = ({ data }) => {
  let totalFeedback = data.good + data.bad + data.neutral;
  let positive = Math.round((data.good / totalFeedback) * 100);

  return (
    <ul style={{ listStyleType: "none" }}>
      {totalFeedback === 0 ? (
        <li style={{ backgroundColor: "red" }}>No feedback yet</li>
      ) : (
        <>
          <li>Good: {data.good}</li>
          <li>Neutral: {data.neutral}</li>
          <li>Bad: {data.bad}</li>
          <li>Total Feedback: {totalFeedback}</li>
          {positive > 0 ? (
            <li>Positive: {positive}%</li>
          ) : (
            <li>Positive Feedback: 0%</li>
          )}
        </>
      )}
    </ul>
  );
};
export default Feedback;
