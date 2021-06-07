import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.appBar} color="primary">
            <Toolbar>
                <div className={classes.grow} />
                <Typography variant="caption">
                    © 2021 BeeTaxiService.com.  All rights reserved.
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Footer;
