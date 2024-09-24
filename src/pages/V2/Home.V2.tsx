import { useEffect, useState } from "react";
import { CardNavigate } from "../../components/cards/Card.navigate";
import { CardManagmentTrip } from "../../components/cards/home/CardManagmentTrip";
import { CardListTrips } from "../../components/cards/home/CardListTrips";



export function Home() {

    return (
        <div className="mx-[1rem] mt-[2rem]">
            <CardNavigate/>
            <CardManagmentTrip/>
            <CardListTrips/>
        </div>
    )
}