import { useRouter } from "next/router"
import useFOM from "../hooks/useFOM"

const steps = [
  { step: 1, name: 'Menú', url: '/'},
  { step: 2, name: 'Resúmen', url: '/summary'},
  { step: 3, name: 'Datos y Total', url: '/total'}
]
const Steps = () => {

  const router = useRouter()
  const { handleOrderStep, orderStep } = useFOM()

  const calculateOrderProgress = () => {
    let percentage = (orderStep / 3) * 100 - 20
    percentage === 80 ? percentage = 100 : percentage
    return percentage
  }

  return (
    <>
      <div className="flex justify-between mb-5 font-bold text-xl">
        {
          steps.map(step => (
            <button 
              key={step.step}
              onClick={ () => {
                router.push(step.url)
                handleOrderStep(step.step)
              }}
            >
              { step.name }    
            </button>
          ))
        }
      </div>

      <div className="mb-5 bg-gray rounded-full">
        <div 
          className="rounded-full bg-green text-xs leading-none h-4 text-center w-10"
          style={{width: `${calculateOrderProgress()}%`}}
        ></div>
      </div>
    </>
  )
}

export default Steps