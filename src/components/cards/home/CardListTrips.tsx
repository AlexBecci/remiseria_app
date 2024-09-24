import { FaClock, FaUser, FaTruck, FaMapPin, FaDollarSign } from 'react-icons/fa';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { FaCar } from 'react-icons/fa6';

interface Trip {
    id: number;                  // Identificador único del viaje
    clientId: number;           // Identificador del cliente
    vehicleId: number;          // Identificador del vehículo
    driverId: number;           // Identificador del conductor
    userId: number;             // Identificador del usuario
    startTime: Date;            // Fecha y hora de inicio del viaje
    endTime?: Date | null;             // Fecha y hora de finalización del viaje (opcional)
    distance?: number | null;          // Distancia recorrida (opcional)
    fare?: number | null;              // Costo del viaje (opcional)
    createdAt: Date;            // Fecha de creación del registro
    updatedAt: Date;            // Fecha de última actualización del registro
}

export function CardListTrips() {
    const trips: Trip[] = [
        {
            id: 1,
            clientId: 101,
            vehicleId: 201,
            driverId: 301,
            userId: 401,
            startTime: new Date('2024-09-20T08:00:00Z'),
            endTime: new Date('2024-09-20T09:00:00Z'),
            distance: 15.5,
            fare: 25.75,
            createdAt: new Date('2024-09-19T12:00:00Z'),
            updatedAt: new Date('2024-09-20T10:00:00Z'),
        },
        {
            id: 2,
            clientId: 102,
            vehicleId: 202,
            driverId: 302,
            userId: 402,
            startTime: new Date('2024-09-21T10:30:00Z'),
            endTime: new Date('2024-09-21T11:15:00Z'),
            distance: 10.2,
            fare: 18.50,
            createdAt: new Date('2024-09-20T14:00:00Z'),
            updatedAt: new Date('2024-09-21T12:00:00Z'),
        },
        {
            id: 3,
            clientId: 103,
            vehicleId: 203,
            driverId: 303,
            userId: 403,
            startTime: new Date('2024-09-22T07:45:00Z'),
            endTime: null, // El viaje aún no ha terminado
            distance: null, // Distancia aún no calculada
            fare: null, // Costo aún no calculado
            createdAt: new Date('2024-09-21T08:00:00Z'),
            updatedAt: new Date('2024-09-21T08:00:00Z'),
        },
        {
            id: 4,
            clientId: 104,
            vehicleId: 204,
            driverId: 304,
            userId: 404,
            startTime: new Date('2024-09-23T15:00:00Z'),
            endTime: new Date('2024-09-23T15:45:00Z'),
            distance: 20.0,
            fare: 30.00,
            createdAt: new Date('2024-09-22T09:00:00Z'),
            updatedAt: new Date('2024-09-23T16:00:00Z'),
        },
        {
            id: 5,
            clientId: 105,
            vehicleId: 205,
            driverId: 305,
            userId: 405,
            startTime: new Date('2024-09-24T09:30:00Z'),
            endTime: new Date('2024-09-24T10:15:00Z'),
            distance: 5.5,
            fare: 12.25,
            createdAt: new Date('2024-09-23T08:30:00Z'),
            updatedAt: new Date('2024-09-24T11:00:00Z'),
        },
        {
            id: 6,
            clientId: 106,
            vehicleId: 206,
            driverId: 306,
            userId: 406,
            startTime: new Date('2024-09-25T11:00:00Z'),
            endTime: null, // El viaje aún no ha terminado
            distance: null, // Distancia aún no calculada
            fare: null, // Costo aún no calculado
            createdAt: new Date('2024-09-24T10:00:00Z'),
            updatedAt: new Date('2024-09-24T10:00:00Z'),
        },
    ]

    return (
        <div className="p-4 my-[2rem] shadow-lg rounded-sm">
            <div className="grid grid-cols-1 text-start mx-auto justify-center gap-4">
                <h1>Lista de viajes</h1>
                {trips.map((trip) => (
                    <div key={trip.id} className="bg-white text-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-textBlue text-white py-3 px-4">
                            <h2 className="text-xl font-semibold">Viaje #{trip.id}</h2>
                        </div>
                        <div className="p-4">
                            <div className="mb-3 flex items-center">
                                <FaClock className="h-5 w-5 text-gray-500 mr-2" />
                                <span className="text-gray-700">
                                    Inicio: {format(new Date(trip.startTime), 'dd/MM/yyyy HH:mm', { locale: es })}
                                </span>
                            </div>
                            {trip.endTime && (
                                <div className="mb-3 flex items-center">
                                    <FaClock className="h-5 w-5 text-gray-500 mr-2" />
                                    <span className="text-gray-700">
                                        Fin: {format(new Date(trip.endTime), 'dd/MM/yyyy HH:mm', { locale: es })}
                                    </span>
                                </div>
                            )}
                            <div className="mb-3 flex items-center">
                                <FaUser className="h-5 w-5 text-blue-500 mr-2" />
                                <span className="text-gray-700">Cliente ID: {trip.clientId}</span>
                            </div>
                            <div className="mb-3 flex items-center">
                                <FaCar className="h-5 w-5 text-green-500 mr-2" />
                                <span className="text-gray-700">Vehículo ID: {trip.vehicleId}</span>
                            </div>
                            <div className="mb-3 flex items-center">
                                <FaUser className="h-5 w-5 text-yellow-500 mr-2" />
                                <span className="text-gray-700">Conductor ID: {trip.driverId}</span>
                            </div>
                            {trip.distance !== null && trip.distance !== undefined && (
                                <div className="mb-3 flex items-center">
                                    <FaMapPin className="h-5 w-5 text-red-500 mr-2" />
                                    <span className="text-gray-700">Distancia: {trip.distance} km</span>
                                </div>
                            )}
                            {trip.fare !== null && trip.fare !== undefined && (
                                <div className="mb-3 flex items-center">
                                    <FaDollarSign className="h-5 w-5 text-green-600 mr-2" />
                                    <span className="text-gray-700">Tarifa: ${trip.fare.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="text-xs text-gray-500 mt-2">
                                Creado: {format(new Date(trip.createdAt), 'dd/MM/yyyy HH:mm', { locale: es })}
                            </div>
                            <div className="text-xs text-gray-500">
                                Actualizado: {format(new Date(trip.updatedAt), 'dd/MM/yyyy HH:mm', { locale: es })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}