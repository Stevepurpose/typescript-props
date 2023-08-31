import React,{ChangeEvent,MouseEvent} from 'react'





const EventComponent = () =>{
 
    const handleClick=(event:MouseEvent<HTMLButtonElement>)=>{
        console.log("hello world",event)
      }
    
    

  return (
    <div>
<button onClick={handleClick}>submit</button>
    </div>
  )
}

export default EventComponent