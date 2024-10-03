import React from "react";
import { CardContainer, CardImage } from "../styles/HorseCard.styles";
import DummyImage from "../assets/meetArchery.png";

export default function HorseCard() {
    return (
        // all images & text currently dummy data for sake of styling
        <CardContainer>
            <CardImage src={DummyImage} />

            <h3>Dummy Name</h3>

        </CardContainer>
    )
}