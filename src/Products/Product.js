import React from "react";
import {Card, Image} from "semantic-ui-react";
import {product} from "../images/pictureProduct";
import './Products.css'

export const Product =()=> {
    return (
        <Card style={{margin: '30px', border: 'none', borderRadius: 'none', boxShadow: 'none'}}>
            <Image src={product} wrapped ui={false} />
            <Card.Content>
                <Card.Description style={{fontWeight: 'normal' ,color: 'none'}}>HAND POMADE / POMMADE MAINS</Card.Description>
                <Card.Description style={{fontWeight: '300'}}>NOURISHMENT FOR YOUR HANDS</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    159,00 KR
                </a>
            </Card.Content>
        </Card>
    );
}
