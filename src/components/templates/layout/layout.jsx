import GoToTopButton from '../../atoms/go-to-top-button/go-to-top-button';
import Header from '../../molecules/header/header';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>
      <section>{children}</section>
      <GoToTopButton />
    </main>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
