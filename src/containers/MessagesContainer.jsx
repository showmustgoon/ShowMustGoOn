import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Messages from '../components/Messages';
import * as messagesActions from '../actions/messages';




class messagesContainer extends Component {

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
 
        <Messages { ...this.props }/>

      </div>
    );
  } 
}

function mapStateToProps(state) {
  const idInfo = state.router.params.id;
  const auth=state.auth;
  const idUser=state.auth.id;
  const messages= state.messages || {};
  return {messages, auth, idInfo};
}


export default connect(
  mapStateToProps,
  messagesActions
)(messagesContainer);

messagesContainer.propTypes = {
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired,
};