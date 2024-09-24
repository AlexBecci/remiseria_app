import { CardListTrips } from "../../components/cards/CardListTrips";
import { CardNavigate } from "../../components/cards/home/Card.navigate";
import { CardManagmentTrips } from "../../components/cards/home/CardManagmentTrips";



export function Home() {

    return (
        <div className="mx-[1rem] mt-[2rem]">
            <CardNavigate />
            <CardManagmentTrips />
            <CardListTrips />
        </div>
    )
}