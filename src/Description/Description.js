import React from 'react';
import {Breadcrumb, Divider, Header, Icon} from "semantic-ui-react";
import {ProductDetailsMaterial} from "../ProductDetails/ProductDetailsMaterial";
import './Description.css'

export const Description =()=> {
    return (<div className={'description-details'}>
            <Breadcrumb>
                <Breadcrumb.Section link><Icon style={{ marginRight: '10px' }} name={'arrow left'}/></Breadcrumb.Section>
                <Breadcrumb.Section link>ALL PRODUCTS</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link>HAIRCARE</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>RESTORATIVE HAIR MASK</Breadcrumb.Section>
            </Breadcrumb>
            <Header as='h1' style={{alignSelf: 'baseline', color: '#4D4D4D', fontWeight: 'normal'}}>RESTORATIVE HAIR MASK</Header>
            <Header as='h4' style={{alignSelf: 'baseline', color: '#4D4D4D', textTransform: 'uppercase' , fontWeight: 'normal'}}>nuturishment in a bottle</Header>
            <Divider id={'divider'}/>
            <div style={{textAlign: 'start !important'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut.
            </div>
            <Divider id={'divider'}/>
            <ProductDetailsMaterial/>
            <Divider id={'divider'}/>
            <button className={'button-add-to-cart'}>ADD TO CART</button>
        </div>
    );
}
