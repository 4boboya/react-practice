import React,{useEffect, useState} from 'react';
import './App.css';
import ProgressDIY from './ProgressDIY';
import Cheer from './Cheer'

const App=()=>{

  const [value ,setValue] = useState(10)
  const [score ,setScore] = useState(0)

  return(
    <div>
      <ProgressDIY value={value} onClick={(e)=>{setValue(e.target.value)}}/>,
      <Cheer value={score} onClick={(e)=>{setScore(e.target.value)}}/>
    </div>
  )
}
// git 流程
// git add *
// git commit -m''
// git push

export default App;
