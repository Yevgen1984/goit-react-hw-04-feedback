import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
export const FeedbackOption = (props
  // good,
  // neutral,
  // bad,
  // onLeaveGoodFeedback,
  // onLeaveNeutralFeedback,
  // onLeaveBadFeedback,
) => {
  console.dir(props.onLeaveGoodFeedback);
  return (

    <>
      <button
        className={s.btn}
        name='good'
        key='good'
        type="button"
        onClick={props.onLeaveGoodFeedback}
      >
        {'good'[0].toUpperCase() + 'good'.slice(1)}
      </button>

      <button
        className={s.btn}
        name='neutral'
        key='neutral'
        type="button"
        onClick={props.onLeaveNeutralFeedback}
      >
        {'neutral'[0].toUpperCase() + 'neutral'.slice(1)}
      </button>

      <button
        className={s.btn}
        name='bad'
        key='bad'
        type="button"
        onClick={props.onLeaveBadFeedback}
      >
        {'bad'[0].toUpperCase() + 'bad'.slice(1)}
      </button>
    </>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
