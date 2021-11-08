import React from 'react';
import {Image} from "semantic-ui-react";
import ReactLogo from './Vector.svg';
import '../Description/Description.css'

export const OrganicIcon =()=> {
    return (
        <div className={'icon-wrapper'}>
        <div className={'circle'}>
        <Image className={'icon-circle'} src={ReactLogo}/></div>
            <span className={'icon-wrapper-text'}> 100% ORGANIC</span>
        </div>
    );
}
