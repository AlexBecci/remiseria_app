<<<<<<< HEAD
import { CardListTrips } from "../../components/cards/CardListTrips";
import { CardNavigate } from "../../components/cards/home/Card.navigate";
import { CardManagmentTrips } from "../../components/cards/home/CardManagmentTrips";
=======
import { useEffect, useState } from "react";
import { CardNavigate } from "../../components/cards/Card.navigate";
import { CardManagmentTrip } from "../../components/cards/home/CardManagmentTrip";
import { CardListTrips } from "../../components/cards/home/CardListTrips";
>>>>>>> a9a695c83f26d6344d4c0dc13d4f37651d8504fc



export function Home() {

    return (
        <div className="mx-[1rem] mt-[2rem]">
<<<<<<< HEAD
            <CardNavigate />
            <CardManagmentTrips />
            <CardListTrips />
=======
            <CardNavigate/>
            <CardManagmentTrip/>
            <CardListTrips/>
>>>>>>> a9a695c83f26d6344d4c0dc13d4f37651d8504fc
        </div>
    )
}