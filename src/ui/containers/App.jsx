// CORE
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';
// ENGINE
import { pages } from '../../engine/config/routers';
import { history } from '../../engine/init/store';
// PARTS
import { Layout } from './Layout';

export const App = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {pages.map((route) => (
            <Route path={route.link} element={route.element} key={route.link} />
          ))}
        </Route>
      </Routes>
    </HistoryRouter>
  );
};
