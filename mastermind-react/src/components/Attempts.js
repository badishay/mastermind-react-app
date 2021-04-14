import React from 'react'
import Attempt from './Attempt'
function Attempts() {
    const arr=[1,2,3,4,5,6,7,8,9,10]
    return (
        <div>
            {arr.map((x,index)=><div><Attempt  key={index} id={index+1}/></div>)}
        </div>
    )
}

export default Attempts
