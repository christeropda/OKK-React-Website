import React from "react";
import { Link } from "react-router-dom"
/* <figure className="cards__item__pic-wrap" data-category={props.label}>
    <img src={props.src} alt="" className="cards__item__img"></img>
</figure> */

function CardItem(props) {
    return(
        <>
            <li className={props.class}>
                <Link className="cards__item__link" to={props.path}>
                    <div className="card__item__pic-wrap">
                        <i className={props.src}/>
                    </div>
                    <div className="cards__item__info">
                        <p className="cards__item__text">{props.text}</p>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;