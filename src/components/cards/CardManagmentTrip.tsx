import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";

interface form_data {
    client_id: number
    vehicle_id: number
    start_time: string
    distance: number
    fare: number
}
export function CardManagmentTrip() {
    interface Client {
        id: number;                 // Identificador único del cliente
        first_name: string;         // Nombre del cliente
        last_name: string;          // Apellido del cliente
        phone_number: string;       // Número de teléfono del cliente
        email: string;              // Correo electrónico del cliente
        created_at: string;         // Fecha y hora en que se creó el registro
        updated_at: string;         // Fecha y hora en que se actualizó el registro
    }

    interface Vehicle {
        id: number;
        license_plate: string;
        model: string;
        make: string;
        year: number;
        driver_id: number;
        created_at: string; // Puedes cambiar a Date si prefieres manejarlo como objeto Date
        updated_at: string; // Lo mismo aquí
    }

    interface form_data {
        client_id: number
        vehicle_id: number
        start_time: string
        distance: number
        fare: number
    }
    const [vehicles, setVehicles] = useState<Vehicle[]>([])
    const [clients, setClients] = useState<Client[]>([])
    const {
        register, handleSubmit,
    } = useForm<form_data>();
    async function getClients() {
        try {
            const result = await fetch('http://localhost:3000/api/clients', {
                method: 'GET',  // Especifica el método HTTP
                headers: {
                    'Content-Type': 'application/json',  // Asegúrate de que el servidor espera este tipo de contenido
                },
                credentials: 'include',  // Permite el envío de cookies o credenciales
            });
            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }
            const data = await result.json();
            setClients(data)
            console.log(data);
        } catch (error) {
            console.error(error)
        }
    }

    async function getVehicles() {
        try {
            const result = await fetch('http://localhost:3000/api/vehicles', {
                method: 'GET',  // Especifica el método HTTP
                headers: {
                    'Content-Type': 'application/json',  // Asegúrate de que el servidor espera este tipo de contenido
                },
                credentials: 'include',  // Permite el envío de cookies o credenciales
            });
            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }
            const data = await result.json();
            setVehicles(data)
            console.log(data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getClients()
        getVehicles()
    }, []);
    return (
        <div className="p-4 my-[2rem] bg-slate-500 shadow-lg rounded-sm">
            <div className="grid grid-cols-1 text-start mx-auto justify-center gap-4">
                <h1>Gestión de Viajes</h1>
                <div className="flex flex-col justify-center">
                    <label className="mr-auto">Vehiculo</label>
                    <input type="text" className="block w-full pl-1 pr-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bageDark sm:text-sm" placeholder="Jose C Paz" />
                </div>
                <div className="">
                    <label className="text-bage text-sm">Cliente</label>
                    <select required className="block w-full placeholder:text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-bageDark sm:text-sm sm:leading-6" {...register('client_id')}>
                        <option value="" disabled selected>Elegir una opcion</option>
                        {clients.map((client) => (
                            <option value={client.id}> {client.first_name} {client.last_name}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label className="text-bage text-sm">Vehiculo</label>

                    <select required className="block w-full placeholder:text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-bageDark sm:text-sm sm:leading-6" {...register('vehicle_id')}>
                        <option value="" disabled selected>Elegir una opcion</option>
                        {vehicles.map((vehicle) => (
                            <option value={vehicle.id}> {vehicle.make} {vehicle.license_plate}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label className=" text-bage text-sm font-medium mb-1 ">Monto</label>
                    <div className="relative flex items-center">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                        <input
                            {...register('fare')}
                            required
                            autoComplete="off"
                            className="block w-full pl-8 pr-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bageDark sm:text-sm"
                            min={1}
                            type="number"
                            placeholder="0"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}