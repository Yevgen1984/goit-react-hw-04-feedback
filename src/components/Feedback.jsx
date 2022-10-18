// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOption } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/SectionTitle';
import { Notification } from './Notification/Notification';

export const Feedback = ({
  good,
  neutral,
  bad,
  countGoodFeedback,
  countNeutralFeedback,
  countBadFeedback,
  total,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOption
          onLeaveGoodFeedback={countGoodFeedback}
          onLeaveNeutralFeedback={countNeutralFeedback}
          onLeaveBadFeedback={countBadFeedback}
          good={good}
          neutral={neutral}
          bad={bad}
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
