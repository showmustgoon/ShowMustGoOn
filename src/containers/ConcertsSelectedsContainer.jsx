import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertsSelected from '../components/ConcertsSelected';
import * as selectedsActions from '../actions/selecteds';




class ConcertsSelectedsContainer extends Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {
    this.props.registerListeners();
  }
  componentWillUnmount() {
    this.props.unregisterListeners();
  }

  render() {
    return (
      <div>
 
        <ConcertsSelected { ...this.props }/>

      </div>
    );
  } 
}

function mapStateToProps(state) {
  debugger;
  const idUser=state.auth.id;
  const selecteds= state.info.filter(i => {i.users[idUser].assist === true || {}});

  return {selecteds};
}


export default connect(
  mapStateToProps,
  selectedsActions
)(ConcertsSelectedsContainer);