import React from 'react';
import logo from '../imgs/TBlogo.png';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
          <div className="wrap">
              <Link to="/">
                  <img className="logo" src={logo} alt="TechBridge Logo"/>
              </Link>
              <h1 className="page-header">{this.props.page}</h1>
          </div>
      </header>
    );
  }
}
export default Header;