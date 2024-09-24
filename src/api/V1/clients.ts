import { baseUrl } from "../../logic/baseUrl"

export async function getClientsByUserId(user_id: number) {
    try {
        const res = await fetch(`${baseUrl}/api/clients/${user_id}`, { credentials: 'include' as RequestCredentials })
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}