import { CardNavigate } from "../../components/cards/Card.navigate";
import { CardListVehicles } from "../../components/cards/vehicles/CardListVehicles";
import { CardManagmentVehicle } from "../../components/cards/vehicles/CardManagmentVehicle";

export function Vehicles() {
    return (
        <div className="mx-[1rem] mt-[2rem]">
            <CardNavigate />
            <CardManagmentVehicle />
            <CardListVehicles />
        </div>
    )
}