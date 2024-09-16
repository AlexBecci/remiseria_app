import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoIosAddCircle, IoIosCar, IoIosCheckboxOutline, IoIosSearch, IoMdContact } from "react-icons/io";
import { MdOutlineCarRental, MdOutlineDeleteSweep } from "react-icons/md";
import { ScrollContainer } from "../components/logic/ScrollLogic";
import { ModalLogic } from "../components/logic/Modal";
import { ModalCreateTrip } from "../components/modals/ModalCreateTrip";

interface Trip {
    id: number;
    client_id: number;
    vehicle_id: number;
    start_time: string; // O puedes usar Date si prefieres
    end_time: string;   // Lo mismo aquí
    distance: string;   // Podrías usar number si prefieres manejarlo como número
    fare: string;       // Lo mismo para el fare
    created_at: string; // O Date si lo manejas como objeto Date
    updated_at: string; // Igual que con created_at
}

export function Home() {
    const [data, setData] = useState<Trip[]>([])
    const [modal, setModal] = useState<boolean>(false)
    async function getData() {
        try {
            const result = await fetch('http://localhost:3000/api/trips', {
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

            // Función para formatear fecha y hora en 'YYYY-MM-DD HH:MM:SS'
            const formatDateTime = (dateTimeString: string | null): string | null => {
                if (!dateTimeString) return null;  // Maneja el caso donde dateTimeString es null
                return dateTimeString.replace('T', ' ').slice(0, 19);
            };

            // Mapea los datos recibidos, transformando las fechas
            const formattedData = data.map((trip: any) => ({
                ...trip,
                start_time: formatDateTime(trip.start_time),
                end_time: formatDateTime(trip.end_time),
                created_at: formatDateTime(trip.created_at),
                updated_at: formatDateTime(trip.updated_at),
            }));

            setData(formattedData);
            console.log(formattedData);
        } catch (error) {
            console.error(error)
        }
    }
    function openModal() {
        setModal(true)
    }
    function closeModal() {
        setModal(false)
    }
    function closeModalOk() {
        setModal(false)
        getData()
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="mt-[2rem]  p-[1rem] items-center grid grid-cols-2">
                {/* HERO ADD CLIENT*/}
                <div className="mb-[4dvh] col-span-2 grid grid-cols-2 gap-4 items-center">
                    <h1 className="mr-auto">Cargar Viaje</h1>
                    <div className="ml-auto mr-0">
                        <IoIosAddCircle onClick={openModal} size={24} className="text-main_blue hover:text-main_blue_hover" />
                    </div>
                </div>
                {/* INPUT */}
                {/*  <div className="col-span-2 ">
                    <div className="relative   flex justify-center items-center my-[1dvh]">
                        <input type="text" className="w-full pl-[4dvh] bg-white border border-black rounded-md shadow-md" />
                        <IoIosSearch size={20} className="absolute left-2 text-black " />
                    </div>
                </div> */}
                {/* LISTA DE CLIENTES */}
                <div className="col-span-2">
                    {/* MAPEO DE DATA */}
                    <h1>Viajes en curso</h1>
                    <ScrollContainer maxHeight="500px">
                        {data.map((data) => (
                            data.end_time === null && (
                                <div key={data.id} className="p-[1dvh] my-[0.5dvh] grid grid-cols-2  rounded-md   justify-start items-center bg-main_blue hover:bg-main_blue_hover  ">
                                    <div className="flex items-center">
                                        <IoIosCar size={42} className=" text-main_orange border-2 p-1 rounded-full border-main_yellow border-opacity-50" />
                                        <div className="mr-auto ml-[2dvh] ">
                                            <div>
                                                <h1 className="text-zinc-50 text-sm"> {data.distance} ${data.fare}</h1>
                                                <h1 className="text-zinc-300 text-sm"> {data.start_time}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex  items-center ml-auto ">
                                        <IoMdContact size={40} className=" text-main_skyblue border-2 p-1 rounded-full border-main_yellow border-opacity-50" />
                                        <IoIosCheckboxOutline size={40} className=" text-green-500 border-2 p-1 rounded-full border-main_yellow border-opacity-50" />
                                        <MdOutlineDeleteSweep size={40} className=" text-red-500 border-2 p-1 rounded-full border-main_yellow border-opacity-50" />
                                    </div>
                                </div>
                            )
                        ))}
                    </ScrollContainer>
                </div>

                <div className="col-span-2 my-[2dvh]">
                    {/* MAPEO DE DATA */}
                    <h1>Viajes Finalizados</h1>
                    <ScrollContainer maxHeight="500px">
                        {data.map((data) => (
                            data.end_time !== null && (

                                <div key={data.id} className="p-[1dvh] my-[0.5dvh] grid grid-cols-2  rounded-md   justify-start items-center bg-main_blue hover:bg-main_blue_hover  ">
                                    <div className="flex items-center">
                                        <div className="mr-auto ml-[2dvh] ">
                                            <div>
                                                <h1 className="text-zinc-50 text-xs"> {data.distance} ${data.fare}</h1>
                                                <h1 className="text-zinc-300 text-xs"> {data.start_time} {data.end_time}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex  items-center ml-auto ">
                                        <IoMdContact size={40} className=" text-main_skyblue border-2 p-1 rounded-full border-main_yellow border-opacity-50" />
                                        <MdOutlineDeleteSweep size={40} className=" text-red-500 border-2 p-1 rounded-full border-main_yellow border-opacity-50" />
                                    </div>
                                </div>
                            )

                        ))}
                    </ScrollContainer>
                </div>
            </div>
            {modal && (
                <ModalLogic isOpen={true} onClose={closeModal}>
                    <ModalCreateTrip onClose={closeModal} onCloseOk={closeModalOk} />
                </ModalLogic>
            )}
        </>
    )
}