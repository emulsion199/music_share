import { useEffect, useState } from "react";
import Thumbnails from "./Thumbnails";
import { InputArea, InputAreas } from "./InputAreas";

const ShareBox = () => {
  var [val, setVal] = useState(0.9);
  useEffect(() => {
    setVal(1);
  });

  return (
    <div style={style.shareBox}>
      <div style={style.shareTitle}>공유하기</div>
      <div style={{margin:'0 auto',height:'2px',width:'90%',backgroundColor:'white'}}></div>
      <Thumbnails></Thumbnails>
    </div>
  );
};
export default ShareBox;

const style = {
  shareBox: {
    zIndex: "2",
    position: "fixed",
    borderRadius: "25px",
    top: "20vh",
    left: "25vw",
    width: "50vw",
    height: "65vh",
    backgroundColor: "rgb(230,230,230)",
  },
  shareTitle: {
    textAlign: "center",
    margin: "10px",
    fontWeight: "bold",
    color:'gray',
  },
};
