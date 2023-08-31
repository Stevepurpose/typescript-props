import './App.css'
import ChildComp from './ChildComp'
import EventComponent from './EventComponent'
import MyComponent from './MyComponent'
import ObjComp from './ObjComp'
import Stateprop from './Stateprop'
import ReducerComp from './ReducerComp'

function App() {
  const topic="figures"
 const someData:number[]=[4,6,7,9] 
let myObj={
  name:"steve",
  age:25
}

  return (
    <>
     <ChildComp topic={topic}/>
  <MyComponent someData={someData}/>
  <h1>person</h1>
  <ObjComp myObj={myObj}/>
  <EventComponent />
    <Stateprop/>
  <ReducerComp/>
  
    </>
  )
}

export default App
