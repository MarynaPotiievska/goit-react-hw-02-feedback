import PropTypes from 'prop-types';

import { FeedbackOptionsList, FeedbackOption } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {options.slice(0, 3).map(option => (
        <FeedbackOption
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackOption>
      ))}
    </FeedbackOptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
