import React from "react";
import { Modal } from "@mui/material";
import styles from "@/styles/AddPostModal.module.css";
import axios from "axios";
import Select from "react-select";
// import AiTwotoneStar from "react-icons/ai"

const customStyles = {
  container: (baseStyles: any) => ({
    backgroundColor: "black",
    ...baseStyles,
  }),

  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    borderColor: state.isFocused ? "#0c1210" : "#faa500",
    backgroundColor: "black",
    color: "white",
  }),
  menuList: (baseStyles: any) => ({
    ...baseStyles,
    backgroundColor: "black",
    color: "#faa500",
  }),
  option: (baseStyles: any, state: any) => ({
    ":hover": { backgroundColor: "#faa500", color: "black" },
    ...baseStyles,
    backgroundColor: "black",
    color: "#faa500",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#faa500",
  }),
};

const AddPostModal = ({ open, setOpen }: { open: any; setOpen: any }) => {
  const [postContent, setPostContent] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState("freepost");

  const options = [
    { value: "premiumpost", label: "پست پرداختی" },
    { value: "freepost", label: "پست رایگان" },
  ];

  const handleOptionChange = (selected: any) => {
    setSelectedOption(selected.value);
  };
  const addPostFormHandler = (e: any) => {
    e.preventDefault();
    console.log("add post form handler");
    const id = localStorage.getItem("id");
    console.log("id", id);
    let sendingData = {};

    if (selectedOption === "premiumpost") {
      sendingData = {
        body: postContent,
      };
    } else if (selectedOption === "freepost") {
      sendingData = {
        body: postContent,
        profile: id,
      };
    }

    console.log("sending", sendingData);
    console.log("token", localStorage.getItem("accessToken"));
    const url =
      selectedOption === "premiumpost"
        ? "http://nitroback.pythonanywhere.com/members/profiles/" +
          id +
          "/premiumPosts/"
        : "http://nitroback.pythonanywhere.com/members/posts/";
    axios
      .post(url, sendingData, {
        headers: {
          Authorization: `JWT ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      }).catch(e=>{})
    setOpen(false);
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
            <h3 className={styles.h3}>اضافه کردن پست</h3>
            <div className={styles.select}>
              <Select
                options={options}
                defaultValue={options[1]}
                value={options.find(
                  (option) => option.value === selectedOption
                )}
                onChange={handleOptionChange}
                styles={customStyles}
              />
            </div>
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
              <div>
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className={styles.modalBodyContent}
                  placeholder="متن پست خود را وارد کنید..."
                ></textarea>
              </div>
              <div className={styles.modalBodyFooter}>
                {/* <div className={styles.modalBodyFooterLeft}>
                <button>افزودن عکس</button>
                <button>افزودن ویدیو</button>
              </div> */}
                <div className={styles.modalBodyFooterRight}>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      setPostContent("");
                    }}
                    style={{marginRight: "10px"}}
                  >
                    لغو
                  </button>
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
