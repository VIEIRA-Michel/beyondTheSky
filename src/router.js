import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './views/Homepage/Homepage';
import Destination from './views/Destination/Destination';
import Crew from './views/Crew/Crew';
import Techonology from './views/Technology/Technology';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/destination',
                element: <Destination />,
            },
            {
                path: '/crew',
                element: <Crew />,
            },
            {
                path: '/technology',
                element: <Techonology />,
            },
        ],
    },
]);