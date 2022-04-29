import PlayComponent from "./PlayComponent"
import DescComponent from "./DescComponent"
import Thumbnail from "./Thumbnail"
import Slider from 'react-slick'
import {useState,useEffect,useRef} from 'react'
import ReactPlayer from "react-player"

const Box=(props)=>
{
    const utubeUrl=props.url
    const nick=props.name
    const desc=props.desc
    const settings = {
        dots: true,
        speed: 200,
        slidesToShow: utubeUrl.length>2?3:utubeUrl.length,
        centerMode: true,
        className:'center',
        slickArrowColor:'red'
      };
      const addUrl=(url)=>
  {
    const parsing= /v=[^&]+/
    const field=parsing.exec(url)
      const part=field[0].slice(2)
      const newurl=`https://www.youtube.com/embed/${part}`
      return newurl
  }
  const movebox=(e)=>
  {
      blackbox.current.style.left=e.clientX+'px'
      blackbox.current.style.top=e.clientY+10+'px'
  }
  const blackbox=useRef()
 
  
    const [over,setOver]=useState(0)
    useEffect(()=>{
        if(over==0){
        document.addEventListener('mousemove',movebox)
    }
else{
    document.removeEventListener('mousemove',movebox)
}},[over])
    const [click,setClick]=useState(-1)
    return(
        <div className='Lower' style={{margin:'10px'}}>
            <div style={{margin:'10px',backgroundColor:'rgb(240,240,240)',height:'200px', width:'50vw', margin:'0 auto', borderRadius:'50px'}}>
            
            <div style={{paddingTop:'20px',width:'90%',margin:'0 auto'}}>
            <div style={{display:'inline', color:'gray', marginBottom:'10px'}}>{nick}님의 플레이리스트</div>
            <div onMouseOver={()=>{setOver(1)}} onMouseOut={()=>{setOver(0)}} style={{display:'inline', color:'rgb(0,162,255)', userSelect:'none'}}>  정보</div>
            <div ref={blackbox} style={over?{maxWidth:'300px',border:'1px white solid', color:'white',visibility:'visible',zIndex:'2', position:'absolute', backgroundColor:'rgba(0,0,0,0.5)',width:'auto',height:'auto',padding:'10px'}:{visibility:'hidden', position:'absolute', backgroundColor:'rgba(0,0,0,0.5)',width:'50px',height:'50px'}}>{desc}</div>
            <hr/>
            <Slider {...settings}>
                {utubeUrl.map((idx)=>{return(<iframe
                width="100"
                height="100"
  src={addUrl(idx)}    // 자동 재생 on
/>)})}
            </Slider>
            </div>
            
           
            </div>
            
            


        </div>
    )
}
export default Box
const style=
{
    
}