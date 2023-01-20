import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  feedbackCounter = feedback => {
    const { good } = this.state;
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
      total: prevState.total + 1,
      positivePercentage: Math.round((good / (prevState.total + 1)) * 100),
    }));
  };

  // countTotalFeedback = (good, neutral, bad) => {
  // const total = good + neutral + bad;
  // this.setState({total});
  // }

  // countPositiveFeedbackPercentage = (good, total) => {
  // const positivePercentage = Math.round(good / total * 100);
  // this.setState({positivePercentage});
  // }

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.feedbackCounter}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}
