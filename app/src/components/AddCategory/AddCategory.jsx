import React, { useEffect, useState, Component  } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { withStyles } from '@material-ui/core/styles';
import { InputBase, Button, Typography, Paper, Grid, TextField, Select, MenuItem } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles';

const AddCategory = () => {
    const classes = useStyles();
    const { control, handleSubmit, reset } = useForm();
    const [message, setMessage] = useState(false);
    const [category, setCategory] = React.useState([]);

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

    var arr = [];

    const onSubmit = (data) => {
      arr = data;
      arr.categories = category;
      submitForm(arr);
    }
    
    const submitForm = (data) => {
      setMessage(false);
      axios.post('http://localhost:5001/categories/',
      {
        name : data.name,
        code : data.code
      }). then((response) => {
        console.log(response);
        setMessage(true);
        reset();
      }).catch((err) => {
        console.log(err);
      })
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>  
            { message ? <Alert severity="success" style={{ marginBottom: '10px' }}>Category added succefully!</Alert> : null}
                <Typography variant="h4" className={classes.title} gutterBottom>Add New Category</Typography>
                <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '30px' }}>
                    <Grid container spacing={3} gutterBottom >
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="code"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                <CssTextField fullWidth label="Category Code" variant="outlined" color="primary" {...field} />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                <CssTextField fullWidth label="Category Name" variant="outlined" color="primary" {...field} />}
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

export default AddCategory;
