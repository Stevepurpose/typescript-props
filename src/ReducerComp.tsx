import React, { useReducer } from 'react'

const initialState={
    count:0
}

type ActionTypes={
    type:'increment'| 'decrement'  /*use 'increment'| 'decrement' instead of string for strict action type 
    checking because adding another string apart from increment and decrement  to dispatch will not show an error */
    payload:number
}

type stateTypes={
    count:number
}





function reducer(state:stateTypes,action:ActionTypes){
    
    switch(action.type){
    case 'increment':
        return {count:state.count + action.payload}
    case 'decrement':
        return {count:state.count - action.payload}
    default:
        return state
     

    }
}




const ReducerComp = () => {
    const[state,dispatch]=useReducer(reducer,initialState)
  function handleIncrease(){
    dispatch({type:'increment',payload:1})
  }

  function handleDecrease(){
    dispatch({type:'decrement',payload:1})
  }



  return (
    <div>
  <button onClick={handleIncrease}>+</button>
  {state.count}
  <button onClick={handleDecrease}>-</button>
    </div>
  )
}

export default ReducerComp