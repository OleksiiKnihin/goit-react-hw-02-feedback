import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({onLeaveFeedback, options}) => (
    <ul className={css.feedback__list}>
        {options.map(option => (
            <li key={option}>
                <button className={css.feedback__item} type="button" name={option} onClick={onLeaveFeedback}>{option}</button>
            </li>))}
    </ul>)

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}
