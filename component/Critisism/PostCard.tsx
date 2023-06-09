import React from "react";
import styles from "@/styles/PostCard.module.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "@mui/material";
import { useRouter } from "next/router";
import { BsStar } from "react-icons/bs";

interface User {
  first_name: string;
  last_name: string;
  username: string;
  photo: string;
  id: number;
}

interface ItemProps {
  user?: User;
  postImg?: string;
  isPremium?: boolean;
  postContent?: string;
  postLikes?: number;
}

const PostCard: React.FC<ItemProps> = ({
  user = {
    first_name: "عارف",
    last_name: "علیجان نژاد",
    username: "aref_alj",
    photo: "/image/user.png",
    id : 1,
  },
  postImg = "/image/test.jpeg",
  isPremium = false,
  postContent = "",
  postLikes = 0,
}) => {
  const router=useRouter()
  // const navigate = useNavigate();

  // const postContentHandler = () => {
  //   navigate("/postcontent");
  // };

  return (
    <div className={styles.postContainer}>
      { isPremium && <BsStar size={20} color="yellow" style={{left:10,top:10,position:'absolute'}}/>}
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
          <p style={{marginTop:"15px",cursor:"pointer",color:"#Faa500"}} onClick={()=>router.push('/profile/'+user.id)}>@{user.username}</p>
        </div>
      </div>
      <div
        className={styles.postContents}
        // onClick={() => {
        //   location.href = "/postcontent";
        // }}
      >
        <p>{postContent}</p>
        {/* <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis
          quos earum libero veritatis maiores officiis sapiente nam, ut omnis
          repellat eveniet labore ullam. Accusantium recusandae atque libero
          quos aspernatur.
        </p> */}
      </div>
      {/* <div className={styles.postImage}>
         <p>{postImg}</p> 
        <img src={postImg} alt="" />
      </div> */}
      {/* <div className={styles.postDetails}>
        <button>
          <MdOutlineFavoriteBorder
          //  style={{color:"#faa500",marginLeft:"20px",marginTop:"2px"}}
          />
          {postLikes}
        </button>
      </div> */}
    </div>
  );
};

export default PostCard;
