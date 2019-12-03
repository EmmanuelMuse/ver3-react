import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';


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
        <input type="range" min={1} max={8} defaultValue={0} className="slider" id="myRange" />
      </div>
      <div className="question-divider">
        <span />    
      </div>  
      {/* Question 2 */}
      <div className="question-box">
        <h1 className="question">On average, what is the value of grant revenue won by your organization?</h1>
      </div>
      <div className="range-slider">
        <input type="range" min={1} max={8} defaultValue={0} className="slider" id="myRange" />
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
        <input type="range" min={1} max={8} defaultValue={0} className="slider" id="myRange" />
      </div>
      <div className="question-divider">
        <span />    
      </div>  
      {/* CDR 1 */}
      <div className="question-box">
        <h1 className="question">Annual gross fundraising expenses.</h1>
      </div>
      <div className="range-slider">
        <input type="range" min={1} max={8} defaultValue={0} className="slider" id="myRange" />
      </div>
      <div className="question-divider">
        <span />    
      </div>  
      {/* CDR 2 */}
      <div className="question-box">
        <h1 className="question">Annual gross fundraising revenue.</h1>
      </div>
      <div className="range-slider">
        <input type="range" min={1} max={8} defaultValue={0} className="slider" id="myRange" />
      </div>
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