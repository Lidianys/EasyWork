import React, {createContext, useState} from 'react'

export const UserContexts = createContext();

export const UseStates = ({children}) => {
    const [cart, setCart] = useState([]);
    const [name, setName] = useState("");
    const [mesa, setMesa] = useState("");

return(
 < UserContexts.Provider value={{
   cart, 
   setCart,
   name,
    setName,
    mesa,
    setMesa,}}>
      
  {children}
 </ UserContexts.Provider>
)
}