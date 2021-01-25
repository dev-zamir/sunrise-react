import { useState } from 'react'
import { AppBar, Tab } from "@material-ui/core";
import  TabPanel  from "@material-ui/lab/TabPanel";
import { TabContext, TabList } from '@material-ui/lab';
import Home from "./Home/Index";
import PrincipalMessage from "./PrincipalMessage/Index"
import About from "./About/Index"
import Facilities from "./Facilities/Index"
import DirectorView from "./DirectorView/Index"
import Career from "./Career/Index"

const CustomNavBar = () => {
  
  const [tabValue, setTabValue] = useState('1')
  const handleTabChange = (e, v) => {

    setTabValue(v);
  }

  return (
    <>
      <TabContext value={tabValue}>
        <AppBar position="sticky">
          <TabList onChange={handleTabChange} variant="scrollable" aria-label="simple tabs example">
            <Tab label="HOME" value="1" />
            <Tab label="PRINCIPAL'S MESSAGE" value="2" />
            <Tab label="ABOUT" value="3" />
            {/* <Tab label="ACTIVITIES" value="4" /> */}
            {/* <Tab label="ACADEMICS" value="5" /> */}
            <Tab label="FACILITIES" value="5" />
            <Tab label="DIRECTOR'S VIEW" value="6" />
            <Tab label="CAREER" value="7" />
            <Tab label="CONTACT US" value="8" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <Home/>
        </TabPanel>
        <TabPanel value="2">
          <PrincipalMessage/>
        </TabPanel>
        <TabPanel value="3">
          <About/>
        </TabPanel>
        <TabPanel value="5">
          <Facilities/>
        </TabPanel>
        <TabPanel value="6">
          <DirectorView/>
        </TabPanel>
        <TabPanel value="7">
          <Career/>
        </TabPanel>
      </TabContext>
    </>
  )
}

export default CustomNavBar;