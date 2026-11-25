import Typography from "./typography";
import { MoonIcon } from "lucide-react"

export default function Navbar(){
  return ( 
    <nav className="bg-slate-950 p-5">
      <div className="flex gap-5 items-center">
        <MoonIcon className="text-yellow-200"/>
        <Typography variant="h1" size="h3">Fern's Cubing Hub</Typography>
      </div>
      

    </nav>
  )
}