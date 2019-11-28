import React from 'react';
import logo from '../imgs/TBlogo.png';

class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
        <div className="wrap">
          <img className="logo" src={logo} alt="TechBridge Logo"/>
          <h1 className="page-header">{this.props.page}</h1>
        </div>
      </header>
    );
  }
}
export default Header;