import PropTypes from 'prop-types';
import './modal-layout.css';

const ModalLayout = ({ children, onClose }) => {
  return (
    <div className='modal'>
      <div className='modal-container'>
        {children}
        <div className='modal-container__close'>
          <button onClick={onClose}>close</button>
        </div>
      </div>
    </div>
  );
};

const ModalBody = ({ children }) => {
  if (!children) return <h2>Something went wrong</h2>;
  return children;
};

ModalLayout.Body = ModalBody;

export default ModalLayout;

ModalLayout.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

ModalBody.propTypes = {
  children: PropTypes.node,
};
