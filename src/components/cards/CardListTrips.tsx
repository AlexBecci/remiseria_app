import { useEffect, useState } from "react"
import { getClientsByUserId } from "../../api/V1/clients"
import { DtoClientsGet } from "../../api/dto/clients/clients"

export function CardListTrips() {
    const [clients, setClients] = useState<DtoClientsGet[]>([])
    async function getData() {
        const data = await getClientsByUserId(1)
        console.log(data)
        setClients(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="p-4 my-[2rem] bg-white shadow-md rounded-sm">
            <div className="grid grid-cols-1 text-start mx-auto justify-center gap-4">
                <h1>Lista de viajes</h1>
            </div>
            <div>
                {clients.map((client, index) => (
                    <div key={index}>
                        <h1>{client.email}</h1>
                        <h1>{client.first_name}</h1>
                        <h1>{client.id}</h1>
                        <h1>{client.phone_number}</h1>
                        <h1>{client.created_at}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}