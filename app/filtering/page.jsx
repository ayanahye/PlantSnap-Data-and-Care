'use client'
import Nav from '../components/nav';
import { useEffect } from "react";

import React from 'react'
import Filter from '../components/filter';
import Data from '../values.json';
import '../styles/App.css';

function filtering() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="App">
        <Filter speciesList={JSON.stringify(Data)}/>
    </div>


  )
}

export default filtering