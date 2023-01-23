import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// FOM: Food Order Management
const FOMContext = createContext()

const FOMProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [actualCategory, setActualCategory] = useState({})
  const [selectedProduct, setSelectedProduct] = useState({})
  const [modalState, setmodalState] = useState(false)
  const [order, setOrder] = useState([])

  const router = useRouter()

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
    router.push('/')
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
      toast.success('Pedido actualizado', {autoClose: 1500})
      return
    }

    setOrder([...order, addedProduct])
    toast.success('Agregado al pedido', {autoClose: 1500})
  }

  const handleDeleteProduct = (id) => {
    const updatedOrder = order.filter(p => p.id !== id)
    setOrder(updatedOrder)
    toast.error('Producto eliminado', {autoClose: 1500})
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
        handleOrder,
        handleDeleteProduct
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