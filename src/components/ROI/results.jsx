import React from 'react';
import Header from '../Header';

/////result icons
//Hours Saved
import HS from '../../imgs/HS.png';
//Dollars Saved
import DS from '../../imgs/DS.png';
//Cost Per Dollar Raised
import CPDR from '../../imgs/CPDR.png';
//Clients Served
import CS from '../../imgs/CS.png';


class Results extends React.Component{
    render(){
        return(
            <>
                <Header page="Results"/>
             <div>
  <section className="form">
    <div className="calc-row">
      <div className="calc">
        <img className="ROI-pic" src={HS} alt="Hours Saved" />
        <h2 href="#" className="ROI-type">Hours<br />Saved</h2>
      </div>
      <div className="calc">
        <img className="ROI-pic" src={DS} alt="Dollars Saved" />
        <h2 href="#" className="ROI-type">Dollars<br />Saved</h2>
      </div>
      <div className="calc">
        <img className="ROI-pic" src={CPDR} alt="Cost per Dollar" />
        <h2 href="#" className="ROI-type">Cost per Dollar<br />Raised</h2>
      </div>
      <div className="calc">
        <img className="ROI-pic" src={CS} alt="Clients Served" />
        <h2 href="#" className="ROI-type">Clients<br />Served</h2>
      </div>
    </div>
  </section>
  <div className="progress" style={{width: '55%'}}>
    <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}><label>Done!</label></div>
  </div>
</div>

            </>
        );
    }

}

export default Results;