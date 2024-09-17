import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
/* import { toast, ToastContainer } from "react-toastify"; */

interface dto_modal {
    onClose: () => void
    onCloseOk: () => void
    id: number
}


export function ModalDeleteTrip({ onClose, onCloseOk, id }: dto_modal) {
    const [showModal, setShowModal] = useState<boolean>(false)

    async function sendData() {
        console.log(id)

        // Realiza la solicitud POST con los datos convertidos
        try {
            //const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`, {
            const response = await fetch(`http://localhost:3000/api/trips/${id}`, {
                method: "DELETE",
                credentials: 'include' as RequestCredentials,
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('failed:', errorData);
                // await toast.error(errorData.message)
                throw new Error('failed');
            }

            
            console.log('response-->', response);
            onCloseOk()

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => setShowModal(true), 10);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black text-bage bg-opacity-50 transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0'}`}>
            <div>
                <div className="fixed inset-0 flex items-center justify-center  z-50">
                    <div className="bg-zinc-100 text-black rounded-2xl p-4 w-[40vh]  shadow-2xl transform transition-all duration-300">
                        <div className="flex justify-end items-center">
                            <AiOutlineCloseCircle className="text-bageDark  rounded-full m-2" size={32} onClick={onClose} />
                        </div>
                        <div className="flex flex-col justify-center my-[1dvh] items-center">
                            <h1 className="text-bage text-lg my-[1dvh] ">Cancelar viaje</h1>
                            <p className="text-gray-700 my-[1dvh] text-sm">¿Estás seguro de que deseas cancelar el viaje? Esta acción no se puede deshacer.</p>
                        </div>
                        <div className="m-2 grid grid-cols-2 gap-4">
                            <button onClick={onClose}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-main_orange_hover px-3 py-1.5 text-sm  leading-6 text-white shadow-sm  "
                            >
                                no, volver
                            </button>
                            <button onClick={sendData}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-main_blue px-3 py-1.5 text-sm  leading-6 text-white shadow-sm  "
                            >
                                Si, cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}