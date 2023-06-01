import CommentForm from "./CommentForm";
import styles from '@/styles/comment.module.css'
import CustomImage from '@/ui/CustomImage'
import React ,{useState} from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Like from "../like/like";
import Dislike from "../like/dislike";


const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}:{comment?:any,replies?:any,setActiveComment?:any,activeComment?:any,updateComment?:any,deleteComment?:any,addComment?:any,parentId?:any,currentUserId?:any}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.created_at) > fiveMinutes;
  const canDelete =
    currentUserId === comment.profile && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.profile && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.created_at).toLocaleDateString();


  return (
    <div key={comment.id} className={styles.comment}>
  
      <div className={styles.commentImageContainer}>
        <CustomImage src="/info-page-image/user-icon.png" style={{width:'30px',margin:'10px'}} alt='avatar'/>
        
      </div>
      <div className={styles.commentRightPart}>
        <div className={styles.commentContent} style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <div className={styles.commentAuthor}>{comment.username}</div>
          <div>{createdAt}</div>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <div>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"center",}}>
          {/* <Like/>
          <Dislike/> */}
          </div>
          </div>
          </div>
        </div>
        {!isEditing && <div className={styles.commentText} style={{direction:'rtl' , textAlign:'right'}}>{comment.message}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="بروزرسانی"
            hasCancelButton
            initialText={comment.message}
            handleSubmit={(text:any) => updateComment(text, comment)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className={styles.commentActions} style={{direction:'rtl' , textAlign:'right'}}>
          {canReply && (
            <div
              className={styles.commentAction}
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              پاسخ
            </div>
          )}
          {canEdit && (
            <div
              className={styles.commentAction}
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              تصحیح
            </div>
          )}
          {canDelete && (
            <div
              className={styles.commentAction}
              onClick={() => deleteComment(comment.id)}
            >
              پاک کردن
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="پاسخ"
            handleSubmit={(text:any) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className={styles.replies}>
            {replies.map((reply:any) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

};

export default Comment;
