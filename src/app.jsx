import PropTypes from 'prop-types';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from './components/pages/home';
import LoginPage from './components/pages/login';
import useGlobalStore from './hooks/use-store';

export default function App() {
  return (
    <Routes>
      <Route path='/' index element={<LoginPage />} />
      <Route
        path='/home'
        element={
          <RouteGuard>
            <HomePage />
          </RouteGuard>
        }
      />
      <Route path='*' element={<LoginPage />} />
    </Routes>
  );
}

function RouteGuard({ children }) {
  const {
    states: { authUser },
  } = useGlobalStore();

  let location = useLocation();
  if (authUser === null) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return children;
}

RouteGuard.propTypes = {
  children: PropTypes.node,
};
