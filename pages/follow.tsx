import React, { useState } from "react";
import Navbar from "@/component/navbar/Navbar";
import styles from "../styles/Follow.module.css";
import { handleClientScriptLoad } from "next/script";
import Item from "@/component/FilmItem";

function App({ menu }: { menu?: string[] }) {
  const [select, setselect] = useState<number>(0);
  const [isTrue, setIsTrue] = useState(false);
  const HandleFolow = () => {
    setIsTrue(true);
  };
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.Mn}>
          {menu?.map((e: string, index: number) => {
            return (
              <h2
                key={index}
                style={{
                  padding: 5,
                  borderBottom: index == select ? "2px solid #FFA500" : "",
                  cursor: "pointer",
                  margin: "0 20px",
                  marginTop:"20px",
                  color: "white",

                }}
                className={styles.menuItem}
                onClick={() => {
                  setselect(index);
                  if (index == 0) {
                    HandleFolow();
                  } else {
                    setIsTrue(false);
                  }
                }}
              >
                {e}
              </h2>
            );
          })}
        </div>
      
      {!isTrue && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 15,
            backgroundColor: "#0c1012",
          }}
        >
          <Item image={"/image/manifest.jpg"} name={"لیست پرواز"} />
          <Item image={"/image/good-doctor.jpeg"} name={"دکتر خوب"} />
        </div>
      )}
      </div>
    </>
  );
}

export default function Follow() {
  return (
    <>
      <Navbar />
      <div className={styles.Box}>
        <App menu={["دنبال شونده ها", "دنبال کننده ها"]} />
      </div>
    </>
  );
}
