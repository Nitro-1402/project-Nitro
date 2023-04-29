import { useState } from "react";
import styles from '@/styles/comment.module.css'


const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}:
{submitLabel?:any,handleCancel?:any,initialText?:string,hasCancelButton?:any,handleSubmit?:any}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event:any) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form style={{display:'flex',flexDirection:'row',alighnItems:'center', margin:'0 20px'}} onSubmit={onSubmit}>
      <textarea
        className={styles.commentFormTextarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.commentFormButton} disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className={styles.commentFormButton}
          onClick={handleCancel}
        >
          لغو
        </button>
      )}
    </form>
  );
};

export default CommentForm;
