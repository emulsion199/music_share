import { useEffect, useState } from "react";
import ShareCompleteButton from "./ShareCompleteButton";
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
      <hr />
      <Thumbnails></Thumbnails>
      <div style={style.shareSubTitle}>&nbsp;&nbsp;유튜브 링크: </div>
      <InputArea></InputArea>
      <div style={style.shareSubTitle}>&nbsp;&nbsp;태그: </div>
      <InputAreas></InputAreas>
      <ShareCompleteButton></ShareCompleteButton>
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
    height: "60vh",
    backgroundColor: "white",
  },
  shareTitle: {
    textAlign: "center",
    margin: "10px",
    fontWeight: "bold",
  },
};
