import { useState, useEffect, createContext } from "react";

// FOM: Food Order Management
const FOMContext = createContext()

const FOMProvider = ({ children }) => {
  return (
    <FOMContext.Provider
      value={{

      }}
    >
      { children }
    </FOMContext.Provider>
  )
}

export {
  FOMProvider
}

export default FOMContext