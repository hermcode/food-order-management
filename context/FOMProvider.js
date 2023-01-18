import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";

// FOM: Food Order Management
const FOMContext = createContext()

const FOMProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [actualCategory, setActualCategory] = useState({})
  const [selectedProduct, setSelectedProduct] = useState({})
  const [modalState, setmodalState] = useState(false)
  const [order, setOrder] = useState([])

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

  const handleOrder = ( addedProduct ) => {
    if(order.some( p => p.id === addedProduct.id)) {
      const updatedOrder = order.map( p => p.id === addedProduct.id ? addedProduct : p)
      setOrder(updatedOrder)
      return
    }

    setOrder([...order, addedProduct])
    toast.success('Agregado al pedido', {autoClose: 1500})
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
        modalState,
        order,
        handleOrder
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