import React from "react";
import { Button } from "./Button";
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
    return(
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Øygarden Kameraklubb</h1>
            <p>For de foto interesserte</p>
            <div className='hero-btns'>
                <Link to='/informasjon'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        Informasjon <i class="fas fa-info-circle"></i>
                    </Button>
                </Link>
                {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Album <i class="far fa-image"></i>
                </Button> */}

            </div>
        </div>
    );
}

export default HeroSection;