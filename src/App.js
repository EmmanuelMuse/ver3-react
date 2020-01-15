import React from 'react';
import './sass/main.sass';
//react router
import {HashRouter, Route} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'
//importing pages for Router
import HomeContainer from './components/Home';
import Info from './components/ROI/Info';
import HourSaved from './components/ROI/hoursSaved';
import DollarsSaved from './components/ROI/dollarsSaved';
import clientsServed from './components/ROI/clientsServed';
import Results from './components/ROI/results';

function App() {
  return (
    <HashRouter basename= "/ver3-react" >
        <ScrollToTop>
            {/* Pages */}
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/Info" component={Info}/>
            <Route path="/HoursSaved" component={HourSaved}/>
            <Route path="/DollarsSaved" component={DollarsSaved}/>
            <Route path="/ClientsServed" component={clientsServed}/>
            <Route path="/Results" component={Results}/>
        </ScrollToTop>
    </HashRouter>
    
    
  );
}

export default App;
