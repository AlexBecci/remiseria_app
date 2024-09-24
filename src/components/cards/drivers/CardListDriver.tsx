import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Driver {
    id: number;                  // Identificador único del conductor
    userId: number;              // Identificador del usuario
    firstName: string;           // Nombre del conductor
    lastName: string;            // Apellido del conductor
    licenseNumber: string;       // Número de licencia
    phoneNumber: string;         // Número de teléfono
    email?: string;              // Correo electrónico (opcional)
    createdAt: Date;             // Fecha de creación del registro
    updatedAt: Date;             // Fecha de última actualización del registro
}

export function CardListDrivers() {
    const drivers: Driver[] = [
        {
            id: 1,
            userId: 201,
            firstName: "Alejandro",
            lastName: "García",
            licenseNumber: "LIC123456",
            phoneNumber: "+123456789",
            email: "alejandro.garcia@example.com",
            createdAt: new Date('2024-01-10T08:00:00Z'),
            updatedAt: new Date('2024-01-10T08:00:00Z'),
        },
        {
            id: 2,
            userId: 202,
            firstName: "Beatriz",
            lastName: "Fernández",
            licenseNumber: "LIC654321",
            phoneNumber: "+987654321",
            email: "beatriz.fernandez@example.com",
            createdAt: new Date('2024-02-15T09:00:00Z'),
            updatedAt: new Date('2024-02-15T09:00:00Z'),
        },
        {
            id: 3,
            userId: 203,
            firstName: "Carlos",
            lastName: "López",
            licenseNumber: "LIC111222",
            phoneNumber: "+1122334455",
            email: "carlos.lopez@example.com",
            createdAt: new Date('2024-03-20T10:00:00Z'),
            updatedAt: new Date('2024-03-20T10:00:00Z'),
        },
        {
            id: 4,
            userId: 204,
            firstName: "Diana",
            lastName: "Martínez",
            licenseNumber: "LIC333444",
            phoneNumber: "+2233445566",
            email: "diana.martinez@example.com",
            createdAt: new Date('2024-04-05T11:00:00Z'),
            updatedAt: new Date('2024-04-05T11:00:00Z'),
        },
        {
            id: 5,
            userId: 205,
            firstName: "Eduardo",
            lastName: "González",
            licenseNumber: "LIC555666",
            phoneNumber: "+3344556677",
            email: "eduardo.gonzalez@example.com",
            createdAt: new Date('2024-05-10T12:00:00Z'),
            updatedAt: new Date('2024-05-10T12:00:00Z'),
        },
    ];

    return (
        <div className="p-4 my-[2rem] shadow-lg rounded-sm">
            <div className="grid grid-cols-1 text-start mx-auto justify-center gap-4">
                <h1>Lista de Conductores</h1>
                {drivers.map((driver) => (
                    <div key={driver.id} className="bg-white text-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-textBlue text-white py-3 px-4">
                            <h2 className="text-xl font-semibold">{driver.firstName} {driver.lastName}</h2>
                        </div>
                        <div className="p-4">
                            <div className="mb-3 flex items-center">
                                <FaUser className="h-5 w-5 text-gray-500 mr-2" />
                                <span className="text-gray-700">ID Conductor: {driver.id}</span>
                            </div>
                            <div className="mb-3 flex items-center">
                                <FaEnvelope className="h-5 w-5 text-blue-500 mr-2" />
                                <span className="text-gray-700">Email: {driver.email}</span>
                            </div>
                            <div className="mb-3 flex items-center">
                                <FaPhone className="h-5 w-5 text-green-500 mr-2" />
                                <span className="text-gray-700">Teléfono: {driver.phoneNumber}</span>
                            </div>
                            <div className="mb-3 flex items-center">
                                <span className="text-gray-700">Licencia: {driver.licenseNumber}</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">
                                Creado: {format(new Date(driver.createdAt), 'dd/MM/yyyy HH:mm', { locale: es })}
                            </div>
                            <div className="text-xs text-gray-500">
                                Actualizado: {format(new Date(driver.updatedAt), 'dd/MM/yyyy HH:mm', { locale: es })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}