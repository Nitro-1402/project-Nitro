import MulticlassName from "@/helper/MultiClassName";
import CustomBtn from "@/ui/CustomBtn";
import CustomImage from "@/ui/CustomImage";
import Input from "@/ui/Input";
import { useRouter } from "next/router";
import React from "react";
import { Component, useRef, useState, useEffect } from "react";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Navbar from "@/component/navbar/Navbar";
import styles from "../styles/editprofile.module.css";
// import styled from 'styled-components';
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Item from "@/component/FilmItem";
import Link from "next/link";
import axios from "axios";
import { baseURL } from "../constant/urlapi";

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
// Function to handle file input change
// const handleImageChange = (e) => {
//   const file = e.target.files[0];
//   const reader = new FileReader();
//   reader.onload = () => {
//     setImageSrc(reader.result);
//   };
//   reader.readAsDataURL(file);
// };

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
  // const [firstName, setFirstName] = useState("");
  // const { user } = useAuth();
  const [selectedFile, setSelectedFile] = useState(null);

  const ref = useRef<{
    password: string;
    email: string;
    lastname: string;
    firstname: string;
    newPassword: string;
    confirmPassword: string;
  }>({
    email: "",
    lastname: "",
    firstname: "",
    newPassword: "",
    confirmPassword: "",
    password: "",
  });
  const changeHandler = (e: string, label: string) => {
    console.log("e", e, "ref.current.firstname", ref.current.firstname);
    console.log("e", e, "ref.current.lastname", ref.current.lastname);

    if (label == "email") ref.current.email = e;
    else if (label == "firstname") ref.current.firstname = e;
    else if (label == "lastname") ref.current.lastname = e;
    else if (label == "newPassword") ref.current.newPassword = e;
    else if (label == "password") ref.current.password = e;
    else if (label == "confirmPassword") ref.current.confirmPassword = e;
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const [error, setError] = useState<{
    firstname: string;
    lastname: string;
    password: string;
    email: string;
    newPassword: string;
    confirmPassword: string;
  }>({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const ImageUpload = () => {
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

    return (
      // <div>
      //     <input type='file' onChange={onSelectFile} />
      // </div>
      <div className={styles.ImgPreview}>
        <img
          className={styles.Prew}
          src={preview == null ? "../image/user.png" : preview}
        />
        <IconButton
          style={{ color: "white", marginRight: "250px" }}
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" onChange={onSelectFile} />
          <PhotoCamera />
        </IconButton>
      </div>
    );
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.post("/api/user/edit", {
        firstname: ref.current.firstname,
        lastname: ref.current.lastname,
        password: ref.current.password,
        email: ref.current.email,
        newPassword: ref.current.newPassword,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const api = async () => {
    console.log(ref.current);
    // Call your API here
  };

  const submitHandler = async () => {
    const temp = {
      image: selectedFile,
      firstName: ref.current.firstname,
      lastName: ref.current.lastname,
      email: ref.current.email,
      password: ref.current.password,
    };
    console.log("the data when submitted: ", temp);
    const form_data = new FormData();
    form_data.append("photo", selectedFile);
    form_data.append("first_name", ref.current.firstname);
    form_data.append("last_name", ref.current.lastname);
    form_data.append("email", ref.current.email);
    // form_data.append("bio", ref.current.bio);
    // form_data.append("password", ref.current.password);

    // await axios
    //   .post(`${baseURL}/members/profile/${user.id}`, form_data)
    //   .then((res) => {
    //     // setData(res.data)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImageSrc(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  // const passwordHandler = (e: string, label: string) => {};
  // const NewPasswordHandler = (e: string, label: string) => {
  //   if (label == "Newpassword") ref.current.password = e;
  // };
  // const confirmPasswordHandler = (e: string, label: string) => {
  //   if (label == "ConfirmPassword") ref.current.password = e;
  // };e

  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.bg}>
        <div className={styles.container}>
          <Link href="/myprofile">
            <ArrowForwardIosIcon
              style={{
                alignItems: "right",
                color: "white",
                marginLeft: "320px",
                marginTop: "30px",
              }}
            />
          </Link>

          <h1
            id="h1"
            style={{ marginTop: "5%", fontSize: "30px", color: "white" }}
          >
            {" "}
            ادیت پروفایل
          </h1>
          <ImageUpload />
          <Input
            type="text"
            placeholder=" نام"
            onChange={changeHandler}
            name="firstname"
            errorMsg={error?.firstname?.[0]}
          />
          <Input
            type="text"
            placeholder=" نام خانوادگی"
            onChange={changeHandler}
            name="lastname"
            errorMsg={error?.lastname?.[0]}
          />
          <Input
            type="text"
            placeholder=" ایمیل"
            onChange={changeHandler}
            name="email"
            errorMsg={error?.email?.[0]}
          />

          {/* <Input
            type="text"
            placeholder="رمز عبور فعلی"
            onChange={changeHandler}
            name="password"
            errorMsg={error?.password?.[0]}
          />
          <Input
            type="text"
            placeholder="رمز عبور جدید"
            onChange={changeHandler}
            name="newPassword"
            errorMsg={error?.newPassword?.[0]}
          />
          <Input
            type="text"
            placeholder="تکرار رمز عبور جدید"
            onChange={changeHandler}
            name="confirmPassword"
            errorMsg={error?.confirmPassword?.[0]}
          /> */}

          <div style={{ marginBottom: "10%" }}>
            <CustomBtn
              key={"login"}
              press={submitHandler}
              style={{
                width: 300,
                height: 40,
                marginTop: 20,
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
