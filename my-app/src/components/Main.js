import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from './LandingPage'
import AboutMe from './AboutMe';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';
const Main = () => {
    return(
    <Switch>
        <Route  exact path = "/" component ={LandingPage}/>
        <Route  path = "/AboutMe" component ={AboutMe}/>
        <Route  path = "/Contact" component ={Contact}/>
        <Route  path = "/Education" component ={Education}/>
        <Route  path = "/Experience" component ={Experience}/>
        <Route  path = "/Projects" component ={Projects}/>
        <Route  path = "/Resume" component ={Resume}/>
        <Route  path = "/Skills" component ={Skills}/>
    </Switch>
)
}

export default Main;