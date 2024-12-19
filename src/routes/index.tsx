import React, { Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

// Lazy-loaded components
const Home = React.lazy(() => import('../components/pages/Home'));
const Login = React.lazy(() => import('../components/pages/Login'));
const Dashboard = React.lazy(() => import('../components/pages/Dashboard'));

// Fallback loading component
const Loading = () => <div>Loading...</div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent: React.FC<LoadComponentProps> = ({ component: Component }) => (
    <Suspense fallback={<Loading />}>
        <Component />
    </Suspense>
);

const AllRoutes: React.FC = () => {
    return useRoutes([
        {
            path: '/',
            children: [
                {
                    path: '',
                    element: <LoadComponent component={Home} />,
                },
                {
                    path: 'login',
                    element: <LoadComponent component={Login} />,
                },
                {
                    path: 'dashboard',
                    element: <LoadComponent component={Dashboard} />,
                },
                {
                    path: '*',
                    element: <Navigate to="/" replace />,
                },
            ],
        },
    ]);
};

export default AllRoutes;
