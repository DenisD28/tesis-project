import React from 'react'

export interface FormSaleProps {
    setCliente: React.Dispatch<React.SetStateAction<string>>
    setNumeroFactura: React.Dispatch<React.SetStateAction<string>>
    setTipoPago: React.Dispatch<React.SetStateAction<string>>
    setNota: React.Dispatch<React.SetStateAction<string>>
    HandleNextOperation: () => void
}