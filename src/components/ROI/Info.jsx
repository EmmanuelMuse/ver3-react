//React and Redux stuff
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/inputActions';

//imported components
import Header from '../Header';
import { Link } from 'react-router-dom';
import { TextField, MenuItem, Select, InputLabel} from '@material-ui/core';



class Info extends React.Component{

render(){

 console.log(this.props)
return(
    <> 
        <Header page="Information Page"/>
            <div className="bg">
                <section className="form">
                    <form className="form-box">

                        <div className="info-box">
                            <TextField 
                                label="Organization Name" 
                                variant="filled"
                                onChange={event => this.props.updateOrgName(event.target.value)} 
                                type="text"
                            />
                        </div>
                       


                        <div className="info-box">
                            <TextField
                                label="Organization Address"
                                variant="filled"
                                onChange={event => this.props.updateAddress(event.target.value)}
                                type="text"                        
                            />
                        </div>
                        
                        

                        {/* change to select */}
                        <div className="info-box">
                            <InputLabel style={{margin: ".5rem"}} >Project Type</InputLabel>
                            <Select
                                onChange = {event=> this.props.updateProjType(event.target.value) }
                            >
                                <MenuItem value={"Donor Management System"}>Donor Management System</MenuItem>
                                <MenuItem value={"Data Strategy"}>Data Strategy</MenuItem>
                                <MenuItem value={"Client Management System"}>Client Management System</MenuItem>
                                <MenuItem value={"Grants Mangement System"}>Grant Management System (for foundations)</MenuItem>
                                <MenuItem value={"Email Management"}>Email Management</MenuItem>
                                <MenuItem value={"Document Collaboration and Storage"}>Document Collaboration Storage</MenuItem>
                            </Select>
                        </div>

                        <div className="info-box">
                            <TextField
                                label="Contact Name"
                                variant='filled'
                                onChange={event => this.props.updateContact(event.target.value)}
                                type="text"
                            />
                        </div>
                        
                        
                        <div className="info-box">
                            <TextField
                                label="Contact Email"
                                variant='filled'
                                onChange={event => this.props.updateEmail(event.target.value)}
                                type="email"
                            />
                        </div>
                        

                        <div className="info-box">
                            <TextField
                                label="Contact Phone Number"
                                variant="filled"
                                onChange={event => this.props.updatePhone(event.target.value)}
                                type="tel"
                            />
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