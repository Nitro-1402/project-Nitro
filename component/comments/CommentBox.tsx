import React , {useEffect} from "react";
import ReactDOM from "react-dom";
import styles from '@/styles/comment.module.css'
import Comments from "./Comments";


const CommentAp = () => {
  return (
    <div style={{backgroundColor:"black"}}>
      <Comments
        currentUserId="1"
      />
    </div>
  );
};



const CommentBox = () => {
  return (
    <div>
      <React.StrictMode>
        <CommentAp />
      </React.StrictMode>
    </div>
  )
}

export default CommentBox
