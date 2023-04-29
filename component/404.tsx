import Lottie from "react-lottie";
import * as animationData from "../public/Lottie/404.json";

export default function NotFound() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ffffff",
        position: "fixed",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex:10000
      }}
    >
      <Lottie
        options={{ loop: true, autoplay: true, animationData: animationData }}
        height={800}
        width={600}
      />
      {/* <CustomImage src="/image/logo.png" style={{ width: 120}} /> */}
    </div>
  );
}