import Box from './Box'
import ShareComponent from './Share/ShareComponent'
import ShareButton from './ShareButton'
import {useState} from 'react'
//redux//
import {connect} from 'react-redux'
import {Sharing} from "../../redux/MainReducer";
import store from '../../index'
import DescComponent from './DescComponent';

const mapStateToProps = state => ({
    sharing: state.sharing,
    data:state.data,
});
  
const mapDispatchToProps = {
    Sharing
};

const MainComponent=()=>
{
    const [page,setPage]=useState(0)
    const db=store.getState()['data']
    const database=db.slice(page*3,(page+1)*3)
    const [lhover,setlhover]=useState(0)
    const [rhover,setrhover]=useState(0)

    return(
        <div style={style.background}>
            {store.getState()['sharing']?<div className='Upper'><ShareComponent></ShareComponent></div>:null}
            {database.map((idx)=>{return(<Box url={idx.url} name={idx.name} desc={idx.desc}></Box>)})}
            <ShareButton></ShareButton>
            <div onMouseOver={()=>{setlhover(1)}} onMouseOut={()=>{setlhover(0)}} onClick={()=>{
                if(page>0){
                setPage(page-1)}}}style={lhover?style.hoverleft_button:style.left_button}>◀</div>
            <div onMouseOver={()=>{setrhover(1)}} onMouseOut={()=>{setrhover(0)}} onClick={()=>{
                if(db.length-(page+1)*3>0)
                setPage(page+1)}}style={rhover?style.hoverright_button:style.right_button}>▶</div>
        </div>
    )
}
const style=
{
    background:{
        gridTemplateRows:'1fr',
        backgroundColor:'white',
        width:'100vw',
        height:'100vh',
    },
    left_button:
    {
        transition:'all ease 0.3s',userSelect:'none',textAlign:'center',color:'white',fontSize:'40px',width:'50px',height:'50px',position:'fixed',left:'10px',top:'50%', backgroundColor:'rgb(230,230,230)',borderRadius:'100px'
    },
    hoverleft_button:
    {
        transition:'all ease 0.3s',transform:'scale(1.2)', userSelect:'none',textAlign:'center',color:'white',fontSize:'40px',width:'50px',height:'50px',position:'fixed',left:'10px',top:'50%', backgroundColor:'rgb(230,230,230)',borderRadius:'100px'
    },
    hoverright_button:
    {
        transition:'all ease 0.3s',transform:'scale(1.2)',userSelect:'none',textAlign:'center',color:'white',fontSize:'40px',width:'50px',height:'50px',position:'fixed',right:'10px',top:'50%', backgroundColor:'rgb(230,230,230)',borderRadius:'100px'
    },
    right_button:
    {
        transition:'all ease 0.3s',userSelect:'none',textAlign:'center',color:'white',fontSize:'40px',width:'50px',height:'50px',position:'fixed',right:'10px',top:'50%', backgroundColor:'rgb(230,230,230)',borderRadius:'100px'
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainComponent)