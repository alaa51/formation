import React from 'react';
import './style.css'

const Card = ({image,name, price, unit, action}) => {
    return (
        <div >
            <div className={'cardContainer'} onClick={action}>
                <img className={'sharedImage'} src={image}/>
                <h1 className={'name'}>{name}</h1>
                <p className={image}>{price} {unit}</p>
            </div>
        </div>
    );
};

export default Card;
