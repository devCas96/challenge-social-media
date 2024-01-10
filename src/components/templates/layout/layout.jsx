// import Header from '../../molecules/header/header';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <>
    <main>
      <section>{children}</section>
    </main>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};