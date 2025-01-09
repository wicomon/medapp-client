interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // console.log({isOpen})
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-6 rounded shadow-lg w-full max-w-lg mx-4 relative max-h-[90vh] md:max-h-full overflow-y-auto'>
        <button
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl'
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
