import Item from "@/component/FilmItem";
import CustomBtn from "@/ui/CustomBtn";
import CustomImage from "@/ui/CustomImage";
import React, { useEffect, useState } from "react";
import styles from "../styles/myprofile.module.css";
import Navbar from "@/component/navbar/Navbar";
import Followers from "@/component/follower/Followers";
// import Comment from "@/component/comments/Comment";
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
const UseStyles = makeStyles((theme) => ({
  dialog: {
    display: "flex",
    flexDirection: "row",
    border: "1px solid #FFA500",
    justifyContent: "center",
    margin: "5px",
    width: "20vw",
    borderRadius: "8%",
    backgroundColor: "#faa500",
  },
  main: {
    backdropFilter:"blur(5px)",
  },
  dial: {
    backgroundColor: "#fff100",
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
  const[following,setFollowing]=useState([])
  const[followers,setFollowers]=useState([])
  const [userProfileImg, setUserProfileImg] = useState("");

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
    axios.get('http://localhost:1337/api/followerss').then((res)=> {
      setFollowers(res.data.data)
      console.log("followers",res.data.data)})
    axios.get('http://localhost:1337/api/followings').then((res)=> {
      setFollowing(res.data.data)
      console.log("followers",res.data.data)
    })
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
                <button className={styles.buttm} onClick={() => SetOpen(false)}>
                  {" "}
                  بستن
                </button>
              </DialogActions>
            </DialogContentText>
          </div>
         {followers.map((list1)=> (
          <Follower image={list1.attributes.Image} name={list1.attributes.Name}/>
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
                <button
                  className={styles.buttm}
                  onClick={() => SetOpen2(false)}
                >
                  {" "}
                  بستن
                </button>
              </DialogActions>
            </DialogContentText>
          </div>
          {following.map((list2)=> (
          <Follower image={list2.attributes.image} name={list2.attributes.Name}/>
         ))}
        </Dialog>
      </div>
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
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
          <img
            // className={styles.profileImg}
            style={{
              width: "12vw",
              height: "12vw",
              minHeight: "110px",
              minWidth: "110px",
              borderRadius: "50%",
            }}
            src={user.Profilepic}
            alt="test"
          />
          <div style={{ marginLeft: 25 }}>
            <h1 className={styles.name}>
              {user.FirstName} {user.LastName}
            </h1>
            <h3 className={styles.email}>{user.Email}</h3>
            <ul className={styles.follow}>
              <li onClick={() => SetOpen(true)}>
                دنبال کننده{" "}
                <span style={{ color: "orange", marginRight: "5%" }}>{followers.length}</span>{" "}
              </li>
              <li onClick={() => SetOpen2(true)}>
                دنبال شونده{" "}
                <span style={{ color: "orange", marginRight: "5%" }}>{following.length}</span>
              </li>
            </ul>
          </div>
        </div>
        <CustomBtn
          text="ادیت پروفایل"
          press={() => {
            location.href = "/editprofile";
          }}
          style={{
            backgroundColor: "orange",
            border: "2px solid #FFA500",
            borderRadius: "5px",
            width: 200,
            height: 34,
            cursor: "pointer",
          }}
          textStyle={{
            color: "#000000",
          }}
        />
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
      {ShowCommentdiv &&(
        <div style={{color:"white"}}>
        {/* <Comment/> */}
        </div>
      )}
    </>
  );
}

export default function Profile() {
  return (
    <>
      <Navbar />
      <Head />

      <Menu menu={["دیدم", "میخوام ببینیم ", "لیست علاقمندی ها", "کامنت ها"]} />
    </>
  );
}
