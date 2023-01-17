import Image from "next/legacy/image"

const Product = ({ product }) => {

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
          className="w-full bg-green text-yellow uppercase p-2 border-2 border- hover:border-rose-500"
        >Agregar</button>
      </div>
    </div>
  )
}

export default Product