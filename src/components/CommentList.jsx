import React, { Component, PropTypes } from 'react';

export default class CommentList extends Component {

  constructor(props) {
    super(props);
  }

  handleAddButtonClick() {
    const { band, onAddComment } = this.props;
    const node = this.refs.comment;
    const comment =  node.value.trim();
    onAddComment(band.id, comment);
    node.value = '';
  }
  

  render() {
    const { comments } = this.props;
    

    return (
      <div className="container">
          <h3>Comments</h3>
          <ul className="col-lg-12 hero">
            {
              comments.map( (comment, index) => <li key={index}>{comment.comment} {comment.date}</li> )
            }
         </ul>
         <div className="input-group">
            <textarea type="text" className="form-control" placeholder="Add Comments" ref="comment"/>
          </div>
          <div>
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
  onAddComment: PropTypes.func.isRequired
};

CommentList.defaultProps = { 
  comments: []
};