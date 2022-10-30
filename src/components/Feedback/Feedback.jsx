import React from "react";
import css from './Feedback.module.css'

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
        return (
            <div className={css.feedback}>
                <h2>Please leave feedback</h2>
                <div className={css.feedback__buttons}>
                    <button type="button" name="good" onClick={this.increment}>Good</button>
                    <button type="button" name="neutral" onClick={this.increment}>Neutral</button>
                    <button type="button" name="bad" onClick={this.increment}>Bad</button>
                </div>
                <h2>Statistics</h2>
                <div className="feedback__statistics">
                    <p>Good: {this.state.good}</p>
                    <p>Neutral: {this.state.neutral}</p>
                    <p>Bad: {this.state.bad}</p>
                    <p>Total: {this.countTotalFeedback()}</p>
                    <p>Positive fedback: {this.countPositiveFeedbackPercentage()}%</p>
                </div>
            </div>
    )
}
}

export default Feedback;