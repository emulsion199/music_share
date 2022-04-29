const InputArea = () => {
  return (
    <div>
      <input type="text" name="youtube" style={style.inputArea}></input>
    </div>
  );
};

const InputAreas = () => {
  return (
    <div style={style.inputAreas}>
      <input type="text" name="tag" style={style.smallInputArea}></input>
      <input type="text" name="tag" style={style.smallInputArea}></input>
      <div style={style.plus}>+</div>
    </div>
  );
};

export { InputArea, InputAreas };

const style = {
  inputArea: {
    margin: "0 10px",
    width: "95%",
    borderRadius: "10px",
    height: "30px",
  },
  smallInputArea: {
    margin: "0 10px",
    width: "100px",
    borderRadius: "10px",
    height: "30px",
  },
  inputAreas: {
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  },
  plus: {
    width: "100px",
    margin: "0 10px",
    textAlign: "center",
    fontSize: "25px",
    backgroundColor: "lightgray",
    color: "white",
    borderRadius: "10px",
  },
};
