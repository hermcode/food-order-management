import Image from "next/image"

export const Sidebar = () => {
  return (
    <>
      <Image  
        width={200}
        height={100}
        src="/assets/img/logo.svg"
        alt="Food Order Manager Logo"
      />
    </>
  )
}
