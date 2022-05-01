import {useState} from 'react'
//redux//
import {connect} from 'react-redux'
import {Sharing} from "../../redux/MainReducer";
import store from '../../index'

const mapStateToProps = state => ({
    sharing: state.sharing,
});
  
const mapDispatchToProps = {
    Sharing
};
const ShareButton=()=>
{
    const [hover,sethover]=useState(0)
    return(
        <div onMouseOver={()=>{sethover(1)}} onMouseOut={()=>{sethover(0)}}style={hover?style.hovershareButton:style.shareButton} onClick={()=>{store.dispatch(Sharing(1))}} >

            <div style={style.shareButtonText}>나도 공유하기!</div>
        </div>
    )
}
const style={
    shareButton:{
        display:'table',
        margin:"0 auto",
        backgroundColor:'rgb(0,162,255)',
        width:'50vw',
        height:'80px',
        textAlign:'center',
        borderRadius:'100px',
        transition: 'all ease 0.3s',
    },
    hovershareButton:{
        display:'table',
        margin:"0 auto",
        backgroundColor:'rgb(0,162,255)',
        width:'50vw',
        height:'80px',
        transform: 'scale(1.05)',
        transition: 'all ease 0.3s',
        textAlign:'center',
        borderRadius:'100px',
    },
    
    
    shareButtonText:{
        display:'table-cell',
        color:'white',
        fontSize:'20px',
        verticalAlign:'middle',
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(ShareButton)