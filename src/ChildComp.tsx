import React from 'react'

interface ChildProp{
    topic:string
}

//prop destructuring
const ChildComp = ({topic}:ChildProp) => {
  return (
    <div>
<h1>{topic}</h1>
    </div>
  )
}

export default ChildComp