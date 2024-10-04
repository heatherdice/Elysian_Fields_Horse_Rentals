import React from "react";
import { CardContainer, CardImage, HorseInfo, HorseName, HorseStats, HorseBlurb } from "../styles/HorseCard.styles";
import DummyImage from "../assets/meetArchery.png";

export default function HorseCard() {
    return (
        // all images & text currently dummy data for sake of styling
        <CardContainer>
            <CardImage src={DummyImage} />

            <HorseInfo>
                <HorseName>Dummy Name</HorseName>

                <HorseStats>
                    <li>Height: 15.2 hh</li>
                    <li>Sex: Mare</li>
                    <li>Gaits: Smooth</li>
                </HorseStats>

                <HorseBlurb>
                    This is a sample paragraph. It will eventually contain information about the horse. It may talk about the horse's temperment, achievements, and/or personality.
                </HorseBlurb>
            </HorseInfo>
        </CardContainer>
    )
}