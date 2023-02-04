
import Image from "next/legacy/image"

const OrderDetails = ({order}) => {

  const {id, customerName, total, orderDetails} = order

  const completeOrder = () => {
    console.log('Completando')
  }

  return (
    <div className="shadow-xl p-5 md:p-10 mb-5">
      <h3 className="text-2xl font-bold uppercase">
        Orden: <span className="text-green">#{id}</span>
      </h3>
      <p><span className="font-bold">Cliente: </span>{customerName}</p>

      <div>
        { orderDetails?.map(o => (
            <div key={o.id} className="py-3 flex border-b border-b-gray last-of-type:border-0 items-center">
              <div className="w-20 md:w-32">
                <Image 
                  width={400}
                  height={500}
                  src={`/assets/img/${o.image}.jpg`}
                  alt={`Imagen de ${o.name}`}
                />
              </div>
              <div className="px-3">
                <h4 className="text-green font-bold text-xl">{o.name}</h4>
                <p>
                  <span className="font-bold">Cantidad: </span> 
                  {o.amount}
                </p>
              </div>
            </div>
          ))
        }
      </div>

      <div className="md:flex md:items-center md:justify-between">
        <p className="text-xl font-bold">
          Total a pagar: <span className="text-green">${total} MXN</span>
        </p>
        <button 
          className="mt-5 md:mt-0 w-full md:w-auto bg-green text-yellow p-3 font-bold uppercase"
          type="button"
          onClick={completeOrder}
        >
          Completar orden
        </button>
      </div>
    </div>
  )
}

export default OrderDetails