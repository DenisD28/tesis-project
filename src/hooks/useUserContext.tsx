import {
    ReactNode,
    createContext, useContext, useEffect, useState
} from 'react';
import { User } from '../Components/types.d';
import { infoGeneral } from '../services/Users/InfoUserServices';

// Definir el tipo para el contexto
interface GlobalContextType {
    usuario: User | undefined;

}

// Crear el contexto
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Crear un proveedor para el contexto
export const GlobalProvider = ({ children }: { children: ReactNode }) => {

    const [usuario, setUser] = useState<User>()
    const [haObtenidoDatos, setHaObtenidoDatos] = useState(false);

    useEffect(() => {
        if (!haObtenidoDatos) {
            getInfo();
            setHaObtenidoDatos(true);
        }
    }, [haObtenidoDatos]);

    const getInfo = async () => {
        try {
            const { usuario } = await infoGeneral();
            setUser(usuario);
        } catch (e) {
            // Manejar errores
        }
    }

    // Proporcionar el contexto y los valores
    return (
        <GlobalContext.Provider value={{ usuario }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Crear un hook personalizado para usar el contexto
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error('useGlobalContext debe ser utilizado dentro de un GlobalProvider');
    }

    return context;
};
