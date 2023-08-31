import React from 'react'

type ObjProp={
    myObj:{
        name:string
        age:number
    }
}

const ObjComp = (props:ObjProp) => {
 //no props destructure
 
    return (
    <div>
<p>{props.myObj.name}</p>
<p>{props.myObj.age}</p>
    </div>
  )
}

export default ObjComp