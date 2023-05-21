import React, {useState} from 'react';
import Header from "../header";
import './style.css'
import SharedTable from "../../shared/table/sharedTable";
import {HeaderData, tableData} from "../../contant/tableData";

const Service = () => {

    return (
        <div className={'ServiceContainer'}>
            <Header/>
          <SharedTable data={tableData} HeaderData={HeaderData}/>
        </div>
    );
};

export default Service;
