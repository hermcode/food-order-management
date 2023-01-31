import Layout from "../layout/layout"
import useFOM from "../hooks/useFOM"

export default function Total() {

  const { order, customerName, setCustomerName, sendOrder, total} = useFOM()

  const verifyOrder = () => {
    return order.length === 0 ||  customerName === '' || customerName.length < 3
  }

  return (
    <Layout page='Total'>
      <h1 className="text-4xl font-bold text-green uppercase mt-3">Total</h1>
      <p className="text-2xl my-5 font-bold">Confirma tu pedido a continuación</p>

      <form onSubmit={sendOrder}>
        <label className="uppercase font-bold block text-lg mb-2" htmlFor="name">Nombre:</label>
        <input 
          type="text" 
          id="name" 
          className=" w-full bg-yellow text-green font-bold lg:w-1/3 p-3 rounded border-2 border-green placeholder:text-green placeholder:font-medium focus:border-4"
          placeholder="Ingresa tu nombre"
          autoComplete="off"
          value={customerName}
          onChange={(e) => setCustomerName((e.target.value))}
        />

        <p className="mt-10 text-2xl">
          Total a pagar: {""} 
          <span className="font-bold">{`$${total} MXN`}</span>
        </p>

        <div className="mt-5">
          <input
            type="submit"
            className={`${verifyOrder() ? 'bg-green-disabled' : 'bg-green hover:cursor-pointer'} text-yellow p-3 w-full lg:w-1/3 uppercase font-bold`}
            value="Confirmar pedido"
            disabled={verifyOrder()}
          />
        </div>
      </form>
    </Layout>
  )
}