import {useState,useEffect,useRef}from 'react';

const useRate =(value)=>{
    const [percent,setpercent] = useState(10)
    const mounted = useRef()
    const tm = useRef()
    const tmT = useRef()

    useEffect(() => {
        if(!mounted.current){
            setpercent(value)
            mounted.current=true
        }else{
            if(percent>value){
                if(tm.current){
                    clearTimeout(tm.current)
                }
            tmT.current=setTimeout(() => {setpercent(percent-1)}, 20)
            }else if(percent<value){
                if(tmT.current){
                    clearTimeout(tmT.current)
                }
            tm.current=setTimeout(() => {setpercent(percent+1)},20)
            }
        }
    }, [value,percent]);

    return percent
}

export default useRate;