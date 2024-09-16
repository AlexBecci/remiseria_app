import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
/* import { toast, ToastContainer } from "react-toastify"; */

interface dto_modal {
    onClose: () => void
     onCloseOk: () => void
}
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
// Función para formatear la fecha a 'YYYY-MM-DD HH:MM:SS'
const formatDateToMySQL = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export function ModalCreateTrip({ onClose,onCloseOk }: dto_modal) {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [clients, setClients] = useState<Client[]>([])
    const [vehicles, setVehicles] = useState<Vehicle[]>([])
    const {
        register, handleSubmit,
    } = useForm<form_data>();

    async function sendData(data: form_data) {
        console.log(data); // Para depuración
        const start_time = formatDateToMySQL(new Date()); // Genera la fecha actual
        const newData = { ...data, start_time }
        // Realiza la solicitud POST con los datos convertidos
        try {
            /*   const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`, { */
            const response = await fetch(`http://localhost:3000/api/trips`, {
                method: 'POST',
                credentials: 'include' as RequestCredentials,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newData)
            });
            /* if (response.status === 409) {
                return
            } */
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Login failed:', errorData);
                /*   await toast.error(errorData.message) */
                throw new Error('Login failed');
            }

            const res = await response.json();
            console.log('response-->', res);
            onCloseOk()
            // Muestra el toast
            /*   toast.success("Categoria creada con exito!", {
                  onClose: () => {
                      console.log('cerrando')
                      onClose()
                      window.location.reload();
                  }
              }); */
        } catch (error) {
            console.error(error);
        }
    }

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
        const timeout = setTimeout(() => setShowModal(true), 10);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black text-bage bg-opacity-50 transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0'}`}>
            {/*  <ToastContainer autoClose={2000} /> */}
            {/*  {loading && (
                <LoadingAllScreen />
            )} */}
            <div>
                <div className="fixed inset-0 flex items-center justify-center  z-50">
                    <form onSubmit={handleSubmit(sendData)} className="bg-main_orange_hover text-black rounded-2xl p-4 w-[40vh]  shadow-2xl transform transition-all duration-300">
                        <div className="flex justify-end items-center">
                            <AiOutlineCloseCircle className="text-bageDark  rounded-full m-2" size={32} onClick={onClose} />

                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className="text-bage text-lg ">Crear Categoria</h1>
                        </div>
                        <div className="my-4">
                            <label className="text-bage text-sm">Cliente</label>
                            <select className="block w-full placeholder:text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-bageDark sm:text-sm sm:leading-6" {...register('client_id')}>
                                {clients.map((client) => (
                                    <option value={client.id}> {client.first_name} {client.last_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="my-4">
                            <label className="text-bage text-sm">Vehiculo</label>

                            <select className="block w-full placeholder:text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-bageDark sm:text-sm sm:leading-6" {...register('vehicle_id')}>
                                {vehicles.map((vehicle) => (
                                    <option value={vehicle.id}> {vehicle.make} {vehicle.license_plate}</option>
                                ))}
                            </select>
                        </div>
                        <div className="my-4">
                            <label className="text-bage text-sm">Distancia</label>
                            <div className="relative flex items-center">
                                <h1 className="absolute right-0 top-1.5">km</h1>
                                <input
                                    {...register('distance')}
                                    required
                                    type="number"
                                    placeholder="1"
                                    min={1}
                                    autoComplete="off"
                                    className="block w-full placeholder:text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-bageDark sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="my-4">
                            <label className="text-bage text-sm">Monto</label>

                            <div className="relative flex items-center">
                                <h1 className="absolute left-0 top-1.5">$</h1>
                                <input
                                    {...register('fare')}
                                    required
                                    autoComplete="off"
                                    className="block pl-[2dvh] w-full placeholder:text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-bageDark sm:text-sm sm:leading-6"
                                    min={1}
                                    type="number"
                                    placeholder="1"
                                />
                            </div>

                        </div>
                        <div className="m-2">
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-main_orange_hover shadow-sm  "
                            >
                                Crear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}