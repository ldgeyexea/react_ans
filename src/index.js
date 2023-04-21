import React from "react";
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./components/counter";


    ReactDom.render(
        <React.StrictMode>
            <Counter/>
          </React.StrictMode>
        , document.getElementById('root'));


