//React and Redux stuff
import React from 'react';

//impoted components
import Header from './Header';
//////ROI icons fundraising management
import FM from '../imgs/FM.png';
//program management
import PM from '../imgs/PM.png';
// cloud based document stroage
import CBDS from '../imgs/CBDS.png';
//grant management
import GM from '../imgs/GM.png';
// cloud based email
import CBE from '../imgs/CBE.png';
//comprehensive data strategy
import CDS from '../imgs/CDS.png';

import ROImodal from './ROI/features/modals';


class Home extends React.Component {
    constructor(props){
        super(props);
        this.windowAlert = this.windowAlert.bind(this)
    }
    windowAlert(){
        alert("Calculator currently under construction, please check back soon!");
      }
      
    render() {
        return (
          <>
              <Header page="ROI Calculators"/>
                  <section className="calcs">

                      <div className="calc-row">
                          <div className="calc">
                            <ROImodal projType="Fundraising Management" projCost="$50k" projImg={FM}/>
                          </div>
        
                          <div className="calc">
                            <ROImodal projType="Program Management" projCost="$50k" projImg={PM}/>
                          </div>
        
                          <div className="calc">
                            <ROImodal projType="Cloud-Based Document Storage" projCost="15k" projImg={CBDS}/>
                          </div>
                      </div>
        
                      <br/>
        
                      <div className="calc-row">
                          <div className="calc">
                            <ROImodal projType="Grant Management" projCost="$100k" projImg={GM}/>
                          </div>
        
                          <div className="calc">
                              <ROImodal projType="Cloud Based Email" projCost="$10k" projImg={CBE}/>
                          </div>
        
                          <div className="calc">
                            <ROImodal projType="Cloud Data Strategy" projCost="50k" projImg={CDS}/>
                          </div>
                      </div>

                  </section>
            </>
        );
      }

}//end class - Home Component

export default Home;