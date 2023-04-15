import MulticlassName from "@/helper/MultiClassName";
import CustomBtn from "@/ui/CustomBtn";
import CustomImage from "@/ui/CustomImage";
import Input from "@/ui/Input";
import { useRouter } from "next/router";
import React from "react";
import { Component, useRef, useState } from "react";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Navbar from "@/component/navbar/Navbar";
import styles from "../styles/editprofile.module.css";
// import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Item from "@/component/FilmItem";
import Link from "next/link";


function Password({
  onChange,
  errorMsg,
  setError,
}: {
  onChange: (e: string, label: string) => void;
  errorMsg: string | null | undefined;
  setError?: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [see, setSee] = useState<boolean>(false);

  return (
    <div style={{ position: "relative" }}>
      <img src="" alt="" />
      <Input
        type={!see ? "password" : "text"}
        placeholder="رمز عبور"
        required
        onChange={onChange}
        name="password"
        errorMsg={errorMsg}
        setError={setError}
      />
    </div>
  );
}
function NewPassword({
  onChange,
  errorMsg,
  setError,
}: {
  onChange: (e: string, label: string) => void;
  errorMsg: string | null | undefined;
  setError?: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [see, setSee] = useState<boolean>(false);

  return (
    <div style={{ position: "relative" }}>
      <img src="" alt="" />
      <Input
        type={!see ? "password" : "text"}
        placeholder=" رمز عبور جدید"
        onChange={onChange}
        name="Newpassword"
        errorMsg={errorMsg}
        setError={setError}
      />
      {see ? (
        <BsEyeFill
          style={{ position: "absolute", left: 30, top: 40, zIndex: 1000 }}
          size={18}
          color={"#FFA500"}
          onClick={() => {
            setSee(false);
          }}
        />
      ) : (
        <BsFillEyeSlashFill
          style={{ position: "absolute", left: 30, top: 40, zIndex: 1000 }}
          size={18}
          color={"#FFA500"}
          onClick={() => {
            setSee(true);
          }}
        />
      )}
    </div>
  );
}
type PasswordConfirmationProps = {
  password: string;
  onChange: (e: string, label: string) => void;
  errorMsg: string | null | undefined;
  setError?: React.Dispatch<React.SetStateAction<any>>;
};

function PasswordConfirmation({
  password,
  onChange,
  errorMsg,
  setError,
}: PasswordConfirmationProps) {
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [see, setSee] = useState<boolean>(false);

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    onChange(e.target.value, "ConfirmPassword");
  };

  const isPasswordMatch = () => {
    return password === confirmPassword;
  };

  return (
    <div style={{ position: "relative" }}>
      <img src="" alt="" />
      <Input
        type={!see ? "password" : "text"}
        placeholder="تکرار رمز عبور جدید"
        onChange={() => handleConfirmPasswordChange}
        name="ConfirmPassword"
        errorMsg={
          isPasswordMatch() ? errorMsg : "رمز عبور با تکرار آن مطابقت ندارد"
        }
        setError={setError}
      />
      {see ? (
        <BsEyeFill
          style={{ position: "absolute", left: 30, top: 40, zIndex: 1000 }}
          size={18}
          color={"#FFA500"}
          onClick={() => {
            setSee(false);
          }}
        />
      ) : (
        <BsFillEyeSlashFill
          style={{ position: "absolute", left: 30, top: 40, zIndex: 1000 }}
          size={18}
          color={"#FFA500"}
          onClick={() => {
            setSee(true);
          }}
        />
      )}
    </div>
  );
}

const EditProfile = () => {
  // const [password, setPassword] = useState<string>("");
  // const [newPassword, setNewPassword] = useState<string>("");
  // const [confirmPassword, setConfirmPassword] = useState<string>("");

  const ref = useRef<{password: string; email: string ,newPassword:string;confirmPassword:string;}>({
    newPassword:"",
    confirmPassword:"",
    password: "",
    email: "",
  });
  const onChange = (e: string, label: string) => {
    if (label == "newPassword") ref.current.newPassword = e;
    else if (label == "password") ref.current.password = e;
    else if (label == "email") ref.current.email = e;
    else if (label=="confirmPassword") ref.current.confirmPassword=e
  };


  const [error, setError] = useState<{
    password: string;
    email: string;
    newPassword:string;
    confirmPassword:string;
  }>({
    password: "",
    email: "",
    newPassword:"",
    confirmPassword:""
  });

  const api = async () => {
    console.log(ref.current);
    // Call your API here
  };
  
  // const passwordHandler = (e: string, label: string) => {};
  // const NewPasswordHandler = (e: string, label: string) => {
  //   if (label == "Newpassword") ref.current.password = e;
  // };
  // const confirmPasswordHandler = (e: string, label: string) => {
  //   if (label == "ConfirmPassword") ref.current.password = e;
  // };

  // const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {}
    
  

  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.bg}>
        <div className={styles.container}>
        <Link href="/myprofile">
        <ArrowForwardIosIcon style={{alignItems:"right",color:"white",marginLeft:"320px",marginTop:"30px"}} />
        </Link>
          <h1 id="h1" style={{ marginTop: "10%", fontSize: "30px" ,color:"white"}}>
            {" "}
            ادیت پروفایل
          </h1>
          {/* <div style={{ marginTop: "6%" ,color:"white"}}>
            <Input
              type="text"
              placeholder="نام کاربری جدید"
              onChange={handleChange}
              name="username"
              errorMsg={error?.username}
            />
          </div> */}
          <Input
            type="text"
            placeholder=" ایمیل"
            onChange={onChange}
            name="email"
            errorMsg={error?.email?.[0]}
          />

          <Input
            type="text"
            placeholder="رمز عبور فعلی"
            onChange={onChange}
            name="password"
            errorMsg={error?.password?.[0]}
          />
          <Input
            type="text"
            placeholder="رمز عبور جدید"
            onChange={onChange}
            name="newPassword"
            errorMsg={error?.newPassword?.[0]}
          />
          <Input
            type="text"
            placeholder="تکرار رمز عبور جدید"
            onChange={onChange}
            name="confirmPassword"
            errorMsg={error?.confirmPassword?.[0]}
          />

          {/* <NewPassword onChange={handleChange} errorMsg={""} />
      <PasswordConfirmation> </PasswordConfirmation>     */}
          <div
            className={styles.Up}
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginBottom: "8%",
              marginTop: "8%",
            }}
          >
            <label
              style={{ marginLeft: "70px", fontSize: "14px" ,color:"white"}}
              htmlFor="Profile_image"
            >
              عکس پروفایل
            </label>
            <IconButton style={{color:"white",marginRight:"52px"}} color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
          </div>
          

          {/* <div
            className={styles.Up}
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginBottom: "8%",
            }}
          >
            <label
              style={{ marginLeft: "70px", fontSize: "14px" ,color:"white"}}
              htmlFor="banner_image"
            >
              {" "}
              عکس پس زمینه
            </label>
            
            <IconButton style={{color:"white",marginRight:"40px"}} color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
          </div> */}
          
          {/* <Password onChange={onChange} errorMsg={""} /> */}

          <div style={{ marginBottom: "10%" }}>
            <CustomBtn
              key={"login"}
              press={async () => {
                await api();
              }}
              style={{
                width: 300,
                height: 40,
                marginTop: 10,
                backgroundColor: "#FFA500",
                borderRadius: 5,
              }}
              text={"ذخیره"}
              textStyle={{
                color: "white",
                fontSize: 16,
                fontFamily: "RegularPersian",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
