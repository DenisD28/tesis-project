import "../../css/App.css"
import React, { ReactNode } from "react"


interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export const ModalProduct: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null

    return (<>
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    </>)
}