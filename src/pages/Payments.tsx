import { useEffect, useState } from "react";
import { BiLandscape } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { IoIosAddCircle, IoIosCash, IoIosSearch, IoMdCash, IoMdContact } from "react-icons/io";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { ScrollContainer } from "../components/logic/ScrollLogic";

interface Payment {
    id: number;                 // Identificador único del cliente
    trip_id: number;         // Nombre del cliente
    amount: string;          // Apellido del cliente
    payment_date: string;         // Fecha y hora en que se creó el registro
    update_at: string;         // Fecha y hora en que se actualizó el registro
}

export function Payments() {
    const [data, setData] = useState<Payment[]>([])
    async function getData() {
        try {
            const result = await fetch('http://localhost:3000/api/payments', {
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
            // Función para formatear las fechas a 'YYYY-MM-DD'
            const formatDate = (dateString: string): string => {
                return new Date(dateString).toISOString().split('T')[0];
            };

            // Mapea los datos recibidos, transformando las fechas
            const formattedData = data.map((trip: any) => ({
                ...trip,
                payment_date: formatDate(trip.payment_date),
                update_at: formatDate(trip.update_at),
            }));
            setData(formattedData)
            console.log(formattedData);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="mt-[2rem]  p-[1rem] items-center grid grid-cols-2">
                {/* HERO ADD CLIENT*/}
                <h1>Pagos</h1>
                <div className="ml-auto">
                    <IoIosAddCircle size={24} className="text-main_blue hover:text-main_blue_hover" />
                </div>
                {/* INPUT */}
                <div className="col-span-2 ">
                    <div className="relative   flex justify-center items-center my-[1dvh]">
                        <input type="text" className="w-full pl-[4dvh] bg-white border border-black rounded-md shadow-md" />
                        <IoIosSearch size={20} className="absolute left-2 text-black " />
                    </div>
                </div>
                {/* LISTA DE CLIENTES */}
                <div className="col-span-2">
                    <ScrollContainer maxHeight="600px">
                        {/* MAPEO DE DATA */}
                        {data.map((data) => (
                            <div key={data.id} className="p-[1dvh] my-[0.5dvh] grid grid-cols-2  rounded-md   justify-start items-center bg-main_blue hover:bg-main_blue_hover  ">
                                <div className="flex items-center">
                                    <IoIosCash size={42} className=" text-main_orange border-2 p-1 rounded-full border-main_yellow border-opacity-50" />
                                    <div className="mr-auto ml-[2dvh] ">
                                        <div className="text-">
                                            <h1 className="text-zinc-50 ">{data.payment_date} </h1>
                                            <span className="text-main_yellow ">${data.amount}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex  items-center ml-auto ">
                                    <FiEdit size={40} className=" text-main_skyblue border-2 p-1 rounded-full border-main_yellow border-opacity-50" />
                                    <MdOutlineDeleteSweep size={40} className=" text-red-500 border-2 p-1 rounded-full border-main_yellow border-opacity-50" />
                                </div>
                            </div>
                        ))}
                    </ScrollContainer>
                </div>
            </div>
        </>
    )
}