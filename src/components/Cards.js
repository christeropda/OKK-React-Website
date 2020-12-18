import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
    return(
        <div className="cards">
            <h1>Check this thingy out</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards_items">
                    <CardItem
                        src='images/bent1.jpg'
                        text="Øygarden Kamera Klubb's samlede foto album"
                        label='Album'
                        path='/Album'
                    />
                    <CardItem
                        src='images/img-2.jpg'
                        text="Bli med på facebook, opptak to ganger i året"
                        label='Informasjon'
                        path='/Informasjon'
                    />
                    </ul>
                    <ul>
                    <CardItem
                        src='images/img-2.jpg'
                        text="Bli med på facebook, opptak to ganger i året"
                        label='Informasjon'
                        path='/Informasjon'
                    />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;