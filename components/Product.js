import Image from "next/legacy/image"
import useFOM from "../hooks/useFOM"

const Product = ({ product }) => {

  const { handleSelectedProduct, handleChangeModal } = useFOM()
  const { name, image, price } = product

  return (
    <div className="mb-5">
      <Image 
        src={`/assets/img/${image}.jpg`}
        alt={`${name} image`}
        width={200}
        height={200}
        layout="responsive"
        priority
      />
      <div>
        <p className="text-lg font-bold mt-3">{name}</p>
        <p className="font-black text-xl text-green mb-3">${price} MXN</p>
        <button 
          type="button"
          className="w-full font-bold bg-green text-yellow uppercase p-2 border-2 border- hover:border-rose-500"
          onClick={ () => {
            handleChangeModal()
            handleSelectedProduct(product)
          }}
        >Agregar</button>
      </div>
    </div>
  )
}

export default Product