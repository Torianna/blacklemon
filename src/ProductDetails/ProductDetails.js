import React from 'react';
import {Image} from "semantic-ui-react";
import './ProductDetails.css';
import {mainPicture} from "../images/mainPicture";
import {Description} from "../Description/Description";

export const ProductDetails =()=> {
    return (
        <div className={'productDetails'}>
            <Image src={mainPicture}/>
            <Description/>
        </div>
    );
}
