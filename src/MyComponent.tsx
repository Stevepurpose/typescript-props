import React from 'react'

type MyProp={
    someData:number[]
}

//no destructure props
const MyComponent = (props:MyProp) => {
  return (
    <div>
{props.someData.map((elem,index)=>(
    <div key={index}>
      <p> {elem}</p>  
    </div>
))}

    </div>
  )
}

export default MyComponent