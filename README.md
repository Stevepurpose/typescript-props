# React + TypeScript + Props
In this repository I decided to practise with props as far as working with typescript and react.
I decided to code the different ways we use props,objects,arrays,components as props.I also alternated
between using props in destructue or without destructure.Also in one of the components `Stateprop.tsx` 
I passed propas state future value to my useState hook: In this scenerio,state value starts as null but 
we neededto specify future typesfor the properties in that state otherwise TypeScript picks up an error.
Also in the `ReducerComp.tsx` noticed how I added types to the reducer function of the useReducer hook
App.tsx is parent component where we have our variables and they are drilled to othercomponents.
I used Inference, as  far as functional components are concerned.
vite is the build tool used for this.