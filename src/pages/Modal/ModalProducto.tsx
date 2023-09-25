import { useState } from "react";
import { ModalProduct } from "../../Components/Modal/ModalProducto";

export const modalProducto = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Abrir Modal</button>
            <ModalProduct isOpen={isModalOpen} onClose={closeModal}>
                <h2>Contenido del Modal</h2>
                <p>Este es el contenido del modal.</p>
                <button onClick={closeModal}>Cerrar Modal</button>
            </ModalProduct>
        </div>
    );
}