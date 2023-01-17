import Image from "next/legacy/image"
import useFOM from "../hooks/useFOM"

import { Category } from "./Category"

export const Sidebar = () => {

  const { categories } = useFOM()

  return (
    <>
      <div className="flex justify-center mt-5">
        <Image  
          width={100}
          height={100}
          src="/assets/img/logo.svg"
          alt="Food Order Manager Logo"
          className="object-center"
        />
      </div>

      <nav className="mt-10">
        {
          categories.map(category => (
            <Category 
              key={category.id}
              category={category}
            />
          ))
        }
      </nav>
    </>
  )
}
