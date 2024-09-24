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
        console.log(path)
        setCurrentPath("/" + path);
    }, [location]);

    return (
        <div className="">
            <h1>Gestión de Remisería</h1>
            <div className="grid grid-cols-2 sm:grid-cols-1  gap-4">
                {links.map((link, index) => (
                    <button key={index} onClick={() => navigate(link.link)} className={`${currentPath === link.link ? "border-2 border-red-600" : ""} p-2 border-sm bg-blue-500 text-white shadow-sm `}>
                        {link.name}
                    </button>
                ))}
            </div>
        </div>
    )
} 