import React from 'react';
import './Info.css';

function Info() {
  return (
    <div className='info'>
        <h1>Kontakt Informasjon</h1>
        <div className='info__container'>
            <div className="info__wrapper">
                <ul className="info__items">
                    <li className="info__item">
                        <i class="fas fa-phone-square-alt"/>
                        <div className="info__item__text">
                            <p>45288363</p>
                        </div>
                    </li>
                    <li className="info__item">
                        <i class="fas fa-envelope"/>
                        <div className="info__item__text">
                            <p>øygarden.kameraklubb@gmail.com</p>
                        </div>
                    </li>
                    <li className="info__item">
                        <i class="fas fa-users"/>
                        <div className="info__item__text">
                            <p>Vi har møter annenhver tirsdag fra 18.30-22-00</p>
                        </div>
                        
                    </li>
                </ul>
            </div>
            <div className="info__text">
                <h1>Øygarden KameraKlubb</h1>
                <p>Vi er en liten klubb, som er nystartet og holder til på Kallestad. Vi har opptak to ganger i året, april og oktober. 
                    Ønsker du å bli bedre kjent med oss, ta kontakt på epost oygarden.kameraklubb@gmail.com, eller send en melding til leder på 45288363. 
                    Vi hører gjerne fra deg på denne siden også. Vi har møter annenhver tirsdag fra 18.30-22-00. Vi fokuserer på speilrefleks og speilløse kamera, 
                    redigering og utskrift av bilder. Vi er medlem av NSFF, som er en parplyorganisasjon for foto og kameraklubber. Bruk gjerne denne siden til å 
                    ligge ut bilder fra alle verdens hjørner, om bildet er tatt med mobil eller annet kamera er ikke så viktig. Velkommen!
                </p>
            </div>
        </div>
    </div>
  );
}

export default Info;