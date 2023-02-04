import axios from "axios";
import useSWR from 'swr'
import AdminLayout from "../layout/AdminLayout"
import { OrderDetails } from "../components";

export default function Admin() {

  const fetcher = () => axios('/api/orders').then( data => data.data)
  const { data, error, isLoading } = useSWR('/api/user', fetcher)

  return (
    <AdminLayout page="Administración">
      <h1 className=" text-4xl uppercase font-bold text-green">Panel de Administración</h1>
      <p className="text-xl my-5 font-bold">Administra las órdenes</p>

      {
        data && data.length ? data.map((order) => 
          <OrderDetails 
            key={order.id} 
            order={order}
          />
        ) :
        <p>No hay órdenes pendientes</p>
      }
    </AdminLayout>
  )
}