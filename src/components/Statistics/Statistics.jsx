import PropTypes from 'prop-types';

import Notification from './Notification';

import { StatPosition } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const totalFeedbacks = good + neutral + bad;
  return (
    <div>
      {totalFeedbacks === 0 ? (
        <Notification message="There is no feedback." />
      ) : (
        <>
          <StatPosition>Neutral: {neutral}</StatPosition>
          <StatPosition>Good: {good}</StatPosition>
          <StatPosition>Bad: {bad}</StatPosition>
          <StatPosition>Total: {total()}</StatPosition>
          {good > 0 && (
            <StatPosition>
              Positive feedback: {positivePercentage()}%
            </StatPosition>
          )}
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
