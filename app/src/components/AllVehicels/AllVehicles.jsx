import React, { useEffect, useState, useRef } from 'react';
import { Grid, Typography, Divider, ButtonGroup, Button } from '@material-ui/core';

import useStyles from './styles';
import Vehicle from '../Vehicle/Vehicle';

const AllVehicles = ({ vehicleData, setvehicleData }) => {
    const [vehicles, setVehicles] = useState([]);
    const [vehiclesByCat, setVehiclesByCat] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const classes = useStyles();
    const isFirstRender = useRef(true);

    useEffect(() => {
        fetchVehicles();
        fetchCategories();
        if (isFirstRender.current) {
            isFirstRender.current = false // toggle flag after first render/mounting
            return;
        }
        console.log(category) // do something after state has updated
        fetchByCat();
    }, [category])

    const fetchCategories = async() => {
        const response = await fetch('http://localhost:5001/categories/');
        const data = await response.json();
        setCategories(data);
    }

    const fetchVehicles = async() => {
        const response = await fetch('http://localhost:5001/vehicles/');
        const data = await response.json();
        setVehicles(data);
    }


    const fetchByCat = async() => {
        if (category) {
            const response = await fetch(`http://localhost:5001/vehicles/getByCat/${category}`);
            const data = await response.json();
            setVehiclesByCat(data)
        } else {
            const response = await fetch('http://localhost:5001/vehicles/');
            const data = await response.json();
            setVehicles(data);
        }
        
    }

    return (
        <main className={classes.content}>
            <div className={classes.header}>
                <Typography variant="h4" style={{ fontWeight: '500' }}>All Vehicles</Typography>
                <ButtonGroup variant="text" color="inherit" size="medium">
                    {categories.map((item) => (
                        <Button key={item._id} onClick={() => setCategory(item.name)}>{item.name}</Button>
                    ))}
                    <Button onClick={() => setCategory(null)}>View All</Button>
                </ButtonGroup>
            </div>
            <Divider variant="fullWidth" style={{ marginBottom: '20px' }} />
            {category === "" || category == null ? 
            <Grid container justify="center" spacing={2}>
                {vehicles.map((vehicle) => (  
                    <Grid item key={vehicle._id} xs={12} sm={6} md={4} lg={3}>
                        <Vehicle vehicle={vehicle} setvehicleData={setvehicleData} />
                    </Grid>    
                ))}
            </Grid> : 
            <Grid container justify="center" spacing={2}>
                {vehiclesByCat.map((vehicle) => (  
                    <Grid item key={vehicle.id} xs={12} sm={6} md={4} lg={3}>
                        <Vehicle vehicle={vehicle} setvehicleData={setvehicleData} />
                    </Grid>    
                ))}
            </Grid> }
        </main>
    )
}

export default AllVehicles;
