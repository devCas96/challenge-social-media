import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useBoundStore } from './hooks/stores/useBoundedStore';
import HomePage from './components/pages/home';
import LoginPage from './components/pages/login';

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
  const auth = useBoundStore((state) => state.authUser);
  let location = useLocation();

  if (auth === null) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return children;
}

RouteGuard.propTypes = {
  children: PropTypes.node,
};
