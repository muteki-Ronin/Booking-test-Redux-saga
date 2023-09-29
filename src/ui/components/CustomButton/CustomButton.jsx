// CORE
import PropTypes from 'prop-types';
// MUI
import { Button } from '@mui/material';
// PARTS
import { LinkWrapper } from './components';

export const CustomButton = (props) => {
  const { disabled, type, children, sx, color, to } = props;
  return (
    <Button
      disabled={disabled}
      variant="contained"
      type={type}
      sx={{ color, ...sx }}
    >
      {to ? (
        <LinkWrapper to={to} style={{ color }}>
          {children}
        </LinkWrapper>
      ) : (
        { children }
      )}
    </Button>
  );
};

// Test lib.
CustomButton.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  color: PropTypes.string,
};

CustomButton.defaultProps = {
  disabled: false,
  type: 'button',
  color: '#fff',
};
