// CORE
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
// ENGINE
import { store } from '../../engine/init/store';
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
        <Provider store={store}>
          <CssBaseline />
          <Header />
          <Container>
            <Outlet />
          </Container>
          <Footer />
        </Provider>
      </ThemeProvider>
    </>
  );
};
