import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoIosAddCircle, IoIosSearch, IoMdContact } from "react-icons/io";
import { MdDeleteSweep, MdOutlineCarRental, MdOutlineDeleteSweep } from "react-icons/md";
import { ScrollContainer } from "../components/logic/ScrollLogic";

interface Driver {
    id: number;                 // Identificador único del cliente
    first_name: string;         // Nombre del cliente
    last_name: string;          // Apellido del cliente
    license_number: number;       // Número de licencia
    phone_number: number;         // Número de teléfono del cliente
    email: string;              // Correo electrónico del cliente
    created_at: string;         // Fecha y hora en que se creó el registro
    updated_at: string;         // Fecha y hora en que se actualizó el registro
}

export function Drivers() {
    const [data, setData] = useState<Driver[]>([])
    async function getData() {
        try {
            const result = await fetch('http://localhost:3000/api/drivers', {
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
            setData(data)
            console.log(data);
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
                <h1>Conductores</h1>
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
                    {/* MAPEO DE DATA */}
                    <ScrollContainer maxHeight="600px">
                        {data.map((data) => (
                            <div key={data.id} className="p-[1dvh] my-[0.5dvh] grid grid-cols-2  rounded-md   justify-start items-center bg-main_blue hover:bg-main_blue_hover  ">
                                <div className="flex items-center">
                                    <MdOutlineCarRental size={42} className=" text-main_orange border-2 p-1 rounded-full border-main_yellow border-opacity-50" />
                                    <div className="mr-auto ml-[2dvh] ">
                                        <div>
                                            <h1 className="text-zinc-50 text-sm">{data.first_name} {data.last_name}</h1>
                                            <h1 className="text-zinc-300 text-sm">{data.phone_number}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex  items-center ml-auto gap-2 ">
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