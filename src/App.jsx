import { useState, useEffect } from "react";
import "./App.css";

import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";

function App() {
  const localFeedback = JSON.parse(localStorage.getItem("feedback")) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(localFeedback);
  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });

    if (feedbackType === "reset") {
      alert(
        "Olumsuzluklar canını sıkmasın bunlardan ders çıkarmak ve anlamak senin elinde..Lotus çiçeğinin bataklıkta açtığını sakın unutma!"
      );
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    }
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback data={feedback} />
    </>
  );
}

export default App;
