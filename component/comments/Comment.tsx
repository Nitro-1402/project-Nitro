import CommentForm from "./CommentForm";
import styles from '@/styles/comment.module.css'
import CustomImage from '@/ui/CustomImage'
// import Like from '/Like'



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
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
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
            {/* <Like/> */}

            <CustomImage src="/info-page-image/like.png" style={{width:'30px',margin:'10px'}} alt='avatar'/>
            <p>1</p>
            <CustomImage src="/info-page-image/dislike.png" style={{width:'30px',margin:'10px'}} alt='avatar'/>
            <p>2</p>
          </div>
        </div>
        {!isEditing && <div className={styles.commentText}>{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="بروزرسانی"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text:any) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className={styles.commentActions}>
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
            submitLabel="Reply"
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
