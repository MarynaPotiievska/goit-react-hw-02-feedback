import PropTypes from 'prop-types';

import Notification from './Notification';

import { StatPosition } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const totalFeedbacks = total(good, neutral, bad);
  const positiveFeedbacksPercentage = positivePercentage(good, totalFeedbacks);

  return (
    <div>
      {totalFeedbacks === 0 ? (
        <Notification message="There is no feedback." />
      ) : (
        <>
          <StatPosition>Neutral: {neutral}</StatPosition>
          <StatPosition>Good: {good}</StatPosition>
          <StatPosition>Bad: {bad}</StatPosition>
          <StatPosition>Total: {totalFeedbacks}</StatPosition>
          <StatPosition>
            Positive feedback: {positiveFeedbacksPercentage}%
          </StatPosition>
        </>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
