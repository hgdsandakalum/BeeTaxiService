import { Card, CardContent, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

import ShortTrips from '../ShortTrips/ShortTrips';
import LongTrips from '../LongTrips/LongTrips';
import Weddings from '../Weddings/Weddings';
import useStyles from './styles';
import SpecialO from '../SpecialO/SpecialO';

const Homepage = ({ vehicleData, setvehicleData }) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.cover} />
            <div className={classes.subhead}>
                <Typography variant="h6" className={classes.subheadtitle} >
                    For Short Trips
                </Typography>
            </div>
            <ShortTrips vehicleData={vehicleData} setvehicleData={setvehicleData} />
            <div className={classes.subhead}>
                <Typography variant="h6" className={classes.subheadtitle} >
                    For Long Trips
                </Typography>
            </div>
            <LongTrips vehicleData={vehicleData} setvehicleData={setvehicleData}/>
            <div className={classes.subhead}>
                <Typography variant="h6" className={classes.subheadtitle} >
                    For Weddings
                </Typography>
            </div>
            <Weddings vehicleData={vehicleData} setvehicleData={setvehicleData}/>
            <div className={classes.subhead}>
                <Typography variant="h6" className={classes.subheadtitle} >
                    For Special Occasions
                </Typography>
            </div>
            <SpecialO vehicleData={vehicleData} setvehicleData={setvehicleData}/>
        </div>
    )
}

export default Homepage;
