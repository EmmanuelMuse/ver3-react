import React from 'react';
import Header from '../Header';
import { Link} from 'react-router-dom'
import HoursSaved from './hoursSaved';

class Info extends React.Component{
render(){
return(
  <> 
<Header page="Information Page"/>
<div className="bg">
<section className="form">
  <form className="form-box">
    <div className="form-group">
      <label htmlFor="tbContactName" className="info-label">Contact Name</label>
      <input type="text" className="form-control" id="tbContactName" />
    </div>
    <div className="form-group">
      <label htmlFor="orgName" className="info-label">Org. Name</label>
      <input type="text" className="form-control" id="orgName" />
    </div>
    <div className="form-group">
      <label htmlFor="projectNum" className="info-label">Project Number</label>
      <input type="number" className="form-control" id="projectNum" />
    </div>
    <div className="form-group">
      <label htmlFor="email" className="info-label">Org. Email Address</label>
      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
      <label htmlFor="tel" className="info-label">Phone Number</label>
      <input type="tel" className="form-control" placeholder="XXX-XXX-XXXX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="telNum" />
    </div>
    <div className="nav-button">
      <Link exact to="/HoursSaved">
        <button type="button" onclick="userInfo()" className="btn btn-primary">Begin</button>
      </Link>
    </div>
  </form>
</section>
</div>
</>

);
}
}

export default Info;