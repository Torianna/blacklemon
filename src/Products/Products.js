import React from "react";
import {Grid, Header} from "semantic-ui-react";
import {Product} from "./Product";
import './Products.css'

export const Products =()=> {
    return (
        <div>
            <Header as='h1' style={{color: '#4D4D4D', fontWeight: 'normal', margin: '50px'}}>YOU MAY ALSO LIKE</Header>
            <div className={'products-wrapper'}>
                {[...Array(9)].map(() => <Grid.Column>
                    <Product/>
                </Grid.Column>)}
            </div>
        </div>
    );
}
