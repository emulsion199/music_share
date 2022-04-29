import Thumbnail from "../Thumbnail";

const utubeUrl = [
  "https://www.youtube.com/watch?v=B1Mj0MwiwCE",
  "https://www.youtube.com/watch?v=B1Mj0MwiwCE",
];

const Thumbnails = () => {
  return (
    <div style={{ margin: "10px" }}>
      <div style={style.thumbnails}>
        {utubeUrl.map((idx) => {
          return <Thumbnail url={idx}></Thumbnail>;
        })}
        <div style={style.plus}>+</div>
      </div>
    </div>
  );
};

export default Thumbnails;

const style = {
  thumbnails: {
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  plus: {
    width: "100px",
    height: "100px",
    margin: "30px",
    textAlign: "center",
    fontSize: "60px",
    backgroundColor: "lightgray",
    color: "white",
    borderRadius: "15px",
  },
};
