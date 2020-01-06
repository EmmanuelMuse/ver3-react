//React and Redux Stuff
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/mathActions';

//imported componenets
import {Link} from 'react-router-dom';
import Header from '../Header';
import {Slider, TextField, InputAdornment} from '@material-ui/core';

class DollarsSaved extends React.Component {
  render() {
    //Dollars Saved Ranges for sliders
    const marks = [
      {
        value:1,
        // trueValue: 20000,
        label: "$0-$20,000"
      },
      //25k increment ~ 25% increase
      {
        value:2,
        // trueValue: 45000,
        label:"$20,000-$50,000"
      },
      //30k increment ~ 66% increase
      {
        value:3,
        // trueValue: 75000,
        label:"$50,000-$100,000"
      },
      //75k increment ~ 100% increase
      {
        value:4,
        // trueValue: 150000, 
        label:"$100,000-$200,000"
      },
      //225k increment ~ 150% increase
      {
        // value = 375000
        value:5,
        // trueValue: 375000,
        label:"$200,000+"
      }
    ]
      console.log(this.props)
      return ( 
          <> 
              <Header page="Dollars Saved"/> 
                  <div className = "bg" > 
                      <section className="form">
                          <form className="form-box">
                              {/* Question 1 */}
                              <div className="question-box">
                                <h1 className="question">On average, how much revenue is generated from donations annually?</h1>
                              </div>
                              {/* Slider ONE */}
                              <div className="range-slider">
                                <Slider 
                                marks={marks} 
                                step={null} 
                                min={1} max={5}
                                onChangeCommitted={ (event, value) => this.props.collectMoney('1',value) }/>
                              </div>

                              <div className="question-divider"><span/></div>

                              {/* Question 2 */}
                              <div className="question-box">
                                <h1 className="question">On average, what is the value of grant revenue won by your organization annully?</h1>
                              </div>
                              {/* Slider Two */}
                              <div className="range-slider">
                                <Slider 
                                marks={marks} 
                                step={null} 
                                min={1} max={5}
                                onChangeCommitted={(event, value) => this.props.collectMoney('2',value)}/>
                              </div>

                              <div className="question-divider"><span/></div>

                              {/* Question 3 */}
                              <div className="question-box">
                                <h1 className="question">On average, how much money is spent on fundraising
                                  management systems annually (including licensing, hosting, and support fees) annually?</h1>
                              </div>
                              {/* Slider Three */}
                              <div className="range-slider">
                                <Slider 
                                marks={marks} 
                                step={null} 
                                min={1} max={5}
                                onChangeCommitted={ (event, value) => this.props.collectMoney('3',value)}/>
                              </div>

                              <div className="question-divider"><span/></div>

                              {/* CDR 1 ~ expenses */}
                              <div className="question-box">
                                <h1 className="question">Estimated annual gross fundraising expenses.</h1>
                              </div>
                              <TextField
                                id="standard-number"
                                label="Expenses"
                                type="number"
                                InputLabelProps={{ shrink: true }}
                                margin="normal"
                                variant="filled"
                                onChange = {(event) => this.props.collectExpenses(event.target.value)}
                              />

                              <div className="question-divider"><span/></div>

                              {/* CDR 2 ~ revenue */}
                              <div className="question-box">
                                <h1 className="question">Estimated annual gross fundraising revenue.</h1>
                              </div>
                              <TextField
                                id="standard-number"
                                label="Revenue"
                                type="number"
                                InputLabelProps={{ shrink: true }}
                                margin="normal"
                                variant="filled"
                                startAdorment={<InputAdornment position="start">$</InputAdornment>}
                                onChange = {(event) => this.props.collectRevenue(event.target.value)}
                              />

                              <div className="question-divider"><span/></div>

                              <div className="nav-button">
                                <Link to="/HoursSaved">
                                  <button type="button" className="btn btn-primary">Back</button>
                                </Link>
                                <Link to="/ClientsServed">
                                  <button type="button" className="btn btn-primary">Next</button>
                                </Link>
                              </div>
                          </form>
                      </section> 
                      < div className = "progress" style = {{width: '55%'}}> 
                          <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%'}}><label>50%</label></div>
                      </div>
                  </div>
              </>
           );
        }
}


const mapStateToProps = (state) => {
  return {inputs: state.resultValues}
}
const mapDispatchToProps = (dispatch) => {
  return {
    collectMoney: (event, id) => dispatch(actions.collectMoney(id, event)),
    collectExpenses: (event) => dispatch(actions.expenses(event)),
    collectRevenue: (event) => dispatch(actions.revenue(event))
        }
}

const DollarsContainer = connect(mapStateToProps, mapDispatchToProps)(DollarsSaved);
export default DollarsContainer;