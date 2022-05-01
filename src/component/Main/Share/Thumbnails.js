import Thumbnail from "../Thumbnail";
import Slider from 'react-slick'
import {useState,useRef} from 'react'
import { db} from "../../../firebase";
import { collection, updateDoc,doc,getDocs } from "firebase/firestore";
//redux//
import { connect } from "react-redux";
import { AddData, Sharing,SetData } from "../../../redux/MainReducer";
import store from "../../../index";

const mapStateToProps = (state) => ({
  sharing: state.sharing,
});

const mapDispatchToProps = {
  Sharing,
  AddData,
  SetData,
};

const Thumbnails = () => {

    const [firestate,setfirestate]=useState(0)
    const realDoc=async() =>{
      // db 뒤에 "techInfo"는 정보를 가져올 컬렉션 이름이다.
        const query = await getDocs(collection(db, "notes")); 
        query.forEach( async (docs) => {
          const tempdata=docs.data()['data']
          console.log(tempdata)
          var urls=""
            for(var i=0;i<realurl.length;i++)
            {
              urls+=realurl[i]+','
            }
          const docRef = doc(db, "notes", "1");
          const k=[{'url':urls.slice(0,urls.length-1),'desc':desc,'name':nick}].concat(tempdata)
          if(k!=undefined)
          {
            await updateDoc(docRef, {data:k})
            const query2 = await getDocs(collection(db, "notes")); 
        query2.forEach((doc) => {
          const FireData=doc.data()['data']
          for(var i=0;i<FireData.length;i++)
          {
            FireData[i]['url']=FireData[i]['url'].split(',')
          }
          store.dispatch(SetData(FireData))
        ;
        })
          }
          ;
        })
        
      }
  
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
  const [hover,sethover]=useState(0)
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
          
      style={hover?style.hovershareCompleteButton:style.shareCompleteButton}
      onMouseOver={()=>{sethover(1)}} onMouseOut={()=>{sethover(0)}} 
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
          
          realDoc()
          
        store.dispatch(Sharing(0));
        }
      }}
    >
      <div style={style.shareCompleteButtonText}>공유하기</div>
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
    transition:' all ease 0.3s',
    position:'absolute',
    width: "97%",
    height: "50px",
    backgroundColor: 'rgb(0,162,255)',
    borderRadius: "100px",
    display: "flex",
    alignItems: "center",
    bottom:'10px',
  },
  hovershareCompleteButton: {
    transition:' all ease 0.3s',
    position:'absolute',
    width: "97%",
    height: "50px",
    backgroundColor: 'rgba(0,190,255)',
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
