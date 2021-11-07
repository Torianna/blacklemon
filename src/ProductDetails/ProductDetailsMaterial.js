import React from 'react';
import {Image} from "semantic-ui-react";
import './ProductDetails.css';
import {mainPicture} from "../images/mainPicture";
import {Description} from "../Description/Description";
import {OrganicIcon} from "../Description/OrganicIcon";

export const ProductDetailsMaterial =()=> {
    return (
        <div style={{display: 'flex'}}>
            <OrganicIcon />
            <OrganicIcon />
            <OrganicIcon />
            <OrganicIcon />
        </div>
    );
}
