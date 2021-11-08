import React from 'react';
import {Image} from "semantic-ui-react";
import './ProductDetails.css';
import {mainPicture} from "../images/mainPicture";
import {Description} from "../Description/Description";
import {Products} from "../Products/Products";

export const ProductDetails =()=> {
    return (
        <React.Fragment>
            <div className={'productDetails'}>
                    <Image src={mainPicture}/>
                <Description/>
            </div>
            <Products/>
        </React.Fragment>

    );
}
