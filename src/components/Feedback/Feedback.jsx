import React from "react";
import css from './Feedback.module.css'
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    increment = (event) => {
        this.setState(prevState => {
            return { [event.target.name]: prevState[event.target.name] + 1 };
        });
    }
    
    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        let percentPositiveFeedback = (this.state.good /
            (this.state.good + this.state.neutral + this.state.bad) * 100);
        return Math.round(percentPositiveFeedback) || 0;

    }
    
    render() {
        const total = this.countTotalFeedback();
        return (
            <div className={css.feedback}>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.increment}/>
                </Section>

                <Section title="Statistics">
                    {total > 0 ? (
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}
                    total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
          ) : (
            <Notification message="There is no feedback" />
          )}
                </Section>
            </div>
    )
}
}

export default Feedback;