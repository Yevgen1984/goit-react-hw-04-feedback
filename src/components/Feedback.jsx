import { useState } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOption } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/SectionTitle';
import { Notification } from './Notification/Notification';

export const Feedback = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onCounterFeedback = key => {
    switch(key) {
      case 'good':
      setGood(prevState => prevState + 1);
      break;
      case 'neutral':
      setNeutral(prevState => prevState + 1);
      break;
      case 'bad':
      setBad(prevState => prevState + 1);
      break;
      default:
        break;
    }
  }
  
    const total = good + neutral + bad;
   
  const countPositiveFeedbackPercentage = Math.round((good / (good + neutral + bad)) * 100)
      ? Math.round((good / (good + neutral + bad)) * 100)
      : 0;
 

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOption
          onCounterFeedback={onCounterFeedback}
          options={{ good, neutral, bad }}

        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            total={total}
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification warning="There is no feedback" />
        )}
      </Section>
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.object,
  countFeedback: PropTypes.func,
  total: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.func,
};
