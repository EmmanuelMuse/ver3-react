//React and Redux stuff
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/inputActions';

//imported components
import Header from '../Header';
import { Link} from 'react-router-dom';



class Info extends React.Component{
render(){
  // console.log(this.props);
  // console.log(actions);
 
return(
  <> 
<Header page="Information Page"/>
{/* <h1>{this.props.ROI.email}</h1> */}
<div className="bg">
<section className="form">
  <form className="form-box">
    <div className="form-group">
      <label htmlFor="tbContactName" className="info-label">Contact Name</label>
      <input  onChange={event => this.props.updateContact(event.target.value)} type="text" className="form-control" id="tbContactName" />
    </div>
    <div className="form-group">
      <label htmlFor="orgName" className="info-label">Organization Name</label>
      <input onChange={event => this.props.updateOrgName(event.target.value)} type="text" className="form-control" id="orgName" />
    </div>
    <div className="form-group">
      {/* change to select type */}
      <label htmlFor="projectNum" className="info-label">Project Type</label>
      <input onChange={event => this.props.updateProjType(event.target.value)} type="text" className="form-control" id="projectNum" />
    </div>
    <div className="form-group">
      <label htmlFor="email" className="info-label">Email Address</label>
      <input onChange={event => this.props.updateEmail(event.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
      <label htmlFor="email" className="info-label">Address</label>
      <input onChange={event => this.props.updateAddress(event.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
      <label htmlFor="tel" className="info-label">Phone Number</label>
      <input type="tel" onChange={event => this.props.updatePhone(event.target.value)} className="form-control" placeholder="XXX-XXX-XXXX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="telNum" />
    </div>
    <div className="nav-button">
      <Link exact to="/HoursSaved">
        <button type="button" className="btn btn-primary">Begin</button>
      </Link>
    </div>
  </form>
</section>
</div>
</>

);
}
}


const mapStateToProps =(state) =>{
  return{
    ROI: state.userInfo.ROI
  }
}

//parameter is the dispatch method
//returns the functions that will be map to the props of the component
const mapDispatchToProps = (dispatch) => {
    return{
      // function
      updateEmail: (input) => dispatch(actions.updateEmail(input)),
      updateOrgName: (input) => dispatch(actions.updateOrgName(input)),
      updateContact: (input) => dispatch(actions.updateContact(input)),
      updateProjType: (input) => dispatch(actions.updateProjType(input)),
      updatePhone: (input) => dispatch(actions.updatePhone(input)),
      updateAddress: (input) => dispatch(actions.updateAddress(input))
      // actions: bindActionCreators( actions, dispatch)
    }
}

const InfoContainer =  connect(mapStateToProps, mapDispatchToProps)(Info);
//connects component to redux store
export default InfoContainer;