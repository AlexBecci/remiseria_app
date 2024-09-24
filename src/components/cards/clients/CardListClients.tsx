import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Client {
    id: number;                  // Identificador único del cliente
    userId?: number;             // Identificador del usuario (opcional)
    firstName: string;           // Nombre del cliente
    lastName: string;            // Apellido del cliente
    email?: string;              // Correo electrónico (opcional)
    phoneNumber: string;         // Número de teléfono
    createdAt: Date;             // Fecha de creación del registro
    updatedAt: Date;             // Fecha de última actualización del registro
}
export function CardListClients() {
    const clients: Client[] = [
        {
            id: 1,
            userId: 101,
            firstName: "Juan",
            lastName: "Pérez",
            email: "juan.perez@example.com",
            phoneNumber: "+123456789",
            createdAt: new Date('2024-01-10T08:00:00Z'),
            updatedAt: new Date('2024-01-10T08:00:00Z'),
        },
        {
            id: 2,
            userId: 102,
            firstName: "María",
            lastName: "González",
            email: "maria.gonzalez@example.com",
            phoneNumber: "+987654321",
            createdAt: new Date('2024-02-15T09:00:00Z'),
            updatedAt: new Date('2024-02-15T09:00:00Z'),
        },
        {
            id: 3,
            userId: 103,
            firstName: "Carlos",
            lastName: "Sánchez",
            email: "carlos.sanchez@example.com",
            phoneNumber: "+1122334455",
            createdAt: new Date('2024-03-20T10:00:00Z'),
            updatedAt: new Date('2024-03-20T10:00:00Z'),
        },
        {
            id: 4,
            userId: 104,
            firstName: "Lucía",
            lastName: "Martínez",
            email: "lucia.martinez@example.com",
            phoneNumber: "+2233445566",
            createdAt: new Date('2024-04-05T11:00:00Z'),
            updatedAt: new Date('2024-04-05T11:00:00Z'),
        },
        {
            id: 5,
            userId: 105,
            firstName: "Pedro",
            lastName: "López",
            email: "pedro.lopez@example.com",
            phoneNumber: "+3344556677",
            createdAt: new Date('2024-05-10T12:00:00Z'),
            updatedAt: new Date('2024-05-10T12:00:00Z'),
        },
    ];
    return (
        <div className="p-4 my-[2rem] shadow-lg rounded-sm">
            <div className="grid grid-cols-1 text-start mx-auto justify-center gap-4">
                <h1>Lista de Clientes</h1>
                {clients.map((client) => (
                    <div key={client.id} className="bg-white text-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-textBlue text-white py-3 px-4">
                            <h2 className="text-xl font-semibold">{client.firstName} {client.lastName}</h2>
                        </div>
                        <div className="p-4">
                            <div className="mb-3 flex items-center">
                                <FaUser className="h-5 w-5 text-gray-500 mr-2" />
                                <span className="text-gray-700">ID Cliente: {client.id}</span>
                            </div>
                            <div className="mb-3 flex items-center">
                                <FaEnvelope className="h-5 w-5 text-blue-500 mr-2" />
                                <span className="text-gray-700">Email: {client.email}</span>
                            </div>
                            <div className="mb-3 flex items-center">
                                <FaPhone className="h-5 w-5 text-green-500 mr-2" />
                                <span className="text-gray-700">Teléfono: {client.phoneNumber}</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">
                                Creado: {format(new Date(client.createdAt), 'dd/MM/yyyy HH:mm', { locale: es })}
                            </div>
                            <div className="text-xs text-gray-500">
                                Actualizado: {format(new Date(client.updatedAt), 'dd/MM/yyyy HH:mm', { locale: es })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}