import React, { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "@mui/material";

import styles from "../styles/postcontent.module.css";
import Header from "@/component/header";
import Footer from "@/component/Footer";
import { BsPencilSquare } from "react-icons/bs";

interface User {
  first_name: string;
  last_name: string;
  username: string;
  photo: string;
}
const postcontent = () => {
  const user: User = {first_name: "عارف",last_name: "علیجان نژاد",username: "aref_alj",photo: "/image/user.png",};
  const [postImg, setPostImg] = useState("");
  const [postLikes, setPostLiks] = useState(0 );
  const [postContent, setPostContent] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  return (
    <>
      <Header />
      <div className={styles.postContainer}>
        <div className={styles.postHeader}>
          <img
            className={styles.posterUserImg}
            src={user.photo}
            alt={user.username}
          />
          <div className={styles.postedUserName}>
            <span>
              {user.first_name} {user.last_name}
            </span>
          </div>
          <div className={styles.postedUserUsername}>
            <Link href="/myprofile">@{user.username}</Link>
          </div>
          {isEdit && <div className={styles.Edit}>
            <BsPencilSquare style={{marginTop:"12px",marginRight:"380px"}} />
            </div>}
        </div>
        <div className={styles.postContents}>
          {/* <h5>{postContent}</h5> */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            quos earum libero veritatis maiores officiis sapiente nam, ut omnis
            repellat eveniet labore ullam. Accusantium recusandae atque libero
            quos aspernatur.
          </p>
        </div>
        <div className={styles.postImage}>
          {/* <p>{postImg}</p> */}
          <img src={postImg} alt="" />
        </div>
        <div className={styles.postDetails}>
          <button
            
          >
            <MdOutlineFavoriteBorder
              className={styles.postLikeIcon}
              // style={{ color: "#faa500", marginLeft: "20px", marginTop: "2px"}}
            />
            {postLikes}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default postcontent;
