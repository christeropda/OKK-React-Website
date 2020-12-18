import React from "react";
import { Button } from "./Button";
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return(
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted></video>
            <h1>Øygarden Kamera Klubb</h1>
            <p>For de litt spesielt intereserte</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Informasjon <i class="fas fa-info-circle"></i>
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Album <i class="far fa-image"></i>
                </Button>

            </div>
        </div>
    )
}

export default HeroSection