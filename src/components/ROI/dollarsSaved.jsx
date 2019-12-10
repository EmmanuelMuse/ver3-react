import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { Slider, TextField } from '@material-ui/core';


class DollarsSaved extends React.Component{
    render(){
        return(
            <>
            <Header page="Dollars Saved"/>
  <div className="bg">
  <section className="form">
    <form className="form-box">
      {/* Question 1 */}
      <div className="question-box">
        <h1 className="question">On average, how much revenue is generated from donations annually?</h1>
      </div>
      <div className="range-slider">
        <Slider valueLabelDisplay='auto' step={100} min={0} max={100000}/>    
      </div>
      <div className="question-divider">
        <span />    
      </div>  
      {/* Question 2 */}
      <div className="question-box">
        <h1 className="question">On average, what is the value of grant revenue won by your organization?</h1>
      </div>
      <div className="range-slider">
        <Slider valueLabelDisplay='auto' step={100} min={0} max={100000}/>    
      </div>
      <div className="question-divider">
        <span />    
      </div>  
      {/* Question 3 */}
      <div className="question-box">
        <h1 className="question">On average, how much money is spent on fundraising management systems annually
          (including licensing, hosting, and support fees)?</h1>
      </div>
      <div className="range-slider">
        <Slider valueLabelDisplay='auto' step={100} min={0} max={100000}/>    
      </div>
      <div className="question-divider">
        <span />    
      </div>  
      {/* CDR 1 */}
      <div className="question-box">
        <h1 className="question">Annual gross fundraising expenses.</h1>
      </div>
      <TextField
          id="standard-number"
          label="Expenses"
          type="number"
         
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
      <div className="question-divider">
        <span />    
      </div>  
      {/* CDR 2 */}
      <div className="question-box">
        <h1 className="question">Annual gross fundraising revenue.</h1>
      </div>
      <TextField
          id="standard-number"
          label="Revenue"
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
        <Link to="/HoursSaved">
          <button type="button" onclick="userInfo()" className="btn btn-primary">Back</button>
        </Link>
        <Link to="/ClientsServed">
          <button type="button" onclick="userInfo()" className="btn btn-primary">Next</button>
        </Link>
      </div>
    </form>
  </section>
  <div className="progress" style={{width: '55%'}}>
    <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}><label>50%</label></div>
  </div>
</div>

            </>
        );
    }
}

export default DollarsSaved;