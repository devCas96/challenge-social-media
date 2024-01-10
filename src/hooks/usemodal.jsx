import { useState } from 'react';

export default function useModal() {
  const [showModal, setShowModal] = useState(false);
  return {
    isModalShowing: showModal,
    setShowModal,
  };
}
