// React and Redux stuff
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/mathActions';

// imported componenets
import Header from '../Header';
import {Link} from 'react-router-dom';
import {Slider, Button, Tooltip, Fade} from '@material-ui/core';



class HoursSaved extends React.Component{

    render(){
      // Hours Saved Ranges for sliders
      const marks =[
        {
          value: 2.5,
          label: "0-5"
        },
        {
          value: 7.5,
          label:"5-10"
        },
        {
          value: 12.5,
          label: "10-15"
        },
        {
          value: 17.5,
          label: "15-20"
        },
        {
          value: 22.5,
          label: "20+"
        }

      ];
        
        console.log(this.props)
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

                  {/* Slider ONE */}
                  <div className="range-slider">
                    <Slider 
                    marks={marks}
                    step={null}
                    min={2.5} max={22.5}
                    onChangeCommitted={ (event, value) => this.props.collectTime('1',value) }
                    />               
                  </div>

                  <div className="divider"/>
                  

                  {/* Question 2 */}
                  <div className="question-box">
                    <h1 className="question">On average, how many hours are spent monthly conducting and planning major outreach
                      and matching gift campaigns?</h1>
                  </div>
                  {/* Slider TWO */}
                  <div className="range-slider">
                  <Slider 
                    // valueLabelDisplay='auto'
                    // valueLabelFormat={}
                    // getAriaValueText={this.hourRange()} 
                    marks={marks}
                    step={null}
                    min={2.5} max={22.5}
                    onChangeCommitted={ (event, value) => this.props.collectTime('2',value) }
                    /> 
                                  
                  </div>

                  <div className="divider"/>
                    
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
                  {/* Slider THREE */}
                  <div className="range-slider"> 
                  <Slider 
                    // valueLabelDisplay='auto'
                    // valueLabelFormat={}
                    // getAriaValueText={this.hourRange()} 
                    marks={marks}
                    step={null}
                    min={2.5} max={22.5}
                    onChangeCommitted={ (event, value) => this.props.collectTime('3',value) }
                    />             
                  </div>

                  <div className="divider"/>
              
                  {/* Question 4 */}
                  <div className="question-box">
                    <h1 className="question">On average, how many hours are spent monthly on tracking, reporting, and preparing
                      tax receipts annually?</h1>      
                  </div>

                  <div className="divider"/>
                

                  {/* Slider FOUR */}
                  <div className="range-slider">                
                  <Slider 
                    // valueLabelDisplay='auto'
                    // valueLabelFormat={}
                    // getAriaValueText={this.hourRange()} 
                    marks={marks}
                    step={null}
                    min={2.5} max={22.5}
                    onChangeCommitted={ (event, value) => this.props.collectTime('4',value) }
                    />               
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



const mapStateToProps = (state) =>{
  return{ inputs: state.resultValues }
}

const mapDispatchToProps = (dispatch) => {
    return{
      collectTime: (event, id) => dispatch(actions.collectTime(id,event))
    }
}


const HoursContainer = connect(mapStateToProps, mapDispatchToProps)(HoursSaved);
export default HoursContainer;