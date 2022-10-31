import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div>{ message }</div>
  );
}
 
Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;