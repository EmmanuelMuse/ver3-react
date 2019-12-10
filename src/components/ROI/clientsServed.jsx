import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import {TextField} from '@material-ui/core';


class clientsServed extends React.Component{
    render(){
        return(
            <>
            <Header page="Clients Served"/>
          <div className="bg">
  <section className="form">
    <form className="form-box">
      <div className="question-box">
        <h1 className="question">What is your organization's annual budget for the year?</h1>
      </div>
      <div className="question-divider">
        <span />
      </div>
      <TextField
          id="standard-number"
          label="Budget"
          type="number"
         
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
      <div className="question-divider">
        <span />
      </div>
      <div className="question-box">
        <h1 className="question">On average, how many unique clients does your organization serve in a year?</h1>
      </div>
      <div className="question-divider">
        <span />
      </div>
      <TextField
          id="standard-number"
          label="Unique Clients"
          type="number"
         
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
      <div className="question-divider">
        <span />
      </div>
      <div className="nav-button">
        <Link to="/DollarsSaved">
          <button type="button" onclick="userInfo()" className="btn btn-primary">Back</button>
        </Link>
        <Link to="/Results">
          <button type="button" onclick="userInfo()" className="btn btn-primary">Next</button>
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

export default clientsServed;