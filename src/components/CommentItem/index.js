import "./index.css"
import { className } from "postcss-selector-parser"


const CommentItems = props =>{
    return{
        
        <div className="comment-container">
            <div className="profile-container">
                <p className="profile-logo">r</p>
                <h1 className="profile-name">Richard Branson</h1>
                <p className="comment-time">2 minutes ago</p>
            </div>
            <p className="comment-text">djsfebfbfdfdbdfsfd kndc</p>
            <div className="like-container">
            <div className="like-button-container">
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png" className="like-img"/>
                <button type="button" className="button">Like</button>
            </div>
            <button className="delete-btn" type="button"><img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" className="delete-img" alt="delete" /></button>
            </div>

        </div>

       
    }
}