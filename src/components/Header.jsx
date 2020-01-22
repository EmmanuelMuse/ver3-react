import React from 'react';
import logo from '../imgs/TBlogo.png';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
class Header extends React.Component {
  
  render() {
    console.log(this.props);
    return (
      <header className="main-header">
          <div className="wrap">
              <Link to="/">
                  <img className="logo" src={logo} alt="TechBridge Logo"/>
              </Link>
              <div className="page-info">
                  <h1 className="page-header">{this.props.page}</h1>
                  <i class="fas fa-angle-double-right"></i>
                  <h1 className="project-Identifer">{this.props.info.projectType}</h1>
              </div>
              
          </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return{info: state.userInfo}
}

export default connect(mapStateToProps)(Header)