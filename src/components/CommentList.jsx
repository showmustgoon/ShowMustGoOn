import React, { Component, PropTypes } from 'react';

export default class CommentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  handleAddButtonClick() {
    const { idBand, addComments, auth } = this.props;
    const node = this.refs.comment;
    const comment =  node.value.trim();
    addComments(idBand, comment);
    node.value = '';
    if (!auth.authenticated) {alert('You need to log in to comment')};
  }
  
  handleRemoveComment(idComment){
    this.props.removeComment(idComment);
  } 

  handleEditClick(idComment) {

    this.setState({
      editing: true,
      idComment: idComment
    });
   
  }

  handleOkClick() {
    const { editComment } = this.props;
    const node = this.refs.com;
    const title= node.value.trim();
    this.setState({
      editing: false
    });
     this.props.editComment(title, this.state.idComment);


    
  }


  render() {
    const { comments, auth } = this.props;

    return (
      <div>
          <h3>Comments</h3>
          {
            comments.map( (comment, index) => <p key={index}>{comment.title}
            <button className={comment.user===auth.id?'btn btn-danger pull-right':'hidden'} type="button" onClick={ () => this.handleRemoveComment(comment.id)}><span className="glyphicon glyphicon-trash" /></button>
            <button className={comment.user===auth.id?'btn btn-info pull-right':'hidden'} type="button" onClick={ () => this.handleEditClick(comment.id) }><span className="glyphicon glyphicon-edit"/></button>
            <br/><br/></p> )
          }
          <div className={`input-group ${this.state.editing ? '' : 'hidden'}`}>
            <input className="form-control" ref="com"/>
            <span className="input-group-btn">
              <button className="btn btn-success" type="button" onClick={(e) => this.handleOkClick(e)}><span className="glyphicon glyphicon-ok" /></button>
            </span>
          </div>
          <div className={this.state.editing? 'hidden' : 'input-group'}>
            <input  type="text"  className="form-control" placeholder="Add Comments" ref="comment" />
            <span className="input-group-btn">
              <button className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-plus" /></button>
            </span>
          </div>
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array,
  addComment: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  band: PropTypes.object.isRequired
};

CommentList.defaultProps = { 
  comments: []
};