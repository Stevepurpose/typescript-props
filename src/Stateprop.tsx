//useState future value
import React, { useState } from 'react'

type Someprop={
    name:string,
    age:number
}


const Stateprop = () => {
    //pass prop as state future value and use optional chaining for state object
  const [person,setPerson]=useState<Someprop|null>(null)
  /*const [person,setPerson]=useState<Someprop>({} as Someprop) as an alternative we can write it like this knon 
as type assertion*/

function handlePerson(){
    setPerson({
        name:"josh",
        age:28
    })
}



  return (
    <div>
<p>name:{person?.name}</p>
<p>age:{person?.age}</p>

<button onClick={handlePerson}>show log</button>

    </div>
  )
}

export default Stateprop