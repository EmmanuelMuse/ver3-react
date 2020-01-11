//React and Redux Stuff
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/mathActions';

//imported components
import { Link } from 'react-router-dom';
import Header from '../Header';
import {TextField} from '@material-ui/core';


class clientsServed extends React.Component{
    render(){

      console.log(this.props)
        return(
            <>
                <Header page="Clients Served"/>
                    <div className="bg">
                        <section className="form">
                            <form className="form-box">
                                <div className="question-box">
                                    <h1 className="question">What is your organization's annual budget for the year?</h1>
                                </div>
                                <div className="question-divider"><span/></div>
                                <TextField
                                    id="standard-number"
                                    label="Budget"
                                    type="number"
                                    InputLabelProps={{ shrink: true }}
                                    margin="normal"
                                    variant="filled"
                                    onChange = { (event) => this.props.collectBudget(event.target.value)}
                                />
                                <div className="question-divider"><span/></div>
                                <div className="question-box">
                                    <h1 className="question">On average, how many unique clients does your organization serve in a year?</h1>
                                </div>
                                <div className="question-divider"><span/></div>
                                <TextField
                                    id="standard-number"
                                    label="Unique Clients"
                                    
                                    type="number"
                                    InputLabelProps={{ shrink: true }}
                                    margin="normal"
                                    variant="filled"
                                    onChange= {(event) => this.props.collectClients(event.target.value)}
                                />
                            
                                <div className="question-divider"><span/></div>
                                <div className="nav-button">
                                    <Link to="/DollarsSaved">
                                        <button type="button" className="btn btn-primary">Back</button>
                                    </Link>
                                    <Link to="/Results">
                                        <button type="button" className="btn btn-primary">Next</button>
                                    </Link>
                                  </div>
                              </form>
                          </section>
                          <div className="progress" style={{width: '55%'}}>
                              <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}><label>75%</label></div>
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
    return{
        collectBudget: (input) => dispatch(actions.budget(input)),
        collectClients: (input) => dispatch(actions.clients(input))
        }
}
const ClientContainer = connect(mapStateToProps, mapDispatchToProps)(clientsServed)
export default ClientContainer;