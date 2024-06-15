import React from 'react'

export interface FormProdProps {
    // Nombre_Producto: string
    // codigo: string
    // setNombre: React.Dispatch<React.SetStateAction<string>>
    setCodigo: React.Dispatch<React.SetStateAction<string>>
    HandleNextOperation: () => void
}