"use client";
const Modal = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed overflow-x-hidden inset-0 flex justify-center items-center 
    transition-colors ${open ? "visible bg-black/20" : "invisible"}
    `}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl shadow p-6
        transition-all max-w-md 
        ${open ? "scale-100 opacity-100" : "scale-110 opacitiy-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <button
          className="absolute top-2 right-2 py-1 px-2 mr-1 mt-1
            border border-neutral-200 rounded-md text-gray-400
            bg-white hover:bg-gray-50 hover:text-gray-600"
          onClick={onClose}
        >
          X
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
