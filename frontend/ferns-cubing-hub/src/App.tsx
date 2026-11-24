import { useEffect, useState } from "react"
import Typography from "./components/ui/typography"
import Scrambler from "./helpers/scrambler"
import { Button } from "@base-ui/react/button";

import "cubing/twisty";

export function App() {
  async function newScramble(){
    const scramble = await Scrambler();
    setScrambleString(scramble.toString());
  }

  const [scrambleString, setScrambleString] = useState("Creating a Scramble...");
  
  useEffect(() => {
    newScramble();
  }, [])

  return (  
    <div className="h-screen bg-linear-to-r from-slate-900 to-gray-700 text-white">
      <div className="flex justify-center items-center flex-col bg-gray-800 rounded-full p-5">
        <Typography variant="h1" isBold >{scrambleString}</Typography>
        <Button onClick={newScramble}>Click me to regenerate</Button>
      </div>
      

      <twisty-player
        alg={scrambleString}
        visualization="2D"
        control-panel="none"
        background="none"
      />
    </div>
  )
}

export default App
