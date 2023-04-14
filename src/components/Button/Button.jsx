import { StyledButton } from './Button.styles';
import PropTypes from 'prop-types';

const Button = ({ children, backgroundColor = 'primary', ...rest }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  backgroundColor: PropTypes.oneOf(['primary', 'secondary'])
};

// Button.defaultProps = {
//   backgroundColor: 'primary'
// };

export default Button;

//<Button>Click Me</Button>
//<Button label="Click Me" />
