import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography, Paper, Grid, TextField, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles';

const Checkout = ({ vehicleData }) => {
    const classes = useStyles();
    const { control, handleSubmit, reset } = useForm();
    const [categories, setCategories] = useState([]);
    const [value, setValue] = React.useState('');
    const [duration, setDuration] = React.useState('');
    const [totalCost, setTotalCost] = React.useState(0);
    const [vehicleid, setVehicleid] = useState(false);

    useEffect(() => {
        setCategories(vehicleData.categories);
        if(vehicleData._id) setVehicleid(true);
    }, []);

    console.log(vehicleData);

    const CssTextField = withStyles({
        root: {
          '& .MuiInputLabel-root': {
            color: '#a3a3a3',
          },
          '& .MuiTextField-root': {
            color: '#a3a3a3',
          },
          '& label.Mui-focused': {
            color: '#a3a3a3',
          },
          '& .MuiInputBase-input':{
            color: '#ffffff',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#a3a3a3',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#a3a3a3',
            },
            '&:hover fieldset': {
              borderColor: '#cccccc',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFB101',
            },
          },
        },
        input: {
          color: "white"
        }
    })(TextField);

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };
    
    const handleDuration = (event) => {
        setDuration(event.target.value);
    };

    const calculateCost = (event) => {
        var rate_per_week = parseInt(vehicleData.rate_per_week, 10);
        var rate_per_month = parseInt(vehicleData.rate_per_month, 10);
        var rate_per_day = parseInt(vehicleData.rate_per_day, 10);
        var durationSt = parseInt(duration, 10);

        if (value == "Short Trips") setTotalCost(rate_per_week * durationSt);
        if (value == "Long Trips") setTotalCost(rate_per_month * durationSt);
        if (value == "Wedding") setTotalCost(rate_per_day);
        if (value == "Special Occasion") setTotalCost(rate_per_day);
    };

    var arr = [];

    const onSubmit = (data) => {
        arr = data;
        submitForm(arr);
    }
  
      
    const submitForm = (data) => {
      console.log(data);
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {vehicleid ?
                <div>
                <Typography variant="h4" className={classes.title} gutterBottom>Request a Vehicle</Typography>
                <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '30px' }}>
                    <Grid container spacing={3} gutterBottom >
                        <Grid item xs={12} sm={6}>
                            <CssTextField disabled fullWidth label="Vehicle Model" defaultValue={vehicleData.model} variant="outlined" color="primary"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CssTextField disabled fullWidth label="Vehicle Name" defaultValue={vehicleData.name} variant="outlined" color="primary"/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <FormLabel component="legend" className={classes.radioGoupLabel}>Trip Category</FormLabel>
                            <RadioGroup aria-label="category" name="category" row value={value} onChange={handleRadioChange}>
                                {categories.map((item) => (
                                    <FormControlLabel value={item} control={<Radio className={classes.radioGoup} />} label={item} className={classes.radioGoup} />
                                ))}
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <CssTextField disabled fullWidth label="Rates Per Week" defaultValue={vehicleData.rate_per_week} variant="outlined" color="primary" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <CssTextField disabled fullWidth label="Rates Per Month" defaultValue={vehicleData.rate_per_month} variant="outlined" color="primary" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <CssTextField disabled fullWidth label="Rates Per Day" defaultValue={vehicleData.rate_per_day} variant="outlined" color="primary" />
                        </Grid>
                        {value == "Short Trips" || value == "Long Trips" ? 
                        <Grid item xs={12} sm={4}>
                            {value == "Short Trips" ?
                                <CssTextField fullWidth value={duration} label="Duration in Weeks" variant="outlined" color="primary" onChange={handleDuration}/> :
                                <CssTextField fullWidth value={duration} label="Duration in Months" variant="outlined" color="primary" onChange={handleDuration}/>
                            }
                        </Grid>
                        : null}
                        <Grid item xs={12} sm={5}>
                            <CssTextField disabled fullWidth label="Total Cost" value={totalCost} variant="outlined" color="primary"/>
                        </Grid>
                        <Grid item xs={12} sm={3} style={{ display: 'flex' }}>
                            <Button fullWidth onClick={calculateCost} variant="text" size="large" color="secondary" style={{ marginRight: '30px' }}>Calculate</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                <Button onClick={() => reset()} variant="outlined" color="secondary" style={{ marginRight: '30px' }}>Reset</Button>
                                <Button type="submit" fullWidth variant="contained" color="secondary">Submit</Button>
                            </div>
                        </Grid>
                    </Grid>
                </form> 
                </div>: <div>sds</div> }
            </Paper>
        </div>
    )
}

export default Checkout;
