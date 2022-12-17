import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentList: []}

  getCommentDetails = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  getName = event => {
    this.setState({name: event.target.value})
    console.log(event.target.value)
  }

  getComment = event => {
    this.setState({comment: event.target.value})
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="comment-text-container">
            <h1 className="main-heading">Comments</h1>
            <p className="main-description">
              Say Something about 4.0 Technologies
            </p>
            <form className="form-container" onSubmit={this.getCommentDetails}>
              <input
                type="text"
                className="input-container"
                placeholder="Your Name"
                onChange={this.getName}
              />
              <textarea
                cols="28"
                rows="7"
                className="comment-text"
                placeholder="Your Comment"
                onChange={this.getComment}
              />
              <button type="submit" className="submit-btn">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comment-img"
            alt="comments"
          />
        </div>
        <div className="comments-container">
          <p className="comments-count">
            <span className="count">1</span> Comments
            <ul className="comment-list-container">{}</ul>
          </p>
        </div>
      </div>
    )
  }
}

export default Comments
