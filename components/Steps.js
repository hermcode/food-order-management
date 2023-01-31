import { useRouter } from "next/router"

const steps = [
  { step: 1, name: 'Menú', url: '/'},
  { step: 2, name: 'Resúmen', url: '/resumen'},
  { step: 3, name: 'Datos y Total', url: '/total'}
]

const Steps = () => {

  const router = useRouter()

  const calculateOrderProgress = () => {

    let percentage

    switch (router.pathname) {
      case "/":
        percentage = 2
        break;

      case "/resumen":
        percentage = 50
        break;
      
      case "/total":
        percentage = 100
        break
    }

    return percentage
  }

  return (
    <>
      <div className="flex justify-between mb-5 font-bold text-xl underline-offset-1">
        {
          steps.map(step => (
            <button 
              key={step.step}
              onClick={ () => {
                router.push(step.url)
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