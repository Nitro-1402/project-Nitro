import React from "react";
import PostCard from "@/component/Critisism/PostCard";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "@/component/Footer";
import Header from "@/component/header";
import styles from "../styles/Critisism.module.css";

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

const TabPanel = (props:any) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      style={{display:"flex",justifyContent:"center"}}
    >
      {value === index && (
        <Box sx={{

        }}>
          <Typography
            sx={{
              paddingTop: "20px",
              paddingLeft: "30px",
              paddingRight: "30px",
              
            }}
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
};

const Critisism = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event:any,newValue:any) => {
    setValue(newValue);
  };

  return (
    <div className={styles.critisismWrapper}>
      <Header />
      <Box
        sx={{
          bgcolor: "#0c1012",
          borderRadius: "8px",
          paddingBottom: "30px",
          marginTop: "75px",
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
            <PostCard postContent="d d sal dl lsd sandsadba sfjbal knfl;kl nlkf lksanl fladand sdb ;j ;kf;af; kaf;ad;hflkas flkasjh; jas;j f;asj ;fja; js;j ;saj;f js;aj f;lsaj; sjaf; jf;asj ;jas; js;aj ;jfsa j;sj ;ajfs; sj;j ;lajf ;lasj; afsj;j as;lj ;ljl;as j;lf asj sjs;l ja;j fl;sj l;fsjal; fjsa;lj fl;sajlfjsl;aj ;laj ;ls;lj ;lsj;l jas;ljsaj; jsajf;sj;jf;a j;j ;ja;sjf; j;ajf;sj; fjs;ajf;jsa;ljf ;sa; js;afa j; fjs;j f;aj; fjsa; jfs;aj ;fsaj;l ja ja; fjsl jfa;jf;sj;j a;jf;asj; jas;j;fjs ja;fj jfas js j ja;jfasj ajf;ajs;lf ;aj;fj;ajf;js;a f;lsaj; fj;laj l;sjjas;jf a;j s;fj a;j f;sj ;lj saj jfl;aj fj " />
            <PostCard />
            <PostCard />
        </TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
      </Box>
      <Footer />
    </div>
  );
};

export default Critisism;
