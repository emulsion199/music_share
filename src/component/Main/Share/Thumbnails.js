import Thumbnail from "../Thumbnail";
import Slider from 'react-slick'
import {useState,useRef} from 'react'

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

const Thumbnails = () => {
  
  const parsing= /v=[^&]+/
  const iu=useRef()
  const slider= useRef()
  const [au,setau]=useState("")
  const [desc,setdesc]=useState("")
  const [url,seturl]=useState([])
  const [nick,setnick]=useState('')
  const [realurl,setrealurl]=useState([])
  const settings = {
    initialState: 1,
    dots: true,
    speed: 200,
    slidesToShow: url.length>2?3:url.length,
    className:'center',
    slickArrowColor:'red'
  }
  const addUrl=()=>
  {
 
    const field=parsing.exec(iu.current.value)
    
    
    if(field!=null)
    {
      const part=field[0].slice(2)
      const newurl=`https://img.youtube.com/vi/${part}/2.jpg`
      seturl([...url,newurl])
      setrealurl([...realurl,au])
      slider.current.slickGoTo(url.length);
    }
    else{
      alert('제대로된 유튜브 url을 입력해주세요!')
    }
    setau('')
  }
  return (
    <div style={{ margin: "10px" }}>

        <div style={{width:'90%',margin:'20px'}}>
          <Slider {...settings} ref={slider}>
                {url.map((idx)=>{return(<Thumbnail url={idx}></Thumbnail>)})}
          </Slider>

    
            
          </div>
          <div style={{margin:'10px', color:'gray'}}>
            유튜브 링크
          </div>
          <input onKeyDown={(e)=>{if(e.key=='Enter'){ addUrl()}}} ref={iu} style={{textIndent:'10px',margin:'0 auto',height:'30px',borderRadius:'10px',width:'100%',border:'none'}} onChange={(e)=>{setau(e.target.value)}}  value={au} placeholder='원하는 유튜브 주소를 적고 엔터를 눌러 추가하세요!'></input>
          <div style={{margin:'10px', color:'gray'}}>
            닉네임
          </div>
          <input maxLength={10} style={{textIndent:'10px',margin:'0 auto',height:'30px',borderRadius:'10px',width:'100%',border:'none'}} onChange={(e)=>{setnick(e.target.value)}}  value={nick} placeholder='자신을 소개할 닉네임을 남겨주세요!(최대 10글자)'></input>
          <div style={{margin:'10px', color:'gray'}}>
            소개 글
          </div>
          <input maxLength={100}  style={{textIndent:'10px',margin:'0 auto',height:'30px',borderRadius:'10px',width:'100%',border:'none'}} onChange={(e)=>{setdesc(e.target.value)}}  value={desc} placeholder='내 플레이리스트를 표현할 간단한 소개 말을 적어주세요!'></input>
          <div
          
      style={style.shareCompleteButton}
      onClick={() => {
        if(realurl.length==0)
        {
          alert('최소 1개 이상의 노래를 올려주세요!')
        }
        else if(nick=='')
        {
          alert('닉네임을 설정해주세요!')
        }
        else{
        store.dispatch(AddData({'url':realurl, 'name':nick,'desc':desc}));
        store.dispatch(Sharing(0));
        }
      }}
    >
      <div style={style.shareCompleteButtonText}>나도 공유하기</div>
    </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Thumbnails);

const style = {
  thumbnails: {
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  plus: {
    position:'relative',
    left:'20%',
    width: "50%",
    margin:'30px',
    textAlign: "center",
    fontSize: "60px",
    backgroundColor: "lightgray",
    color: "white",
    borderRadius: "15px",
  },
  shareCompleteButton: {
    position:'absolute',
    width: "95%",
    height: "50px",
    backgroundColor: 'rgb(0,162,255)',
    borderRadius: "100px",
    display: "flex",
    alignItems: "center",
    bottom:'10px',
  },
  shareCompleteButtonText: {
    color: "white",
    fontSize: "20px",
    margin: "0 auto",
  },
};
