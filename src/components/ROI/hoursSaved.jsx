import React from 'react';
import Header from '../Header';
import {Link} from 'react-router-dom';
import {Slider, Button, Tooltip, Fade} from '@material-ui/core';



class HoursSaved extends React.Component{
    render(){

        return(
            <>
        <Header page="Hours Saved"/>
  <div className="bg">
  <section className="form">
    <form className="form-box">
      {/* Question 1 */}
      <div className="question-box">
        <h1 className="question">On average, how many hours are spent monthly on administrative work concerning
          donations?</h1>
        <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        arrow="arrow"
        placement="top"
        title ={<span style={{fontSize:"1.3rem", lineHeight:"1.5rem"}}>This includes generating and communicating donation reports, 
        hours spent tracking and reporting on in-kind donation gifts, reconciling 
        donations with accounting systems, and hours spent writing thank you letters for donations.</span>}>
          <Button className="help">Help</Button>
        </Tooltip>
      </div>
      <div className="range-slider">
        <Slider valueLabelDisplay='auto' step={100} min={0} max={100000}/>               
      </div>
      <div className="question-divider">
        <span />    
      </div>  
      {/* Question 2 */}
      <div className="question-box">
        <h1 className="question">On average, how many hours are spent monthly conducting and planning major outreach
          and matching gift campaigns?</h1>
      </div>
      <div className="range-slider">
        <Slider valueLabelDisplay='auto' step={100} min={0} max={100000}/>               
      </div>
      <div className="question-divider">
        <span />    
      </div>  
      {/* Question 3 */}
      <div className="question-box">
        <h1 className="question">On average, how many hours are spent monthly on adminstrative work concerning
          grants?</h1>
       
        <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        placement="top"
        arrow="arrow"
        title={<span style={{fontSize:"1.3rem", lineHeight:"1.5rem"}}>This includes hours spent managing your grant pipeline, 
        managing/reporting grant deadlines, hours spent generating and communicating grant reports 
        and hours spent on allocation.</span>}>
          <Button className="help" >Help</Button>
        </Tooltip>
      </div>
      <div className="range-slider"> 
        <Slider valueLabelDisplay='auto' step={100} min={0} max={100000}/>               
      </div>
      <div className="question-divider">
        <span />    
      </div>  
      {/* Question 4 */}
      <div className="question-box">
        <h1 className="question">On average, how many hours are spent monthly on tracking, reporting, and preparing
          tax receipts annually?</h1>      
      </div>
      <div className="question-divider">
        <span />    
      </div>
      <div className="range-slider">                
        <Slider valueLabelDisplay='auto' step={100} min={0} max={100000}/>               
      </div>
      <div className="nav-button">
        <Link to="DollarsSaved">
          <button type="button" className="btn btn-primary">Next</button>
        </Link>
      </div>
    </form>
  </section>
  <div className="progress" style={{width: '55%'}}>
    <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '25%'}}><label>25%</label></div>
  </div>
  </div>
            </>
        );
    }
}

export default HoursSaved;