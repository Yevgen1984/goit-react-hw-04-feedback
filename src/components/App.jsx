import { useState, useEffect } from 'react';

import { Feedback } from './Feedback';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countGoodFeedback = () => {
    setGood(prevGood => prevGood + 1);
  };

  const countNeutralFeedback = () => {
    setNeutral(prevNeutral => prevNeutral + 1);
  };

  const countBadFeedback = () => {
    setBad(prevBad => prevBad + 1);
  };

  const countTotalFeedback = () => {
    let total = 0;
    total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let positive = 0;
    positive = Math.round((good / (good + neutral + bad)) * 100)
      ? Math.round((good / (good + neutral + bad)) * 100)
      : 0;
    return positive;
  };

  const total = countTotalFeedback();
  return (
    <>
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        countGoodFeedback={countGoodFeedback}
        countBadFeedback={countBadFeedback}
        countNeutralFeedback={countNeutralFeedback}
        total={total}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
      />
    </>
  );
};
