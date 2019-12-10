import React from 'react';
import Header from '../Header';
import {connect} from 'react-redux';

/////result icons
//Hours Saved
import HS from '../../imgs/HS.png';
//Dollars Saved
import DS from '../../imgs/DS.png';
//Cost Per Dollar Raised
import CPDR from '../../imgs/CPDR.png';
//Clients Served
import CS from '../../imgs/CS.png';
// import { display } from '@material-ui/system';


class Results extends React.Component{
    render(){
      console.log(this.props)
      const {display} = this.props;
        return(
            <>
                <Header page="Results"/>
             <div>
  <section className="form">
    <div className="calc-row">
      <div className="calc">
        <img className="ROI-pic" src={HS} alt="Hours Saved" />
        <h2 className="result">{display.hoursSaved}</h2>
        <h2 href="#" className="ROI-type">Hours<br />Saved</h2>
      </div>
      <div className="calc">
        <img className="ROI-pic" src={DS} alt="Dollars Saved" />
        <h2 className="result">{display.dollarsSaved}</h2>
        <h2 href="#" className="ROI-type">Dollars<br />Saved</h2>
      </div>
      <div className="calc">
        <img className="ROI-pic" src={CPDR} alt="Cost per Dollar" />
        <h2 className="result">{display.cpdr}</h2>
        <h2 href="#" className="ROI-type">Cost per Dollar<br />Raised</h2>
      </div>
      <div className="calc">
        <img className="ROI-pic" src={CS} alt="Clients Served" />
        <h2 className="result">{display.clientsServed}</h2>
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
const mapStateToProps = (state) =>{
  return{
    display: state.resultValues.value
  }
}

export default connect(mapStateToProps)(Results);