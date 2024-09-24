import { CardNavigate } from "../../components/cards/Card.navigate";
import { CardListClients } from "../../components/cards/clients/CardListClients";
import { CardManagmentClient } from "../../components/cards/clients/CardManagmentClient";

export function Clients() {
    return (
        <div className="mx-[1rem] mt-[2rem]">
            <CardNavigate />
            <CardManagmentClient />
            <CardListClients />
        </div>
    )
}