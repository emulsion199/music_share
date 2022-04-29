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

const ShareCompleteButton = () => {
  return (
    <div
      style={style.shareCompleteButton}
      onClick={() => {
        store.dispatch(AddData("a"));
        store.dispatch(Sharing(0));
      }}
    >
      <div style={style.shareCompleteButtonText}>나도 공유하기</div>
    </div>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareCompleteButton);

const style = {
  shareCompleteButton: {
    margin: "30px auto",
    width: "97%",
    height: "50px",
    backgroundColor: "skyblue",
    borderRadius: "100px",
    display: "flex",
    alignItems: "center",
  },
  shareCompleteButtonText: {
    color: "white",
    fontSize: "20px",
    margin: "0 auto",
  },
};
