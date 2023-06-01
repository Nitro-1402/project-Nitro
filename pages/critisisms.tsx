import React, { useEffect } from "react";
import PostCard from "@/component/Critisism/PostCard";
import AddPostModal from "@/component/AddPostModal/AddPostModal";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "@/component/Footer";
import Header from "@/component/header";
import styles from "../styles/Critisism.module.css";
import axios from "axios";

const StyledTabs = styled((props) => (
  <Tabs
    sx={{ display: "flex", justifyContent: "center" }}
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-flexContainer": {
    justifyContent: "center",
    marginTop: "20px",
    // marginBottom: '20px',
  },
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    // alignItems: 'center',
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    // backgroundColor: '#635ee7',
    backgroundColor: "#faa500",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(1),
    color: "#fff",
    fontFamily: "RegularPersian",
    "&.Mui-selected": {
      color: "#faa500",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#fff",
    },
  })
);

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {value === index && (
        <Box sx={{}}>
          <div
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            {children}
          </div>
        </Box>
      )}
    </div>
  );
};

const Critisism = () => {
  const [value, setValue] = React.useState(0);
  const [addPostModalOpener, setAddPostModalOpener] = React.useState(false);
  const [postList, setPostList] = React.useState([]);
  const [permuimpostList, setPermiumPostList] = React.useState([]);
  
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };


  const AddPostModalHandler = () => {
    setAddPostModalOpener(true);
  };
  useEffect(() => {
    axios.get("http://nitroback.pythonanywhere.com/members/posts")
    .then((res) => {
      console.log(res.data.results);
      setPostList(res.data.results);  

    })
    axios.get("http://nitroback.pythonanywhere.com/members/forMe",{headers: {Authorization: `JWT ${localStorage.getItem("accessToken")}`}})
    .then((res) => {
      console.log(res.data.results);
      setPermiumPostList(res.data.results);  

    })
  }, []);
  return (
    
    <div className={styles.critisismWrapper}>
      <Header />
      
      <div className={styles.addPostSection}>
        <button
          onClick={AddPostModalHandler}
          className={styles.addPostSectionBtn}
        >
          اضافه کردن پست
        </button>
      </div>
      <Box
        sx={{
          bgcolor: "#0c1012",
          borderRadius: "8px",
          paddingBottom: "30px",
          // marginTop: "75px",
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="همه پست‌ها" />
          <StyledTab label="برای شما" />
        </StyledTabs>
        <TabPanel value={value} index={0}>
          {/* <PostCard />
          <PostCard />
          <PostCard /> */}
          {
            postList.map((item: any) => {
              return (
                <PostCard 
                user={item.profile}
                isPremium={item.isPremium}
                postContent={item.body}
                />
              )
            })
          }
        </TabPanel>
        <TabPanel value={value} index={1}>
        {
            permuimpostList.map((item: any) => {
              return (
                <PostCard 
                user={item.profile}
                isPremium={item.isPremium}
                postContent={item.body}
                />
              )
            })
          }
        </TabPanel>
      </Box>
      <Footer />
      <AddPostModal open={addPostModalOpener} setOpen={setAddPostModalOpener} />
    </div>
  );
};

export default Critisism;
