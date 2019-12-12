import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

//import the next page

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
                        <Link exact to="/Info" className="ROI-icon"><img className="ROI-pic" src={FM} alt="Fundraising"/></Link>
                        <Link exact to="/Info" className="ROI-type">Fundraising<br/>Management</Link>
                      </div>

                      <div className="calc">
                        <Link onClick={this.windowAlert} className="ROI-icon">
                            <img className="ROI-pic" src={PM} alt="Program Management"/>
                        </Link>
                        <Link className="ROI-type">Program<br/>Management</Link>
                      </div>

                      <div className="calc">
                        <Link onClick={this.windowAlert} className="ROI-icon">
                            <img className="ROI-pic" src={CBDS} alt="Cloud-Based Document Storage"/>
                        </Link>
                        <Link href="#" className="ROI-type">Cloud-Based<br/>Document Storage</Link>
                      </div>
                  </div>

                  <br/>

                  <div className="calc-row">
                      <div className="calc">
                        <Link onClick={this.windowAlert} className="ROI-icon">
                            <img className="ROI-pic" src={GM} alt="Grant Management"/>
                        </Link>
                        <Link className="ROI-type">Grant<br/>Management</Link>
                      </div>

                      <div className="calc">
                        <Link onClick={this.windowAlert} className="ROI-icon">
                            <img className="ROI-pic" src={CBE} alt="Cloud Based Email"/>
                        </Link>
                        <Link className="ROI-type">Cloud-Based<br/>Email</Link>
                      </div>

                      <div className="calc">
                        <Link onClick={this.windowAlert} className="ROI-icon">
                            <img className="ROI-pic" src={CDS} alt="Cloud Data Stragey"/>
                        </Link>
                        <Link className="ROI-type">Comprehnesive<br/>Data Strategy</Link>
                      </div>
                  </div>
              </section>
        </>
    );
  }
  

}//end class

export default Home;