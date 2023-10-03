// CORE
import { Outlet } from 'react-router-dom';
// PARTS
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
// MUI
import {
  CssBaseline,
  createTheme,
  ThemeProvider,
  Container,
} from '@mui/material';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};
