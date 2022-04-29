import ShareBox from "./ShareBox";
//redux//
import { connect } from "react-redux";
import { AddData, Sharing } from "../../../redux/MainReducer";
import store from "../../../index";

const mapStateToProps = (state) => ({
  sharing: state.sharing,
});

const mapDispatchToProps = {
  Sharing,
  AddData,
};
const ShareComponent = () => {
  return (
    <div>
      <ShareBox></ShareBox>
      <div
        style={style.shareBackground}
        onClick={() => {
          store.dispatch(Sharing(0));
        }}
      ></div>
    </div>
  );
};

const style = {
  shareBackground: {
    zIndex: "1",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    top: "0",
    left: "0",
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(ShareComponent);
