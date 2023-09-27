// CORE
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// ENGINE
import { pages } from '../../engine/config/routers';
// PARTS
import { Layout } from './Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {pages.map((route) => (
            <Route path={route.link} element={route.element} key={route.link} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
