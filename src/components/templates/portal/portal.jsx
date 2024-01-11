import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import ModalLayout from '../../organisms/modal-layout/modal-layout';

export default function Portal(props) {
  const { children } = props;
  const { state, setter } = props.modalState;

  return (
    <>
      {state &&
        createPortal(
          <ModalLayout
            onClose={() => {
              setter(false);
            }}
          >
            <ModalLayout.Body>{children}</ModalLayout.Body>
          </ModalLayout>,
          document.body
        )}
    </>
  );
}

Portal.propTypes = {
  children: PropTypes.node,
  modalState: PropTypes.object,
};
