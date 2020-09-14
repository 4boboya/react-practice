import React, {useState ,useEffect} from 'react';

const Baby=(props)=>{
    const [isGetData,setGetData] = useState(false)
    const [isRightDad,setRightDad] = useState(false)
    const [Mom,setMom] = useState("")

    const ajax=()=>{
        setTimeout(()=>{
            setGetData(true)
            setMom("多多")
        },3000)
    }

    const checkDad=()=>{
        if(props.Dad === "Chang")
            setRightDad(true)
        else
            setRightDad(false)
    }

    useEffect(()=>{
        ajax()
        document.getElementById("talk").append("爸！")
        
        return(()=>{
            document.getElementById("talk").innerHTML=""
        })
    },[])

    useEffect(()=>{
        checkDad()
    },[props.Dad])
    
    if(isRightDad === false)
        return(
            <div>
                {props.Dad}爸爸??<br/>
                他媽誰
            </div>
        )
    else if(isGetData === false)
        return(
            <div id="msg">
                讀取中
            </div>
        )
    else
        return(
            <div id="msg">
                他媽是{Mom}
            </div>
        )
}

export default Baby;