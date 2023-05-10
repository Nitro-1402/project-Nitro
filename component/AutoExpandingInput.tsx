import React, { useState, useRef } from "react";
import styles from "../styles/autoExpandinginput.module.css";
import { CSSProperties } from "react";
//check
export default function AutoExpandingInput({
  input = "متن",  style={},

  
}: {
  input: string;style: CSSProperties;
  
}) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    inputRef.current.style.height = "52px";
    inputRef.current.style.width = "100px";
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
  };

  return (
    <input
    style={style}
      className={styles.input}
      lang="fa"
      maxLength={20}
      type="text"
      defaultValue={input?input:''}
      onChange={handleInputChange}
      ref={inputRef}
    />
  );
}
