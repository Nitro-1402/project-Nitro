import { useEffect, useRef, useImperativeHandle, useState } from "react";
import Lottie from "react-lottie";
import CustomImage from "./CustomImage";
interface Loader {
  reff: any;
}
export default function LoaderEvent({ reff }: Loader) {
  const [loading, setloading] = useState<boolean>(true);
  useImperativeHandle(
    reff,
    () => ({
      show() {
        setloading(true);
      },
      hide() {
        setloading(false);
      },
    }),
    []
  );
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        position: "fixed",
        display: !loading ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex:20000,
        top:0
      }}
    >
      <CustomImage src="/image/logo.png" style={{ width: 250}} />
    </div>
  );
}