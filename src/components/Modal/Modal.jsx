import { useRef } from "react";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";

const Modal = ({ children, open, handleModalClose }) => {
  const overlayRef = useRef();
  const handleClose = (event) => {
    handleModalClose();
  };

  if (!open) return null;
  return createPortal(
    <div
      onClick={(e) => {
        if (overlayRef.current === e.target) handleClose();
      }}
      ref={overlayRef}
      className="fixed inset-0 z-50 flex flex-col items-center bg-black/70 p-10 backdrop-blur-sm"
    >
      <button onClick={handleClose} className="self-end rounded-full p-2 text-white">
        <HiX size="2rem" />
      </button>
      <div className="z-50 flex max-h-[90vh] flex-col gap-4 overflow-auto rounded-2xl bg-gray-50 p-8 shadow-2xl">
        {children}
      </div>
    </div>,
    document.getElementById("portal"),
  );
};

export default Modal;
