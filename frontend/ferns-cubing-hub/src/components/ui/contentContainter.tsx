import type { ReactNode } from "react"
import Navbar from "./navbar"

interface SetProps{
  children?: ReactNode
}

export default function ContentContainer({children}:SetProps){
  return (
    <div className="h-screen bg-linear-to-r from-slate-900 to-gray-700 text-white">
      <Navbar/>
      <div className="flex justify-center items-center flex-col mt-5 gap-5 p-5">
        {children}
      </div>
      
    </div>
  )
}