
import MainComponent from "./component/Main/MainComponent";

import { db} from "./firebase";
import { collection, getDocs, getDoc,doc } from "firebase/firestore";
import {connect} from 'react-redux'
import {Sharing,AddData, SetData} from "./redux/MainReducer";
import {Route,Routes} from 'react-router-dom'
import { useEffect } from "react";
import store from "./index";
import IntroComponent from "./component/Intro/IntroComponent";
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
  useEffect(() => {const getDoc=async() =>{
    // db 뒤에 "techInfo"는 정보를 가져올 컬렉션 이름이다.
      const query = await getDocs(collection(db, "notes")); 
      query.forEach((doc) => {
        const FireData=doc.data()['data']
        console.log('a')
        for(var i=0;i<FireData.length;i++)
        {
          FireData[i]['url']=FireData[i]['url'].split(',')
        }
        store.dispatch(SetData(FireData))

      ;
      })}
      getDoc()
    },[]);
  
  return(
    <div >
      <Routes>
      <Route path="/" element={<IntroComponent/>} />
      <Route path="/main" element={<MainComponent />} />
    </Routes>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
