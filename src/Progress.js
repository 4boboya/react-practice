import React,{Component, useState} from 'react';
import './App.css';

const Progress =()=>{
    const [percent, changepercent] = useState("30%");
    /*變數型態 [state變數名稱, setState函式名稱] = useState(state變數初始值) */
    return(
        <div>
            <div className="progress-back" style={{backgroundColor:"rgba(0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
              <div className="progress-bar" style={{backgroundColor:"#fe5196",width:percent,height:"100%",borderRadius:"10px"}}/>
            </div>
            <button onClick={()=>changepercent("70%")}>轉換</button>
        </div>
    );
      
}

export default Progress;