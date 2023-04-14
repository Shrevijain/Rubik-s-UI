import { StyledButton } from './Button.styles';
import PropTypes from 'prop-types';

const Button = ({ label, backgroundColor = 'primary', ...rest }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} {...rest}>
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.oneOf(['primary', 'secondary']),
  label: PropTypes.string.isRequired
};

// Button.defaultProps = {
//   backgroundColor: 'primary'
// };

export default Button;
