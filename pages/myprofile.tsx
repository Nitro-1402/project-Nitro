import Item from "@/component/FilmItem";
import CustomBtn from "@/ui/CustomBtn";
import CustomImage from "@/ui/CustomImage";
import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/myprofile.module.css";
import Navbar from "@/component/navbar/Navbar";
import Followers from "@/component/follower/Followers";
import Comment from "@/component/showCommentProfile";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from "@/component/Footer";
import Header from "@/component/header";
import { MdCancel } from "react-icons/Md";
import { BsPersonFillCheck } from "react-icons/bs"
import { IconButton, TextField } from "@mui/material";
// import Comment from "@/component/comments/comments";
import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  dividerClasses,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import Follower from "@/component/Follower/Follwers";
import { pink } from "@mui/material/colors";
import { get } from "http";
import Input from "@/ui/Input";
import AutoExpandingInput from "@/component/AutoExpandingInput";
const UseStyles = makeStyles((theme) => ({
  dialog: {
    display: "flex",
    flexDirection: "row",
    border: "1px solid #FFA500",
    justifyContent: "center",
    margin: "5px",
    width: "300px",
    borderRadius: "8%",
    backgroundColor: "#faa500",
  },
  main: {
    backdropFilter: "blur(5px)",
  },
  dial: {
    // backgroundColor: "#fff100",
    backgroundColor: "#0c1012",
  },
  bg: {
    backgroundColor: "#fff100",
  },
  // dl: {
  //   display: "flex",
  //   flexDirection: "row",
  //   border: "1px solid #FFA500",
  //   justifyContent: "center",
  //   margin: "5px",
  //   width: "20vw",
  //   borderRadius: "8%",
  //   backgroundColor: "#faa500",
  // },
}));

const userInfo = {
  FirstName: "",
  LasdName: "",
  Profilepic: "",
  Email: "",
};

