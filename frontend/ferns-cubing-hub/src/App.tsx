import { useEffect, useState } from "react"
import Typography from "./components/ui/typography"
import Scrambler from "./helpers/scrambler"
import { Button } from "@base-ui/react/button";


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
    <div>
      <Typography variant="h1" isBold>{scrambleString}</Typography>
      <Button onClick={newScramble}>Click me to regenerate</Button>
    </div>
  )
}

export default App
