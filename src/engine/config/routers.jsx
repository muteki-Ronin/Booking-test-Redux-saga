// PARTS
import { MainPage } from '../../ui/pages/MainPage/MainPage';
import { HotelsPage } from '../../ui/pages/HotelsPage/HotelsPage';
import { AboutPage } from '../../ui/pages/AboutPage/AboutPage';
import { ErrorPage } from '../../ui/pages/ErrorPage/ErrorPage';
// ENGINE
import { links } from './links';

export const pages = [
  {
    link: links.main,
    element: <MainPage />,
  },
  {
    link: links.hotels,
    element: <HotelsPage />,
  },
  {
    link: links.about,
    element: <AboutPage />,
  },
  {
    link: links.error,
    element: <ErrorPage />,
  },
];
