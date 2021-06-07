import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import useStyles from './styles';
import logo from '../../assests/ONIKPV1.png';


const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar} color="primary">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="commerce.js" height="25px" className={classes.image} />  BeeTaxiService
                    </Typography>
                    <div className={classes.grow} />
                    <ButtonGroup variant="text" color="inherit" size="medium" className={classes.buttongroup}>
                        <Button component={Link} to="/viewall">View All Vehicles</Button>
                        <Button component={Link} to="/newcat">Insert a Category</Button>
                    </ButtonGroup>
                    <Button component={Link} to="/newvehicle" variant="contained" color="secondary">Insert a Vehicle</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
