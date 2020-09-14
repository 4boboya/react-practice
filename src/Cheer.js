import React from 'react';
import useRate from './useRate'

const Cheer=(props)=>{

    const score = useRate(props.value)

    return(
        <div>
            <h1>波波超棒</h1>
            <div>目前分數：{score}分 還差：{88-props.value}分</div>
            <button value={Number(props.value)+1} onClick={props.onClick}>加一分</button>
            <button value={Number(props.value)+7} onClick={props.onClick}>加七分</button>
            <button value={Number(props.value)+10} onClick={props.onClick}>加十分</button>
            <button value={0} onClick={props.onClick}>歸零</button>
        </div>
    )
}

export default Cheer;