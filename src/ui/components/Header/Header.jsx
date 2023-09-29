// ENGINE
import { links } from '../../../engine/config/links';
// PARTS
import { Wrapper } from './components';
import { CustomButton } from '../CustomButton/CustomButton';
// MUI
import { Stack } from '@mui/material';

export const Header = () => {
  return (
    <Wrapper component="header">
      Header
      <Stack spacing={2} direction="row">
        <CustomButton to={links.main}>Home</CustomButton>
        <CustomButton to={links.about}>About</CustomButton>
      </Stack>
    </Wrapper>
  );
};
