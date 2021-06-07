import React, { useEffect, useState } from 'react';
import { Grid, GridList, GridListTile  } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Vehicle from '../Vehicle/Vehicle';
import useStyles from "./styles";

const SpecialO = ({ vehicleData, setvehicleData }) => {
    const [vehicles, setVehicles] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async() => {
        const response = await fetch('http://localhost:5001/vehicles/getByCat/Special%20Occasion');
        const data = await response.json();

        setVehicles(data);
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <main className={classes.content}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={false}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                centerMode={false}
                >
                   {vehicles.map((vehicle) => (
                        <Vehicle vehicle={vehicle} setvehicleData={setvehicleData}/>
                    ))}
                </Carousel>
        </main>
    )
}

export default SpecialO;
