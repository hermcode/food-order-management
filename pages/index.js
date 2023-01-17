import Product from "../components/Product"
import useFOM from "../hooks/useFOM"
import Layout from "../layout/layout"

export default function Home() {

  const { actualCategory } = useFOM()
  console.log()

  return (
    <Layout page={`${actualCategory?.name}`}>
      <h1 className=" text-4xl uppercase font-bold text-green">{`${actualCategory?.name}`}</h1>
      <p className="text-xl my-5 font-bold">Selecciona los productos que deseas</p>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        { 
          actualCategory?.products?.map( product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </ Layout>
  )
}
