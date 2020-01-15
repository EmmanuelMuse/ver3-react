//React and Redux stuff
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/inputActions'

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
import { Input } from '@material-ui/core';


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
                            <div onClick={(event) => this.props.selectProjectType('Fundraising Management')} className="ROI-icon">
                              <img className="ROI-pic" src={FM} alt="Fundraising"/>
                            </div>
                            <Link exact to="/Info" className="ROI-type">Fundraising<br/>Management</Link>
                          </div>
        
                          <div className="calc">
                            <div onClick={(event) => this.props.selectProjectType('Program Management')} className="ROI-icon">
                                <img className="ROI-pic" src={PM} alt="Program Management"/>
                            </div>
                            <Link onClick={(event) => this.props.selectProjectType('Program Management')} className="ROI-type">Program<br/>Management</Link>
                          </div>
        
                          <div className="calc">
                            <div onClick={(event) => this.props.selectProjectType('Cloud-Based Document Storage')} className="ROI-icon">
                                <img className="ROI-pic" src={CBDS} alt="Cloud-Based Document Storage"/>
                            </div>
                            <Link onClick={(event) => this.props.selectProjectType('Cloud-Based Document Storage')} href="#" className="ROI-type">Cloud-Based<br/>Document Storage</Link>
                          </div>
                      </div>
        
                      <br/>
        
                      <div className="calc-row">
                          <div className="calc">
                            <div onClick={(event) => this.props.selectProjectType('Grant Management')} className="ROI-icon">
                                <img className="ROI-pic" src={GM} alt="Grant Management"/>
                            </div>
                            <Link onClick={(event) => this.props.selectProjectType('Grant Management')} className="ROI-type">Grant<br/>Management</Link>
                          </div>
        
                          <div className="calc">
                            <div onClick={(event) => this.props.selectProjectType('Cloud Based Email')} className="ROI-icon">
                                <img className="ROI-pic" src={CBE} alt="Cloud Based Email"/>
                            </div>
                            <Link onClick={(event) => this.props.selectProjectType('Cloud Based Email')} className="ROI-type">Cloud-Based<br/>Email</Link>
                          </div>
        
                          <div className="calc">
                            <div onClick={(event) => this.props.selectProjectType('Cloud Data Strategy')} className="ROI-icon">
                                <img className="ROI-pic" src={CDS} alt="Cloud Data Stragey"/>
                            </div>
                            <Link onClick={(event) => this.props.selectProjectType('Cloud Data Strategy')} className="ROI-type">Comprehnesive<br/>Data Strategy</Link>
                          </div>
                      </div>
                  </section>
            </>
        );
      }

}//end class - Home Component

const mapStateToProps = (state) => {
  return {
      //inputs: state.resultVlues
      roiSelected: state.resultValues
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    selectProjectType: (type) => dispatch(actions.updateProjType(type))
  }
}


const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeContainer;