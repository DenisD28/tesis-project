import React from 'react';
import { X } from 'lucide-react';
import { ModalComponentProps } from './ModalComponentType';

const ModalComponent: React.FC<ModalComponentProps> = ({ children, isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-40 ${isOpen ? '' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black/50"></div>
      <div className="w-full overflow-y-scroll scroll-hidden max-w-[35rem] max-h-[75vh] bg-white px-2 py-8 rounded shadow-lg opacity-100 z-50 mx-4">
        {children}
        <button className="absolute top-0 right-0 m-4 font-semibold flex gap-2 bg-red-600 text-white py-2 px-4 rounded-md" onClick={onClose}>
            <X />
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
