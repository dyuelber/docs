import { createBrowserRouter } from 'react-router-dom';
import ReactPage from '../components/react/react';
import Home from '../pages/home';

const router = createBrowserRouter([
  {
    path: '/', 
    element: ReactPage(),
  },
  {
    path: '/home', 
    element: Home(),
  },
  {
    path: '/docs', 
    element: ReactPage(),
  },
]);

export { router };