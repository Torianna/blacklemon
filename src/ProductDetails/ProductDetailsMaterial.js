import React from 'react';
import {Grid} from "semantic-ui-react";
import './ProductDetails.css';
import {OrganicIcon} from "./OrganicIcon";

export const ProductDetailsMaterial =()=> {
    return (
        <div style={{display: 'flex'}}>
            <Grid columns={2}>
                <Grid.Row>
                    {[...Array(4)].map(() => <Grid.Column>
                            <OrganicIcon />
                        </Grid.Column>)}
                </Grid.Row>
            </Grid>
        </div>
    );
}
