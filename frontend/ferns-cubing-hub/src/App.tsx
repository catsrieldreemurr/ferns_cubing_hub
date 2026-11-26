import { useEffect, useState } from "react"
import Typography from "./components/ui/typography"
import Scrambler from "./helpers/scrambler"
import { Button } from "@base-ui/react/button";

import "cubing/twisty";
import ContentContainer from "./components/ui/contentContainter";
import ScrambleSaveComponent from "./components/ui/saveScramble";
import Stopwatch from "./components/ui/stopwatchtimer";

export function App() {
  async function newScramble(){
    const scramble = await Scrambler();
    setScrambleString(scramble.toString());
  }

  const [scrambleString, setScrambleString] = useState("Creating a Scramble...");
  const [timePassedMs, setTimePassedMs] = useState(0);
  
  useEffect(() => {
    newScramble();
  }, [])

  return (  
    <ContentContainer>
      <Typography variant="p" size="h2" isBold isCentered>{scrambleString}</Typography>
      <Button onClick={newScramble}>Click me to regenerate</Button>
      
      <twisty-player
        alg={scrambleString}
        visualization="2D"
        control-panel="none"
        background="none"
      />

      <ScrambleSaveComponent scramble={scrambleString} time={timePassedMs}/>
      <Stopwatch timePassedMs={timePassedMs} setTimePassedMs={setTimePassedMs}/>
    </ContentContainer>
  )
}

export default App
