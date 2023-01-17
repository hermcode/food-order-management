import Image from "next/legacy/image"
import useFOM from "../hooks/useFOM"

export const Category = ({ category }) => {

  const { name, icon, id } = category
  const { actualCategory, handleClickCategory} = useFOM()

  return (
    <button 
      className={`${actualCategory?.id === id ? 'border-r-4 border-r-green' : ''} flex items-center gap-4 p-3 w-full hover:bg-nd-yellow hover:cursor-pointer`}
      onClick={() => handleClickCategory(id)}
    >
      <Image 
        width={70}
        height={70}
        src={`/assets/img/icono_${icon}.svg`}
        alt={`${icon} icon`}
      />
      <p
        type="button"
        className="text-xl font-bold "
      >
        {name}
      </p>
    </button>
  )
}
