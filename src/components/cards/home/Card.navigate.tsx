import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"


const links = [
    {
        name: 'Viajes',
        link: '/home'
    },
    {
        name: 'Vehiculos',
        link: '/vehicles'
    },
    {
        name: 'Clientes',
        link: '/clients'
    },
    {
        name: 'Conductores',
        link: '/drivers'
    }

]

export function CardNavigate() {
    const navigate = useNavigate()
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState<string>('');
    useEffect(() => {
        // Obtener el segmento de la URL después de la barra "/"
        const path = location.pathname.split('/')[1]; // Esto obtiene el primer segmento después de "/"
        setCurrentPath("/" + path);
    }, [location]);

    return (
        <div className="">
            <h1>Gestión de Remisería</h1>
            <div className="grid grid-cols-2 sm:grid-cols-1  gap-4">
                {links.map((link, index) => (
<<<<<<< HEAD:src/components/cards/home/Card.navigate.tsx
                    <button key={index} onClick={() => navigate(link.link)} className={`${currentPath === link.link ? "border-2 border-red-600" : ""} p-2 border-sm bg-blue-500 text-white shadow-sm `}>
=======
                    <button key={index} onClick={() => navigate(link.link)} className={`${currentPath === link.link ? "border border-red-600" : ""} p-2 border-sm rounded-sm bg-buttonBlue text-white shadow-sm `}>
>>>>>>> a9a695c83f26d6344d4c0dc13d4f37651d8504fc:src/components/cards/Card.navigate.tsx
                        {link.name}
                    </button>
                ))}
            </div>
        </div>
    )
} 