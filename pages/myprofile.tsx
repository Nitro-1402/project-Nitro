import Item from "@/component/FilmItem";
import CustomBtn from "@/ui/CustomBtn";
import CustomImage from "@/ui/CustomImage";
import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/myprofile.module.css";
import Comment from "@/component/showCommentProfile";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";
import Footer from "@/component/Footer";
import Header from "@/component/header";
import { MdCancel } from "react-icons/Md";
import { BsPersonFillCheck } from "react-icons/bs";
import { IconButton, TextField } from "@mui/material";
// console.log("user",AuthStore);
// import Comment from "@/component/comments/comments";
import {Dialog,DialogActions,DialogContentText,DialogTitle,dividerClasses} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import Follower from "@/component/Follower/Follwers";
import Input from "@/ui/Input";
import AuthStore from "./store/Auth"

import AutoExpandingInput from "@/component/AutoExpandingInput";
import { moveEmitHelpers } from "typescript";



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
  first_name: "",
  LasdName: "",
  photo: "",
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
  const[useremail,setUserEmail]=useState("");
  let id:any;
  const user2=AuthStore((state:any)=>state.user)
  console.log("user",user2);
  // const deleteFunc = () => {
  //   setPreview("../image/user.png");
  // };
  const ImageUpload = ({ image = "../image/user.png" }: { image?: string }) => {
    const [preview, setPreview] = useState();

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
      if (!selectedFile) {
        setPreview(undefined);
        return;
      }
      const objectUrl:any = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = (e:any) => {
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
            border: "2px solid #faa500",
          }}
          // src={user.photo}
          src={preview == null ? image : preview}
          alt="test"
        />
        <div className={styles.icon}>
          <IconButton
            style={{ color: "white", marginRight: "10px" }}
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={onSelectFile}
            />
            <PhotoCamera style={{ color: "#faa500" }} />
          </IconButton>
          <DeleteIcon className={styles.deleteicon} onClick={deleteFunc} />
        </div>
      </div>
    );
  };
  const submitedit = () => {
    const formData = new FormData();
    if (selectedFile) {
      formData.append("photo", selectedFile);
      formData.append("first_name", user.first_name);
      formData.append("last_name", user.last_name);
      formData.append("email", user.email);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      axios
        .patch("http://nitroback.pythonanywhere.com/members/profiles/1/", formData, config)
        .then((res) => {
          // console.log("the image data: ", res.data);
        })
        .catch((err) => console.log(err));  
    }
    // const sendingData = {
    //   first_name: user.first_name,
    //   last_name: user.last_name,
    //   email: user.email,
    // };
    // axios
    //   .patch("http://nitroback.pythonanywhere.com/members/profiles/1/", sendingData)
    //   .then((res) => {
    //     console.log("the resulting data: ", res.data);
    //   })
    //   .catch((err) => console.log(err));
      
    setEditProfileStatus(false);
  };
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
    // console.log("id", localStorage.getItem("id"));
    id=localStorage.getItem("id");
    // console.log("id1", id);

    axios.get("http://nitroback.pythonanywhere.com/members/followers/"+id+'/').then((res) => {
      setFollowers(res.data.followers);
      // console.log("followers", res.data.followers);
    });
    axios.get("https://nitroback.pythonanywhere.com/members/followings/"+id+'/').then((res) => {
      setFollowing(res.data.followings);
      // console.log("followings", res.data.followings);
    });
    const getUserInfo = async () => {
      // try {
      //   const response = axios.get("https://nitroback.pythonanywhere.com/members/profiles/1/");
      //   // const data = (await response).data.data[0].attributes;
      //   console.log("the data fetched: ", response);
      //   // setUser(data);
      //   // setUserProfileImg(data.photo);
      // } catch (error) {
      //   console.log(error);
      // }
      try {
        await axios.get("https://nitroback.pythonanywhere.com/members/profiles/"+id+ '/')
        .then(res => {
          // console.log("data is: ", res.data);
          setUser(res.data)
          setUserProfileImg(res.data.photo)
          setUserEmail(res.data.user)
          // console.log("email",res.data.user);
        })
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

  

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
          {followers.map((list1:any) => (
            <Follower
              image={list1.photo}
              name={list1.username}
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
          {following.map((list2:any) => (
            <Follower
              image={list2.photo}
              name={list2.username}
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
          {editProfilestatus && <ImageUpload image={user.photo} />}
          {!editProfilestatus && (
            <img
              // className={styles.profileImg}
              style={{
                width: "12vw",
                height: "12vw",
                minHeight: "110px",
                minWidth: "110px",
                borderRadius: "50%",
                marginRight: "100px",
                border: "2px solid pink",
              }}
              src={user.photo}
              alt="test"
            />
          )}
          <div className={styles.data}>
            {!editProfilestatus && (
              <h1 className={styles.name}>
                {user.first_name} {user.last_name}
              </h1>
            )}

            {!editProfilestatus && (
              
              <h3 className={styles.email}>{useremail.email}</h3>
            )}
            {editProfilestatus && (
              // <h3 className={styles.email}>{user.Email}</h3>
              <div className={styles.input_div}>
                {/* <label className={styles.Input_label} >{user.first_name}</label> */}
                {/* <input className={styles.Input_text2} defaultValue={user.last_name} type="text" /> */}
                {/* <label className={styles.Input_label}>{user.last_name}</label> */}
                {/* <input className={styles.Input_text} defaultValue={user.first_name} type="text" /> */}
                {/* <AutoExpandingInput/>*/}
                <AutoExpandingInput
                  style={{ marginRight: "15px" }}
                  input={user.last_name}
                />
                <AutoExpandingInput style={{}} input={user.first_name} />
              </div>
            )}

            {editProfilestatus && (
              // <h3 className={styles.email}>{user.Email}</h3>
              <div className={styles.submitdiv}>
                <input
                  defaultValue={useremail.email}
                  className={styles.email_input}
                  type="text"
                />
                <BsPersonFillCheck
                  onClick={submitedit}
                  className={styles.submitform}
                />
              </div>
            )}

            <ul className={styles.follow}>
              <li style={{width:"120px"}} onClick={() => SetOpen(true)}>
                دنبال کننده{" "}
                <span style={{ color: "orange", marginRight: "5%" }}>
                  {followers.length}
                </span>{" "}
              </li>
              <li style={{width:"120px"}} onClick={() => SetOpen2(true)}>
                دنبال شونده{" "}
                <span style={{ color: "orange", marginRight: "5%" }}>
                  {following.length}
                </span>
              </li>
            </ul>
          </div>
        </div>
        {!editProfilestatus && (
          <CustomBtn
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
          />
        )}
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
  const[movies,setMovies]=useState([]);
  const [filteredwatchedMovies,setFilteredwatchedMovies]=useState([]);
  const [idWatched,setIdWatched]=useState([]);
  const [idWatch,setIdWatch]=useState([]);
  const [idLiked,setIdLiked]=useState([]);
  let id;

  useEffect(() => {
    id=localStorage.getItem("id");
    // console.log("id2",id);
    axios.get("https://nitroback.pythonanywhere.com/movies/movies/").then((res) => {
      // console.log("movies ", res.data.results);
      setMovies((res.data.results))
  });
    axios.get("https://nitroback.pythonanywhere.com/lists/bookmarks/1/").then((res) => {
      // console.log("the res data is: ", res.data.data);
      setUserWatchList(res.data.bookmarks);
      console.log("bookmark",res.data.bookmarks);
      const Hi=res.data.bookmarks.map((item:any)=>item[0]);
      setIdWatch(Hi);
    });
    axios.get("https://nitroback.pythonanywhere.com/lists/watchedList/1/").then((res) => {
      // console.log("the res watched data is: ", res.data.data);
      console.log("watched",res.data.watched_list);
      setUserWatchedList(res.data.watched_list);
      const Hi=res.data.watched_list.map((item:any)=>item[0]);
      setIdWatched(Hi);
      // console.log("idWatched",idWatched);
      // console.log("hi",Hi);
      
    });
    // axios.get("http://localhost:1337/api/Liked-lists").then((res) => {
    //   // console.log("the like  data is: ", res.data.data);
    //   setUserLikedList(res.data.data);
    // });
    axios.get("http://nitroback.pythonanywhere.com/lists/favourites/"+id+'/').then((res) => {
      // console.log("the like  data is: ", res.data.data);
      console.log("Liked",res.data.favourites);
      setUserLikedList(res.data.favourites);
      const Hi=res.data.favourites.map((item:any)=>item[0]);
      setIdLiked(Hi);
      // console.log("Liked",idLiked);
      // console.log("hi",Hi);
    });
    axios.get("http://nitroback.pythonanywhere.com/comments/comments/?profile="+id).then((res) => {
      console.log("the comms  data is: ", res.data.results);
      setCommnet(res.data.results);
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

          
          
          {userWatchedList.map((movie:any)=>{
           
              return <Item id={movie.id} image={movie.thumbnail} name={movie.title} description={movie.description} />
              
            
          })}
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
          {userLikedList.map((movie:any)=>{
            
              return <Item id={movie.id} image={movie.thumbnail} name={movie.title} description={movie.description} />
              
            
          })}
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
          {userWatchList.map((movie:any)=>{
            // if (idWatch.includes(movie.id)) {
            //   // console.log("mmd",movie);
            //   return <Item image={movie.thumbnail} name={movie.title} description={movie.description} />
              
            // }
            return <Item id={movie.id} image={movie.thumbnail} name={movie.title} description={movie.description}/>
          })}
          {/* <Item
            image={"/image/spider-man.jpg"}
            name={"مزد عنکبوتی دور از خانه"}
          />
          <Item image={"/image/meydanSorkh.jpg"} name={"میدان سرخ"} />
          <Item image={"/image/iron-man.jpg"} name={"مرد آهنی"} /> */}
          {/* {userWatchList.map((movie) => (
            <Item image={movie.attributes.Image} name={movie.attributes.Name} />
          ))} */}
        </div>
        
      )}
      {ShowCommentdiv && (
        <div style={{ color: "white" }}>
          {comment.map((comm:any) => (
            <Comment
              image={movies[comm.object_id].thumbnail}
              name={id}
              text={comm.message}
              film={comm.content_object}
              createdAt={comm.created_at}
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
