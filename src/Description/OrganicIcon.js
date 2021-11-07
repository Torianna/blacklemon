import React from 'react';
import {Image} from "semantic-ui-react";
import ReactLogo from './Vector.svg';

export const OrganicIcon =()=> {
    return (
        <div >
        <Image style={{ border: '1.5px solid #9F938B', boxSizing: 'border-box', borderRadius: '25px', display: 'flex', margin: '10px'}}  src={ReactLogo}/>
            <span>ORGANIC MATERIAL</span>
        </div>
    );
}
