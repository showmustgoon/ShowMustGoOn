import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import image from '../img/logo.png';



export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>
        <nav className="navbar navbar-inv">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/preferences">Preferences</Link></li>
          
            </ul>
        </nav>
      <img className="logo"  src={image}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node
};