import { useEffect, useState } from "react";
import { CardNavigate } from "../../components/cards/Card.navigate";
import { CardManagmentTrip } from "../../components/cards/CardManagmentTrip";



export function Home() {

    return (
        <div className="mx-[1rem] mt-[2rem]">
            <CardNavigate />
            <CardManagmentTrip />
        </div>
    )
}