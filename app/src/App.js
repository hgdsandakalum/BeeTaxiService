import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Toolbar } from '@material-ui/core';

import Homepage from "./components/Homepage/Homepage";
import AddVehicle from "./components/AddVehicle/AddVehicle";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import AllVehicles from './components/AllVehicels/AllVehicles';
import AddCategory from './components/AddCategory/AddCategory';


function App() {
  const [vehicleData, setvehicleData] = useState([]);

  const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#171717',
        },
        secondary: {
            light: '#0066ff',
            main: '#FFB101',
            contrastText: '#ffffff',
        },
        error: {
          main: '#992402',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    spacing: 8,
  });

  console.log(vehicleData);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Toolbar />
          <Switch>
            <Route path="/" exact >
                <Homepage vehicleData={vehicleData} setvehicleData={setvehicleData} />
            </Route>
            <Route path="/newvehicle" exact component={AddVehicle} />
            <Route path="/newcat" exact component={AddCategory} />
            <Route path="/checkout" exact >
                <Checkout vehicleData={vehicleData} />
            </Route>
            <Route path="/viewall" exact >
                <AllVehicles vehicleData={vehicleData} setvehicleData={setvehicleData} />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
