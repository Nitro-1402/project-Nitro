import Item from "@/component/FilmItem";
import CustomBtn from "@/ui/CustomBtn";
import CustomImage from "@/ui/CustomImage";
import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/myprofile.module.css";
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
import Input from "@/ui/Input";
import AuthStore from "../store/Auth";

import AutoExpandingInput from "@/component/AutoExpandingInput";
import { moveEmitHelpers } from "typescript";
import { useRouter } from "next/router";
import { colors } from "react-select/dist/declarations/src/theme";
let myphotoUrl=""
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
  dl: {
    // display: "flex",
    // flexDirection: "row",
    // border: "1px solid #FFA500",
    // justifyContent: "center",
    // margin: "5px",
    // width: "20vw",
    // borderRadius: "8%",
    // backgroundColor: "#faa500",
  },
}));

const userInfo = {
  first_name: "",
  LasdName: "",
  photo: "",
  Email: "",
};

function Head() {
  const userId2 = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const classes = UseStyles();
  const [Open, SetOpen] = useState(false);
  const [Open2, SetOpen2] = useState(false);
  // const [users, setUsers] = useState([]);
  const [user, setUser] = useState<any>({});
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [userProfileImg, setUserProfileImg] = useState("");
  const [editProfilestatus, setEditProfileStatus] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [useremail, setUserEmail] = useState<any>("");
  const [is_followed, setIs_followed] = useState<any>(false);
  const [is_subscribed,setIssubscribed] = useState<any>(false);
  const value=useRef<{email:string,firstname:string,lastname:string}>({email:"",firstname:"",lastname:""})
  let id: any;
  

  const user2 = AuthStore((state: any) => state.user);
  console.log("user", user2);
 
  const ImageUpload = ({ image = "../image/user.png" }: { image?: string }) => {
    const [preview, setPreview] = useState<any>();

    useEffect(() => {
      if (!selectedFile) {
        setPreview(undefined);
        return;
      }
      const objectUrl: any = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = (e: any) => {
      if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(e.target.files[0]);
        return;
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0]);
    };
    const deleteFunc = () => {
      setPreview("../image/user.png");
    };
    return (
      // <div>
      //     <input type='file' onChange={onSelectFile} />
      // </div>
      <div className={styles.ImgPreview}>
        
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
  let userId: any;
  const router: any = useRouter();
  const submitedit = () => {
    const formData = new FormData();
    if (selectedFile) {
      formData.append("photo", selectedFile);
      formData.append("first_name", value.current.firstname);
      formData.append("last_name", value.current.lastname);
      if(value.current.email!=user.email && value.current.email)
      formData.append("email", value.current.email);
      console.log("my id  ",id)
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",Authorization: `JWT ${localStorage.getItem("accessToken")}`
        },
      };
      axios
        .patch(
          "http://nitroback.pythonanywhere.com/members/profiles/"+ localStorage.getItem("id")+"/",
          formData,
          config
        )
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }

    setEditProfileStatus(false);
  };
  

  
  useEffect(() => {
    userId = localStorage.getItem("id");
    userId2.current = userId;
    id= localStorage.getItem("id")
  
    console.log("usserid", localStorage.getItem("id"));
    if (router.query.id) {
      if (router.query.id == "myprofile" || userId == router.query.id) {
        id = localStorage.getItem("id");
      } else id = router.query.id;
      // console.log("id1", id);

      axios
        .get(
          "http://nitroback.pythonanywhere.com/members/followers/" + id + "/"
        )
        .then((res) => {
          setFollowers(res.data.followers);
          console.log("followers", res.data.followers);
        });
      axios
        .get(
          "https://nitroback.pythonanywhere.com/members/followings/" + id + "/"
        )
        .then((res) => {
          setFollowing(res.data.followings);
          // console.log("followings", res.data.followings);
        });
      const getUserInfo = async () => {
        try {
          await axios
            .get(
              "https://nitroback.pythonanywhere.com/members/profiles/" +
                id +
                "/",
              {
                headers: {
                  Authorization: `JWT ${localStorage.getItem("accessToken")}`,
                },
              }
            )
            .then((res) => {
              console.log("User data is: ", res.data);
              setIs_followed(res.data.is_followed);
              setIssubscribed(res.data.is_subscribed);
              // console.log("User Is followed ", res.data.is_followed);
              // console.log("User Is subscribed ", res.data.is_subscribed);
              setUser(res.data);
              myphotoUrl=res.data.photo
              
              setUserProfileImg(res.data.photo);
              setUserEmail(res.data.user);
              // console.log("email",res.data.user);
            });
        } catch (error) {
          console.log(error);
        }
      };
      getUserInfo();
    }
  }, [router.query.id]);
  const Unfollow= () => {
    const body={
      follower_id: localStorage.getItem("id"),
      following_id: router.query.id
    }
    console.log("body",body)
    // axios.post("http://nitroback.pythonanywhere.com/members/follow/",body).then((res)=>{})
    axios
      .delete("http://nitroback.pythonanywhere.com/members/follow/unfollow/"+"?follower_id="+localStorage.getItem("id")?.toString()+"&following_id="+router.query.id.toString(), 
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem("accessToken")}`,
        },
      }
      )
  }
  const follow= () => {
    const body={
      follower_id: localStorage.getItem("id"),
      following_id: router.query.id
    }
    console.log("body",body)
    // axios.post("http://nitroback.pythonanywhere.com/members/follow/",body).then((res)=>{})
    axios
      .post("http://nitroback.pythonanywhere.com/members/follow/", body, {
        headers: {
          Authorization: `JWT ${localStorage.getItem("accessToken")}`,
        },
      })
    }
    const subscribe=()=>{
      const body={
        profile_id: router.query.id,
        subscriber_id: localStorage.getItem("id")
      }
      console.log("body",body)
      // axios.post("http://nitroback.pythonanywhere.com/members/follow/",body).then((res)=>{})
      axios
        .post("http://nitroback.pythonanywhere.com/members/subscribe/", body, {
          headers: {
            Authorization: `JWT ${localStorage.getItem("accessToken")}`,
          },
        })
    }
  return (
    <div style={{ position: "relative", marginTop: "120px" }}>
      <div className={classes.bg}>
        <Dialog
          className={classes.main}
          open={Open}
          onClose={() => SetOpen(false)}
        >
          <div className={styles.dial}>
            <DialogTitle className={classes.dialog}>
              {" "}
              لیست دنبال شونده
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
          {followers.map((list1: any) => (
            <Follower image={list1.photo} name={list1.username} />
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
              لیست دنبال کننده
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
          {following.map((list2: any) => (
            <Follower image={list2.photo} name={list2.username} />
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
                marginRight: "2vw",
                border: "2px solid #faa500",
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
                  onChange={e=>{
                    value.current.firstname=e
                    }}
                />
                <AutoExpandingInput style={{}} input={user.first_name}  onChange={e=>{
                    value.current.lastname=e
                    }} />
              </div>
            )}

            {editProfilestatus && (
              // <h3 className={styles.email}>{user.Email}</h3>
              <div className={styles.submitdiv}>
                <input
                  defaultValue={useremail.email}
                  onChange={e=>{
                  value.current.email=e.target.value
                  }}
                  className={styles.email_input}
                  type="text"
                />
                <BsPersonFillCheck
                  onClick={submitedit}
                  className={styles.submitform}
                />
                <MdCancel
                className={styles.submitform}
                style={{marginRight:"30px",color:"white"}}
                onClick={e=>setEditProfileStatus(false)} />
              </div>
            )}

            <ul className={styles.follow}>
              <li style={{ width: "120px" }} onClick={() => SetOpen(true)}>
                دنبال شونده{" "}
                <span style={{ color: "orange", marginRight: "5%" }}>
                  {followers.length}
                </span>{" "}
              </li>
              <li style={{ width: "120px" }} onClick={() => SetOpen2(true)}>
                دنبال کننده{" "}
                <span style={{ color: "orange", marginRight: "5%" }}>
                  {following.length}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
          {!(
            router.query.id == "myprofile" || userId2.current == router.query.id
          ) ? (
            <div className={styles.buttons}>
            <CustomBtn
              className={styles.Follow}
              text={is_followed?'دنبال شده':"دنبال کردن "}
              press={() => {
                if(localStorage.getItem("id")){
                if(is_followed){
                  Unfollow()
                  setIs_followed(false)
                }else{
                  //folow
                  follow()
                  setIs_followed(true)
                }
              }else{
                router.push(`/register?backUrl=${router.asPath}`)
              }
                //   setEditProfileStatus(true);
                // console.log("userr id is : ", userId);
              }}
              style={{
                backgroundColor:is_followed?"orange": "white",
                border: "2px solid #FFA500",
                borderRadius: "5px",
                
                cursor: "pointer",
                // marginLeft: "100px",
              }}
              textStyle={{
                color: "#000000",
              }}
            />
            {/* <CustomBtn
            className={styles.Subcribed}
            text={is_subscribed?"عضو شده":"عضو شدن"}
            press={() => {
              if(is_subscribed){
                // unsubscribe()
              }else{
                subscribe()
              }
              // location.href = "/editprofile";
            }}
            style={{
              backgroundColor:is_subscribed?"white": "#737373",
              border: "2px solid #FFA500",
              borderRadius: "5px",
              
              cursor: "pointer",
              marginLeft: "20px",
            }}
            textStyle={{
              color: "#000000",
            }}
          /> */}
          </div>) : !editProfilestatus ? (
            <CustomBtn
            className={styles.editProfileButtom}
              text="ویرایش پروفایل"
              press={() => {
                // location.href = "/editprofile";
                setEditProfileStatus(true);
              }}
              style={{
                backgroundColor: "orange",
                border: "2px solid #FFA500",
                borderRadius: "5px",
                
                cursor: "pointer",
                
              }}
              textStyle={{
                color: "#000000",
              }}
            />
          ) : (
            <></>
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
  const [movies, setMovies] = useState([]);
  let id: any;
  const router = useRouter();
  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (router.query.id) {
      if (router.query.id == "myprofile" || userId == router.query.id) {
        id = localStorage.getItem("id");
      } else id = router.query.id;
      axios
        .get("https://nitroback.pythonanywhere.com/movies/movies/")
        .then((res) => {
          setMovies(res.data.results);
        });
      axios
        .get("https://nitroback.pythonanywhere.com/lists/bookmarks/" + id + "/")
        .then((res) => {
          setUserWatchList(res.data.bookmarks);
          // console.log("bookmark", res.data.bookmarks);
          
        });
      axios
        .get("https://nitroback.pythonanywhere.com/lists/watchedList/" + id + "/")
        .then((res) => {
          // console.log("watched", res.data.watched_list);
          setUserWatchedList(res.data.watched_list);
          
        });
     
      axios
        .get("http://nitroback.pythonanywhere.com/lists/favourites/" + id + "/")
        .then((res) => {
          console.log("Liked", res.data.favourites);
          setUserLikedList(res.data.favourites);
         
        });
      axios
        .get(
          "http://nitroback.pythonanywhere.com/comments/comments/?profile=" + id
        )
        .then((res) => {
          console.log("the comms  data is: ", res.data.results);
          setCommnet(res.data.results);
        });
    }
  }, [router.query.id]);

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
        style={{ display: "flex", width: "100%" }}
        className={styles.menu}
      >
        {menu?.map((e: string, index: number) => {
          return (
            <h2
              className={styles.menuItem}

              key={index}
              style={{
                
                // display:"flex",
                // flexDirection:"row-reverse",

                borderBottom: index == select ? "2px solid #FFA500" : "",
                cursor: "pointer",
                
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
          {userWatchedList.map((movie: any) => {
            return (
              <Item
                id={movie.id}
                image={movie.thumbnail}
                name={movie.title}
                description={movie.description}
              />
            );
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
          {userLikedList.map((movie: any) => {
            return (
              <Item
                id={movie.id}
                image={movie.thumbnail}
                name={movie.title}
                description={movie.description}
              />
            );
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
          {userWatchList.map((movie: any) => {
            // if (idWatch.includes(movie.id)) {
            //   // console.log("mmd",movie);
            //   return <Item image={movie.thumbnail} name={movie.title} description={movie.description} />

            // }
            return (
              <Item
                id={movie.id}
                image={movie.thumbnail}
                name={movie.title}
                description={movie.description}
              />
            );
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
          {comment.map((comm: any) => (
            <Comment
              image={comm.photo}
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
