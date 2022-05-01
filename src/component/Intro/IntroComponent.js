import { Link } from "react-router-dom"
import logo from '../image/logo.png'
import {useState} from 'react'
import store from "../../index";
import {connect} from 'react-redux'
import {Sharing,AddData, SetData} from "../../redux/MainReducer";
const mapStateToProps = state => ({
    sharing: state.sharing,
    data:state.data,
});
  
const mapDispatchToProps = {
    Sharing,
    AddData,
    SetData
};

const IntroComponent=()=>
{
    const [hover,sethover]=useState(0)
    return(

        <div style={style.background}>
            <div style={{color:'gray',paddingTop:"40vh"}}>나만의 플레이리스트🎶</div>
            <img style={{width:'300px',height:'100px'}} src={logo}></img>
            <Link to="/main" style={{textDecoration:'none'}}>
            <div onMouseOver={()=>{sethover(1)}} onMouseOut={()=>{sethover(0)}}style={hover?{transform:'scale(1.1)',transition:'all ease 0.3s',margin:'0 auto',width:'300px',height:'50px',backgroundColor:'rgb(0,162,255)',color:'white',borderRadius:'100px'}:{margin:'0 auto',width:'300px',height:'50px',backgroundColor:'rgb(0,162,255)',color:'white',borderRadius:'100px',transition:'all ease 0.3s',}}>
                <div style={{paddingTop:'10px',fontSize:'20px'}}>시작하기
                    </div>
                </div>
            
            </Link>
            <div style={{color:'rgb(0,162,255)',paddingTop:'10px',fontWeight:'bold'}}>지금까지 {store.getState()['data'].length}명이 공유했어요!</div>
            <div style={{color:'gray',position:'absolute',bottom:'10px',textAlign:'center',width:'100vw'}}>SoMa 미니 프로젝트 팀 18</div>
            
        </div>
    )
}
const style=
{
    background:{
        margin:'0 auto',
        textAlign:'center',
        width:'100vw',
        height:'100vh',
        overFlowY:'hidden',
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IntroComponent)