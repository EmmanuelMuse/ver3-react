import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

class clientsServed extends React.Component{
    render(){
        return(
            <>
            <Header page="Clients Served"/>
          <div>
  <section className="form">
    <form className="form-box">
      <div className="question-box">
        <h1 className="question">What is your organization's annual budget for the year?</h1>
      </div>
      <div className="question-divider">
        <span />
      </div>
      <div className="range-slider">
        <input type="range" min={1} max={8} defaultValue={0} className="slider" id="myRange" />
      </div>
      <div className="question-divider">
        <span />
      </div>
      <div className="question-box">
        <h1 className="question">How many unique clients does your organization serve in a year?</h1>
        <button type="button" className="btn btn-secondary help" data-container="body" data-toggle="popover" data-placement="top" data-content="This includes generating and communicating donation reports, 
          hours spent tracking and reporting on in-kind donation gifts, reconciling 
          donations with accounting systems, and hours spent writing thank you letters for donations.">
          Help
        </button>
      </div>
      <div className="question-divider">
        <span />
      </div>
      <div className="range-slider">
        <input type="range" min={1} max={8} defaultValue={0} className="slider" id="myRange" />
      </div>
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