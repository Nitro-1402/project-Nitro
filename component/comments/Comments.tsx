import { useState, useEffect, use } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import styles from '@/styles/comment.module.css'

import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../commentApi";
import axios from "axios";
import { URL_API } from "@/constant/urlapi";

const Comments = ({ commentsUrl, currentUserId}:{commentsUrl?:any,currentUserId?:any }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [comment,setComment]=useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId:any) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text:any, parentId:any) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
    axios.post(`${URL_API}comments/comments/`,{
      message: text,
      parent_comment: parentId,
      profile: 7,
      is_okay: true,
      content_type: 11,
      object_id: 7
    },{headers:{
      'Authorization':"2222222"
    }}).then((comment) => {
      setBackendComments([text, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text:any, comment:any) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === comment.id) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
    axios.put(`${URL_API}comments/comments/${comment.id}/`,{
        message: text,
        parent_comment: comment.parent_comment,
        profile:7,
        is_okay: true,
        content_type: 0,
        object_id: 7
    },{headers:{
      'Authorization':"222"
    }}).then((comment) => {
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });

  };
  const deleteComment = (commentId:any) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data:any) => {
      setBackendComments(data);
    });
  }, []);

  useEffect(()=>{
    axios.get(`${URL_API}comments/comments/${7}/`).then((data)=> setComment([data?.data]))
  },[])

  return (
    <div className={styles.comments} style={{margin:'30px 0'}}>
      <div className={styles.commentFormTitle}>نظر دهید</div>
      <CommentForm submitLabel="ارسال" handleSubmit={addComment} />
      <div className={styles.commentsContainer}>
        {comment.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
