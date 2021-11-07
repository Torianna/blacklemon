import React from 'react';
import {Breadcrumb, Divider, Header, Icon} from "semantic-ui-react";
import {OrganicIcon} from "./OrganicIcon";
import {ProductDetailsMaterial} from "../ProductDetails/ProductDetailsMaterial";

export const Description =()=> {
    return (<div style={{  padding: '50px' }}>
            <Breadcrumb>
                <Breadcrumb.Section link><Icon name={'arrow left'}/></Breadcrumb.Section>
                <Breadcrumb.Section link>ALL PRODUCTS</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link>HAIRCARE</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>RESTORATIVE HAIR MASK</Breadcrumb.Section>
            </Breadcrumb>
            <Header as='h1'>RESTORATIVE HAIR MASK</Header>
            <Header as='h4'>nuturishment in a bottle</Header>
            <Divider/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut.
            <Divider/>
            <ProductDetailsMaterial/>
        </div>
    );
}
