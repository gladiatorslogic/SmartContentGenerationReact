import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from './containers/Application';
import { Box, Grid, Tab, useMediaQuery, useTheme } from '@material-ui/core';
import logo from './TravelwithPride.png';
import small_logo from './TravelwithPride.png';
import { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import SimpleApp from './containers/SimpleApp';
import Analytics from './containers/Analytics';


function App() {
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down('md'));
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styleValue = small ? '1rem .5rem' : '1rem 2rem';

  return (
    <div className="App">
      <header className="App-header">
        <img src={medium? small_logo: logo} alt='Travel with Pride' height={90} />
        <h1>Smart Content Generation for Marketing and Promotional Schemes</h1>
      </header>
      <Grid 
        container 
        direction="row" 
        justifyContent='center' 
        style={{padding: styleValue}}
        >
        <Grid item xs={12}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Customer Focused" value="1" />
                <Tab label={'General Context'} value="2" />
                <Tab label={'Feedback Analysis'} value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">{<Application />}</TabPanel>
            <TabPanel value="2">{<SimpleApp />}</TabPanel>
            <TabPanel value="3">{<Analytics />}</TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
