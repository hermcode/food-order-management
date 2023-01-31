import Layout from "../layout/layout"
import useFOM from "../hooks/useFOM"
import { ProductOverview } from "../components"

export default function Resumen() {

  const { order } = useFOM()

  return (
    <Layout page='Resúmen'>
      <h1 className="text-4xl font-bold text-green uppercase mt-3">Resúmen</h1>
      <p className="text-2xl my-5 font-bold">Revisa tu pedido</p>

      {
        order.length === 0 ? (
          <p className="text-center text-2xl">No hay elementos en tu carrito</p>
        ) : (
          order.map( product => 
            <ProductOverview 
              key={product.id}
              product={product}
            />
          )
        )
      }
    </Layout>
  )
}