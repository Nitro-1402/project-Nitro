import { CSSProperties, memo, useCallback } from "react";
import { useState } from "react";
import ReactLoading from "react-loading";
interface BtnType {
  text: string;
  style: CSSProperties;
  textStyle: CSSProperties;
  press:()=>Promise<any>|void;
}
function CustomBtn({ text, style,textStyle,press }: BtnType) {
  const [loading, setloading] = useState<boolean>(false);
  const onPress=async()=>{
    setloading(true)
    await press()
    setloading(false)
}
  return (
    <div
    className='hoverBtn'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        opacity: loading ? 0.5 : 1,
        ...style,
      }}
      onClick={onPress}
    >
      {loading ? <ReactLoading type="spin" width={20} height={20} /> : <h4 style={textStyle}>{text}</h4>}
    </div>
  );
}
export default CustomBtn