import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Øygarden KameraKlubb</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={"fas fa-phone-square-alt"}
              text='45288363'
              label='Telefon'
              class="cards__item__1"
            />
            <CardItem
              src={"fas fa-envelope"}
              text='øygarden.kameraklubb@gmail.com'
              label='Email'
              class="cards__item__1"
            />
            <CardItem
              src={"fas fa-users"}
              text='Vi har møter annenhver tirsdag fra 18.30-22-00'
              label='Møter'
              class="cards__item__1"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={"fas fa-question-circle"}
              text='Vi er en liten klubb, som er nystartet og holder til på Kallestad. Vi har opptak to ganger i året, april og oktober. 
              Ønsker du å bli bedre kjent med oss, ta kontakt på epost oygarden.kameraklubb@gmail.com, eller send en melding til leder på 45288363. 
              Vi hører gjerne fra deg på denne siden også. Vi har møter annenhver tirsdag fra 18.30-22-00. Vi fokuserer på speilrefleks og speilløse kamera, 
              redigering og utskrift av bilder. Vi er medlem av NSFF, som er en parplyorganisasjon for foto og kameraklubber. Bruk gjerne denne siden til å 
              ligge ut bilder fra alle verdens hjørner, om bildet er tatt med mobil eller annet kamera er ikke så viktig. Velkommen!'
              label='Generell info'
              class="cards__item__2"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;