import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
export const FeedbackOption = ({options,  onCounterFeedback}
  // good,
  // neutral,
  // bad,
  // onLeaveGoodFeedback,
  // onLeaveNeutralFeedback,
  // onLeaveBadFeedback,
) => {
 
  return (
    <>
    {Object.keys(options).map(key => {
        return (
          <button
            className={s.btn}
            key={key}
            name={key}
            onClick={() => onCounterFeedback(key)}
          >
            {
              key
            }
          </button>
        );
      })}

    
    </>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.object.isRequired,
  onCounterFeedback: PropTypes.func.isRequired,
};
