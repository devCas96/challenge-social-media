import handleGoToTop from '../../../utilities/go-to-top';
import './go-to-top-button.css';

export default function GoToTopButton() {
  return (
    <button onClick={handleGoToTop} id='button-to-top'>
      <span />
    </button>
  );
}
