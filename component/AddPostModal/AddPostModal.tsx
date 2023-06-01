import React from "react";
import { Modal } from "@mui/material";
import styles from "@/styles/AddPostModal.module.css";
import axios from "axios";

const AddPostModal = ({ open, setOpen }:{open:any,setOpen:any}) => {
  const [postContent, setPostContent] = React.useState("");
  const addPostFormHandler = (e:any) => {
    e.preventDefault();
    console.log("add post form handler");
    const id = localStorage.getItem("id");
    console.log("id",id);
    const sendingData = {
      body: postContent,
      profile: id,
    };
    console.log("sending",sendingData)
    console.log("token", localStorage.getItem("accessToken"))
    axios.post("http://nitroback.pythonanywhere.com/members/posts/", sendingData,{headers: {Authorization: `JWT ${localStorage.getItem("accessToken")}`}})
    .then((res) => {console.log(res.data)})
    // axios
    //   .post("asdf;lkj", body, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <div className={styles.bg}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h3>اضافه کردن پست</h3>
        </div>
        <div className={styles.modalBody}>
          {/* <div className={styles.modalBodyHeader}>
            <div className={styles.modalBodyHeaderLeft}>
              <img src="/image/user.png" alt="user" />
              <span>عارف علیجان نژاد</span>
            </div>
            <div className={styles.modalBodyHeaderRight}>
              <button>انتشار</button>
            </div>
          </div> */}
          <form onSubmit={addPostFormHandler}>
            <div >
              <textarea value={postContent}                 onChange={(e) => setPostContent(e.target.value)}
 className={styles.modalBodyContent} placeholder="متن پست خود را وارد کنید..."></textarea>
            </div>
            <div className={styles.modalBodyFooter}>
              {/* <div className={styles.modalBodyFooterLeft}>
                <button>افزودن عکس</button>
                <button>افزودن ویدیو</button>
              </div> */}
              <div className={styles.modalBodyFooterRight}>
                <button type="submit">انتشار</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </Modal>
  );
};

export default AddPostModal;