function Head() {
  const [isLoading, setIsLoading] = useState(false);
  const classes = UseStyles();
  const [Open, SetOpen] = useState(false);
  const [Open2, SetOpen2] = useState(false);
  // const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [userProfileImg, setUserProfileImg] = useState("");
  const [editProfilestatus, setEditProfileStatus] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const deleteFunc=()=>{
    setPreview('../image/user.png')
  };
  const ImageUpload = ({image="../image/user.png"}:{image?:string}) => {
    const [preview, setPreview] = useState();

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
      if (!selectedFile) {
        setPreview(undefined);
        return;
      }
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
      
      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);
    
    
    const onSelectFile = (e) => {
      if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(e.target.files[0]);
        return;
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0]);
    };
    // const deleteFunc=()=>{
    //   setPreview('../image/user.png')
    // };
    return (
      // <div>
      //     <input type='file' onChange={onSelectFile} />
      // </div>
      <div className={styles.ImgPreview}>
        {/* <img
          className={styles.Prew}
          // src={preview == null ? "../image/user.png" : preview}
          src={preview == null ? image : preview}
        /> */}
        <img
            // onClick={onSelectFile}
            // className={styles.profileImg}
            style={{
              width: "12vw",
              height: "12vw",
              minHeight: "110px",
              minWidth: "110px",
              borderRadius: "50%",
              marginLeft: "30px",
              border:"2px solid #faa500",
            }}
            // src={user.Profilepic}
            src={preview == null ? image : preview}
            alt="test"/>
          <div className={styles.icon}>
        <IconButton
          style={{ color: "white", marginRight: "10px" }}
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" onChange={onSelectFile} />
          <PhotoCamera style={{color:"#faa500"}}/>
        </IconButton >
          <DeleteIcon className={styles.deleteicon} onClick={deleteFunc}/>
          </div>
      </div>
    );
  };
  const submitedit = ()=>{
    setEditProfileStatus(false)

 }
  // useEffect(async () => {
  //   setIsLoading(true);
  //   axios
  //     .get("http://localhost:1337/api/profiles")
  //     .then((res) => res.data.data[0].attributes)
  //     .then((data) => {
  //       console.log("the data: ", data);
  //       setUser(data);
  //     });
  //     // .catch(err => console.log(err))
  //     // .finally(() => {
  //     //   setIsLoading(false);
  //     // });
  // }, []);
  useEffect(() => {
    axios.get("http://localhost:1337/api/followerss").then((res) => {
      setFollowers(res.data.data);
      console.log("followers", res.data.data);
    });
    axios.get("http://localhost:1337/api/followings").then((res) => {
      setFollowing(res.data.data);
      console.log("followers", res.data.data);
    });
    const getUserInfo = async () => {
      try {
        const response = axios.get("http://localhost:1337/api/profiles");
        const data = (await response).data.data[0].attributes;
        // console.log("the data fetched: ", data);
        setUser(data);
        setUserProfileImg(data.Profilepic);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

  

  

  // useEffect(()=>{
  //   gwtUserInfo();
  // },[])
  //   console.log(users);
  //   const gwtUserInfo = async() =>{
  //   const res = await axios.get('https://nitroback.pythonanywhere.com/auth/users')
  //   try{
  //     setUsers(res.data)
  //     console.log(res);

  //   }
  //   catch(err){
  //     console.log(err);

  //   }
  // }

  return (
    <div style={{ position: "relative", marginTop: "120px" }}>
      {/* <CustomImage src='' style={{ width: "100vw", height: "12vw", minHeight: "100px"}} /> */}
      <div className={classes.bg}>
        <Dialog
          className={classes.main}
          open={Open}
          onClose={() => SetOpen(false)}
        >
          <div className={styles.dial}>
            <DialogTitle className={classes.dialog}>
              {" "}
              لیست دنبال کننده
            </DialogTitle>
            <DialogContentText className={classes.dl}>
              <DialogActions>
                {/* <button className={styles.buttm} onClick={() => SetOpen(false)}>
                  {" "}
                  بستن
                </button> */}
                <MdCancel
                  className={styles.cancelIcon}
                  onClick={() => SetOpen(false)}
                />
              </DialogActions>
            </DialogContentText>
          </div>
          {followers.map((list1) => (
            <Follower
              image={list1.attributes.Image}
              name={list1.attributes.Name}
            />
          ))}
        </Dialog>
        <Dialog
          className={classes.main}
          open={Open2}
          onClose={() => SetOpen2(false)}
        >
          <div className={styles.dial}>
            <DialogTitle className={classes.dialog}>
              {" "}
              لیست دنبال شونده
            </DialogTitle>
            <DialogContentText className={classes.dl}>
              <DialogActions>
                {/* <button
                  className={styles.buttm}
                  onClick={() => SetOpen2(false)}
                >
                  {" "}
                  بستن
                </button> */}
                <MdCancel
                  className={styles.cancelIcon}
                  onClick={() => SetOpen2(false)}
                />
              </DialogActions>
            </DialogContentText>
          </div>
          {following.map((list2) => (
            <Follower
              image={list2.attributes.image}
              name={list2.attributes.Name}
            />
          ))}
        </Dialog>
      </div>
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            marginRight: 10,
            marginBottom: 10,
          }}
        >
          {/* {console.log("the profile pic", user.Profilepic)}
          <CustomImage
            // src={"/image/test.jpeg" ? "/image/test.jpeg" : ""}
            // src={user.Profilepic ? user.Profilepic : ""}
            src={userProfileImg}
            style={{
              width: "12vw",
              height: "12vw",
              minHeight: "110px",
              minWidth: "110px",
              borderRadius: "50%",
            }}
          /> */}
          {editProfilestatus &&
          // <img
          //   // className={styles.profileImg}
          //   style={{
          //     width: "12vw",
          //     height: "12vw",
          //     minHeight: "110px",
          //     minWidth: "110px",
          //     borderRadius: "50%",
          //     marginRight: "100px",
          //   }}
          //   src={user.Profilepic}
          //   alt="test"/>
          <ImageUpload image={user.Profilepic}/>
          }
          {!editProfilestatus &&<img
            // className={styles.profileImg}
            style={{
              width: "12vw",
              height: "12vw",
              minHeight: "110px",
              minWidth: "110px",
              borderRadius: "50%",
              marginRight: "100px",
              border:"2px solid #faa500",
            }}
            src={user.Profilepic}
            alt="test"
          />}
          <div className={styles.data}>
            {!editProfilestatus && (
              <h1 className={styles.name}>
                {user.FirstName} {user.LastName}
              </h1>
            )}
            
            {!editProfilestatus && (
              <h3 className={styles.email}>{user.Email}</h3>
            )}
            {editProfilestatus && (
              // <h3 className={styles.email}>{user.Email}</h3>
              <div className={styles.input_div}>
                {/* <label className={styles.Input_label} >{user.FirstName}</label> */}
                {/* <input className={styles.Input_text2} defaultValue={user.LastName} type="text" /> */}
                {/* <label className={styles.Input_label}>{user.LastName}</label> */}
                {/* <input className={styles.Input_text} defaultValue={user.FirstName} type="text" /> */}
                {/* <AutoExpandingInput/>*/}
                <AutoExpandingInput style={{marginRight:'15px'}} input={user.LastName} />
                <AutoExpandingInput style={{}} input={user.FirstName} />
              </div>
            )}
            
            {editProfilestatus && (
              // <h3 className={styles.email}>{user.Email}</h3>
              <div className={styles.submitdiv}>
              <input defaultValue={user.Email} className={styles.email_input} type="text" />
              <BsPersonFillCheck onClick={submitedit} className={styles.submitform}/>
              </div>
            )}

            
            <ul className={styles.follow}>
              <li onClick={() => SetOpen(true)}>
                دنبال کننده{" "}
                <span style={{ color: "orange", marginRight: "5%" }}>
                  {followers.length}
                </span>{" "}
              </li>
              <li onClick={() => SetOpen2(true)}>
                دنبال شونده{" "}
                <span style={{ color: "orange", marginRight: "5%" }}>
                  {following.length}
                </span>
              </li>
            </ul>
          </div>
        </div>
        {!editProfilestatus && <CustomBtn
          text="ویرایش پروفایل"
          press={() => {
            // location.href = "/editprofile";
            setEditProfileStatus(true);
          }}
          style={{
            backgroundColor: "orange",
            border: "2px solid #FFA500",
            borderRadius: "5px",
            width: 200,
            height: 34,
            cursor: "pointer",
            marginLeft: "150px",
          }}
          textStyle={{
            color: "#000000",
          }}
        />}
      </div>
    </div>
  );
}

function Menu({ menu }: { menu?: string[] }) {
  const [select, setselect] = useState<number>(0);
  const [ShowCommentdiv, setCommentdiv] = useState(false);
  const [showLikeDiv, setLikedList] = useState(false);
  const [ShowWatchedList, setWatchedlist] = useState(false);
  const [ShowWatchList, setWatchlist] = useState(false);
  const [userWatchList, setUserWatchList] = useState([]);
  const [userWatchedList, setUserWatchedList] = useState([]);
  const [userLikedList, setUserLikedList] = useState([]);
  const [comment, setCommnet] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/watch-lists").then((res) => {
      // console.log("the res data is: ", res.data.data);
      setUserWatchList(res.data.data);
    });
    axios.get("http://localhost:1337/api/watched-lists").then((res) => {
      // console.log("the res watched data is: ", res.data.data);
      setUserWatchedList(res.data.data);
    });
    axios.get("http://localhost:1337/api/Liked-lists").then((res) => {
      // console.log("the like  data is: ", res.data.data);
      setUserLikedList(res.data.data);
    });
    axios.get("http://localhost:1337/api/commnets").then((res) => {
      console.log("the comms  data is: ", res.data.data);
      setCommnet(res.data.data);
    });
  }, []);

  const handleWatchedList = () => {
    setWatchedlist(true);
  };
  const handleWatchList = () => {
    setWatchlist(true);
  };
  const handleCommentClick = () => {
    setCommentdiv(true);
  };
  const handleLikedList = () => {
    setLikedList(true);
  };

  return (
    <>
      <div
        style={{ display: "flex", width: "100%", padding: "0 40px" }}
        className={styles.menu}
      >
        {menu?.map((e: string, index: number) => {
          return (
            <h2
              key={index}
              style={{
                padding: 5,
                // display:"flex",
                // flexDirection:"row-reverse",

                borderBottom: index == select ? "2px solid #FFA500" : "",
                cursor: "pointer",
                margin: "0 20px",
                color: "white",
              }}
              onClick={() => {
                setselect(index);
                if (index == 0) {
                  handleWatchedList();
                  setCommentdiv(false);
                  setLikedList(false);
                  setWatchlist(false);
                } else if (index == 1) {
                  handleWatchList();
                  setCommentdiv(false);
                  setLikedList(false);
                  setWatchedlist(false);
                } else if (index === 3) {
                  handleCommentClick();
                  setLikedList(false);
                  setWatchlist(false);
                } else if (index == 2) {
                  handleLikedList();
                  setCommentdiv(false);
                  setWatchlist(false);
                } else {
                  setCommentdiv(false);
                  setLikedList(false);
                  setWatchedlist(false);
                  setWatchlist(false);
                }
              }}
              className={styles.menuItem}
            >
              {e}
            </h2>
          );
        })}
      </div>

      {!ShowCommentdiv && !showLikeDiv && !ShowWatchList && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 15,
            backgroundColor: "#0c1012",
          }}
        >
          {/* <Item image={"/image/manifest.jpg"} name={"لیست پرواز"} />
          <Item image={"/image/good-doctor.jpeg"} name={"دکتر خوب"} />
          <Item image={"/image/sweet-home.jpeg"} name={"سوییت هوم"} />
          <Item image={"/image/harry-poter.jpg"} name={"هری پاتر"} />
          <Item image={"/image/moon-knight.jpeg"} name={"شوالیه ماه"} />
          <Item image={"/image/money-heist.jpg"} name={"خانه کاغذی"} />
          <Item image={"/image/legacies.jpg"} name={"میراث ها"} />
          <Item image={"/image/shahrBano.webp"} name={"شهربانو"} />
          <Item image={"/image/alice.jpg"} name={"آلیس در سرزمین مرزی"} />
          <Item
            image={"/image/spider-man.jpg"}
            name={"مزد عنکبوتی دور از خانه"}
          />
          <Item image={"/image/swarm.jpg"} name={"ازدحام"} />
          <Item image={"/image/meydanSorkh.jpg"} name={"میدان سرخ"} />
          <Item image={"/image/lastOfUs.webp"} name={"آخرین نفر از ما"} />
          <Item image={"http://localhost:1337/uploads/ant_man_864b7d3fc6.webp"} name={"مرد آهنی"} /> */}
          {userWatchedList.map((movie) => (
            <Item image={movie.attributes.Image} name={movie.attributes.Name} />
          ))}
        </div>
      )}
      {showLikeDiv && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 15,
            backgroundColor: "#0c1012",
          }}
        >
          {/* <Item image={"/image/swarm.jpg"} name={"ازدحام"} />
          <Item image={"/image/meydanSorkh.jpg"} name={"میدان سرخ"} />
          <Item image={"/image/lastOfUs.webp"} name={"آخرین نفر از ما"} />
          <Item image={"/image/iron-man.jpg"} name={"مرد آهنی"} /> */}
          {userLikedList.map((movie) => (
            <Item image={movie.attributes.Image} name={movie.attributes.Name} />
          ))}
        </div>
      )}
      {ShowWatchList && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 15,
            backgroundColor: "#0c1012",
          }}
        >
          {/* <Item
            image={"/image/spider-man.jpg"}
            name={"مزد عنکبوتی دور از خانه"}
          />
          <Item image={"/image/meydanSorkh.jpg"} name={"میدان سرخ"} />
          <Item image={"/image/iron-man.jpg"} name={"مرد آهنی"} /> */}
          {userWatchList.map((movie) => (
            <Item image={movie.attributes.Image} name={movie.attributes.Name} />
          ))}
        </div>
      )}
      {ShowCommentdiv && (
        <div style={{ color: "white" }}>
          {comment.map((comm) => (
            <Comment
              image={comm.attributes.image}
              name={comm.attributes.name}
              text={comm.attributes.text}
              film={comm.attributes.filmname}
              createdAt={comm.attributes.date}
              link={comm.attributes.filmlink}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default function Profile() {
  return (
    <>
      <Header />
      <Head />

      <Menu menu={["دیدم", "میخوام ببینیم ", "لیست علاقمندی ها", "نظرات"]} />
      <Footer />
    </>
  );
}
