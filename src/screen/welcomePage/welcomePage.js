import React from 'react';
import Header from "../header";
import './style.css'
import {data} from "../../contant/data";
import {useNavigate,createSearchParams} from "react-router-dom";
import Card from "../../shared/card/card";

const WelcomePage = () => {
    const navigation = useNavigate();
    const navigateToDetails =(id)=>{
        navigation({
            pathname: '/Details',
            search: `?id=${id}`,
        });
    }
    return (
        <div className={'welcomePageContainer'}>
            <div className={'cardContainerNotShared'}>
                <Header/>
                <h1>Welcome page work</h1>
                <div className={'GlobalItemsContainer'}>
                    {
                        data.map((item)=>{
                            return (
                                <div className={'itemContainer'}>
                                    <Card
                                        name={item.name}
                                        image={item.image}
                                        price={item.prix}
                                        unit={item.unite}
                                        action={()=>{navigateToDetails(item.id)}} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default WelcomePage;
