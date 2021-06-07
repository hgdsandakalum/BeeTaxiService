import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';

const Vehicle = ({ vehicle, setvehicleData }) => {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setCategories(vehicle.categories);
    }, []);

    const handleAddToRent = async(vehicle) => {
        setvehicleData(vehicle);

        history.push("/checkout");
    };


    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={vehicle.image} title={vehicle.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <div>
                            <Typography variant="h6" gutterBottom>
                                {vehicle.model} {vehicle.name}
                            </Typography>
                            <Typography variant="caption" className={classes.seller} gutterBottom>
                                {vehicle.category}
                            </Typography>
                        </div>
                        <Typography variant="h5" className={classes.price}>
                            <IconButton aria-label="Rent" onClick={() => handleAddToRent(vehicle)} >
                                <AddShoppingCart />
                            </IconButton>
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: vehicle.type }} variant="body2" color="textSecondary" />
                </CardContent>
                <CardActions className={classes.cardActions}> 
                    <Typography variant="subtitle2">
                        <span>Category :</span>
                        {categories.map((category) => (
                            <span> {category} |</span>
                        ))}
                    </Typography>
                </CardActions>
            </Card>
        </div>
    )
}

export default Vehicle
