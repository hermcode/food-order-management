import axios from "axios";
import { useState, useEffect, createContext } from "react";

// FOM: Food Order Management
const FOMContext = createContext()

const FOMProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [actualCategory, setActualCategory] = useState({})
  const [selectedProduct, setSelectedProduct] = useState({})
  const [modalState, setmodalState] = useState(false)

  const getCategories = async () => {
    const { data } = await axios('/api/categories')
    setCategories(data) 
  }
  
  useEffect(() => {
    getCategories(categories)
  }, [])

  useEffect(() => {
    setActualCategory(categories[0])
  }, [categories])


  const handleClickCategory = (id) => {
    const category = categories.filter( c => c.id === id)
    setActualCategory(category[0])
  }

  const handleSelectedProduct = product => {
    setSelectedProduct(product)
  }

  const handleChangeModal = () => {
    setmodalState(!modalState)
  }

  return (
    <FOMContext.Provider
      value={{
        categories,
        actualCategory,
        handleClickCategory,
        handleSelectedProduct,
        handleChangeModal,
        selectedProduct,
        modalState
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