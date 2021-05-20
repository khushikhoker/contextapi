import React ,{createContext } from "react";
import './App.css';
import ComponentA from './ComponentA';

const FirstName = createContext();
const LastName= createContext();

function App() {
  return (
    <>
    <FirstName.Provider value={"tanu"}>
    <LastName.Provider value={"kumari"}>
    <ComponentA/>
    </LastName.Provider>
   
    </FirstName.Provider>
     
    </>
  );
}

export default App;
export {FirstName,LastName};
 