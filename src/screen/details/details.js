import React from 'react';
import {useLocation} from "react-router-dom";
import {data} from "../../contant/data";
import Header from "../header";
import './style.css'
import Card from "../../shared/card/card";


const Details = () => {
    const params =useLocation()
    const id =Number(params.search.slice(4))
    const detailsData = data.filter(value => value.id === id);
    const handlePressCard = ()=>{
        console.log("its work");
    }
    return (
        <div>
            <Header/>
            <Card name={data[0].name}
                  unit={data[0].unite}
                  image={data[0].image}
                  price={data[0].prix}
                  action={()=>{handlePressCard()}}
            />

        </div>
    );
};

export default Details;
