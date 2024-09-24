import { CardNavigate } from "../../components/cards/Card.navigate";
import { CardListDrivers } from "../../components/cards/drivers/CardListDriver";
import { CardManagmentDriver } from "../../components/cards/drivers/CardManagmentDriver";

export function Drivers() {
    return (
        <div className="mx-[1rem] mt-[2rem]">
            <CardNavigate />
            <CardManagmentDriver />
            <CardListDrivers />
        </div>
    )
}