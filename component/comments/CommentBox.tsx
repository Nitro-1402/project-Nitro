import React , {useEffect} from "react";
import ReactDOM from "react-dom";
import CommentAp from "@/component/comments/CommentApp";
import styles from '@/styles/comment.module.css'





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
