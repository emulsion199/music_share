import IntroComponent from "./component/Intro/IntroComponent"
import MainComponent from "./component/Main/MainComponent";
import ReactPlayer from "react-player";
import app  from "./firebase";
import { db} from "./firebase";
import { collection, getDocs, getDoc,doc } from "firebase/firestore";
import {connect} from 'react-redux'
import {Sharing,AddData, SetData} from "./redux/MainReducer";
import store from './index'
import axios from 'axios'

const mapStateToProps = state => ({
    sharing: state.sharing,
    data:state.data,
});
  
const mapDispatchToProps = {
    Sharing,
    AddData,
    SetData
};

const App=()=>
{
  axios.post('http://0.0.0.0:3200').then((response)=>{
    console.log(response)
  })  
  return(
    <div >
        <MainComponent></MainComponent>
        
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
