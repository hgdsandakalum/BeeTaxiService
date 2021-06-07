import React, { useEffect, useState, Component  } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { withStyles } from '@material-ui/core/styles';
import { InputBase, Button, Typography, Paper, Grid, TextField, Select, MenuItem } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles';

const AddVehicle = () => {
    const classes = useStyles();
    const { control, handleSubmit, reset } = useForm();
    const [message, setMessage] = useState(false);
    const [formData, setFormData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = React.useState([]);
    const history = useHistory();

    const CssTextField = withStyles({
        root: {
          '& .MuiInputLabel-root': {
            color: '#a3a3a3',
          },
          '& .MuiTextField-root': {
            color: '#a3a3a3',
          },
          '& .MuiFormHelperText-root': {
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

    const BootstrapInput = withStyles((theme) => ({
        root: {
          'label + &': {
            marginTop: theme.spacing(3),
          },
        },
        input: {
          borderRadius: 4,
          position: 'relative',
          color: '#ffffff',
          backgroundColor: '#171717',
          border: '1px solid #afafaf',
          fontSize: 16,
          padding: '16px 26px 16px 12px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          '&:focus': {
            borderRadius: 4,
            borderColor: '#FFB101',
          },
        },
    }))(InputBase);

    var arr = [];

    const onSubmit = (data) => {
      arr = data;
      arr.categories = category;
      submitForm(arr);
    }

    
    const submitForm = (data) => {
      setMessage(false);
      console.log(formData);
      axios.post('http://localhost:5001/vehicles/',
      {
        name : data.name,
        code : data.code,
        model : data.model,
        type : data.type,
        image : data.image,
        rate_per_month : data.rate_per_month,
        rate_per_week : data.rate_per_week,
        rate_per_day : data.rate_per_day,
        categories : data.categories
      }). then((response) => {
        console.log(response);
        setMessage(true);
        reset();
        // history.push("/");
      }).catch((err) => {
        console.log(err);
      })
    }

    // const handleSubmit = (e) => {
    //   // e.preventDefault();
      
    //   console.log(formData);
    // };

    const handleSelect = (e) => {
      setCategory(e.target.value);

      // console.log(e.target.value);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async() => {
        const response = await fetch('http://localhost:5001/categories/');
        const data = await response.json();

        setCategories(data);
    }

  

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>  
            { message ? <Alert severity="success" style={{ marginBottom: '10px' }}>Vehicle added succefully!</Alert> : null}
                <Typography variant="h4" className={classes.title} gutterBottom>Add New Vehicle</Typography>
                <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '30px' }}>
                    <Grid container spacing={3} gutterBottom >
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="model"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                <CssTextField fullWidth label="Vehicle Model" variant="outlined" color="primary" {...field} />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                              
                                render={({ field }) => 
                                <CssTextField fullWidth label="Vehicle Name" variant="outlined" color="primary" {...field} />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="code"
                                control={control}
                                defaultValue=""
                               
                                render={({ field }) => 
                                <CssTextField fullWidth label="Vehicle Number" variant="outlined" color="primary" {...field} />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="type"
                                control={control}
                                defaultValue=""
                           
                                render={({ field }) => 
                                <CssTextField fullWidth label="Vehicle Type" variant="outlined" color="primary" {...field} />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="image"
                                control={control}
                                defaultValue=""
                                
                                render={({ field }) => 
                                <CssTextField fullWidth label="Image Link" variant="outlined" color="primary" {...field} />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="categories"
                                control={control}
                                render={({ field }) =>
                                    <Select
                                    {...field}
                                    multiple
                                    defaultValue={category}
                                    fullWidth
                                    value={category}
                                    onChange={handleSelect}
                                    input={<BootstrapInput name="categories" defaultValue="dsdsd" value="sds" {...field} />}
                                    >
                                    {categories.map((data) => (
                                        <MenuItem key={data._id} value={data.name}>
                                            {data.name}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                }/>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="rate_per_month"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                <CssTextField fullWidth label="Rate Per Month" variant="outlined" color="primary" {...field} />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="rate_per_week"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                <CssTextField fullWidth label="Rate Per Week" variant="outlined" color="primary" {...field} />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="rate_per_day"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                <CssTextField 
                                fullWidth 
                                label="Rate Per Day" 
                                helperText="You only have to fill this if the vehicle belong to 'Wedding' or 'Special Occasion' Categories." 
                                variant="outlined" 
                                color="primary" 
                                {...field} 
                                />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                <Button onClick={() => reset()} variant="outlined" color="secondary" style={{ marginRight: '30px' }}>Reset</Button>
                                <Button type="submit" fullWidth variant="contained" color="secondary">Submit</Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    )
}

export default AddVehicle;
