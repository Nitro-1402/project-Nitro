import Comments from "./Comments";
import styles from '@/styles/comment.module.css'


const CommentAp = () => {
  return (
    <div style={{backgroundColor:"black"}}>
      <Comments
        // commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default CommentAp;
