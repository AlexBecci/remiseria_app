import { FaClock, FaUser, FaTruck, FaMapPin, FaDollarSign } from 'react-icons/fa';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { FaCar } from 'react-icons/fa6';

interface Vehicle {
    id: number;                  // Identificador único del vehículo
    statusVehicle: string;       // Estado del vehículo (ej. "activo", "inactivo")
    licensePlate: string;        // Matrícula del vehículo
    userId: number;              // Identificador del usuario
    model: string;               // Modelo del vehículo
    make: string;                // Marca del vehículo
    year: number;                // Año del vehículo
    driverId: number;            // Identificador del conductor
    createdAt: Date;             // Fecha de creación del registro
    updatedAt: Date;             // Fecha de última actualización del registro
}

export function CardListVehicles() {
    const vehicles: Vehicle[] = [
        {
            id: 1,
            statusVehicle: "activo",
            licensePlate: "ABC123",
            userId: 101,
            model: "Model X",
            make: "Brand A",
            year: 2020,
            driverId: 201,
            createdAt: new Date('2024-01-10T08:00:00Z'),
            updatedAt: new Date('2024-01-10T08:00:00Z'),
        },
        {
            id: 2,
            statusVehicle: "activo",
            licensePlate: "XYZ789",
            userId: 102,
            model: "Model Y",
            make: "Brand B",
            year: 2021,
            driverId: 202,
            createdAt: new Date('2024-02-15T09:00:00Z'),
            updatedAt: new Date('2024-02-15T09:00:00Z'),
        },
        {
            id: 3,
            statusVehicle: "inactivo",
            licensePlate: "LMN456",
            userId: 103,
            model: "Model Z",
            make: "Brand C",
            year: 2019,
            driverId: 203,
            createdAt: new Date('2024-03-20T10:00:00Z'),
            updatedAt: new Date('2024-03-20T10:00:00Z'),
        },
        {
            id: 4,
            statusVehicle: "activo",
            licensePlate: "JKL321",
            userId: 104,
            model: "Model A",
            make: "Brand D",
            year: 2022,
            driverId: 204,
            createdAt: new Date('2024-04-05T11:00:00Z'),
            updatedAt: new Date('2024-04-05T11:00:00Z'),
        },
        {
            id: 5,
            statusVehicle: "inactivo",
            licensePlate: "OPQ987",
            userId: 105,
            model: "Model B",
            make: "Brand E",
            year: 2020,
            driverId: 205,
            createdAt: new Date('2024-05-10T12:00:00Z'),
            updatedAt: new Date('2024-05-10T12:00:00Z'),
        },
        {
            id: 6,
            statusVehicle: "activo",
            licensePlate: "RST654",
            userId: 106,
            model: "Model C",
            make: "Brand F",
            year: 2023,
            driverId: 206,
            createdAt: new Date('2024-06-15T13:00:00Z'),
            updatedAt: new Date('2024-06-15T13:00:00Z'),
        },
    ];

    return (
        <div className="p-4 my-[2rem] shadow-lg rounded-sm">
            <div className="grid grid-cols-1 text-start mx-auto justify-center gap-4">
                <h1>Lista de Vehículos</h1>
                {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="bg-white text-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-textBlue text-white py-3 px-4">
                            <h2 className="text-xl font-semibold">Vehículo #{vehicle.id}</h2>
                        </div>
                        <div className="p-4">
                            <div className="mb-3 flex items-center">
                                <FaCar className="h-5 w-5 text-gray-500 mr-2" />
                                <span className="text-gray-700">Matrícula: {vehicle.licensePlate}</span>
                            </div>
                            <div className="mb-3 flex items-center">
                                <FaUser className="h-5 w-5 text-blue-500 mr-2" />
                                <span className="text-gray-700">Usuario ID: {vehicle.userId}</span>
                            </div>
                            <div className="mb-3 flex items-center">
                                <FaUser className="h-5 w-5 text-yellow-500 mr-2" />
                                <span className="text-gray-700">Conductor ID: {vehicle.driverId}</span>
                            </div>
                            <div className="mb-3 flex items-center">
                                <span className="text-gray-700">Marca: {vehicle.make}</span>
                            </div>
                            <div className="mb-3 flex items-center">
                                <span className="text-gray-700">Modelo: {vehicle.model}</span>
                            </div>
                            <div className="mb-3 flex items-center">
                                <span className="text-gray-700">Año: {vehicle.year}</span>
                            </div>
                            <div className="mb-3 flex items-center">
                                <span className="text-gray-700">Estado: {vehicle.statusVehicle}</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">
                                Creado: {format(new Date(vehicle.createdAt), 'dd/MM/yyyy HH:mm', { locale: es })}
                            </div>
                            <div className="text-xs text-gray-500">
                                Actualizado: {format(new Date(vehicle.updatedAt), 'dd/MM/yyyy HH:mm', { locale: es })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}