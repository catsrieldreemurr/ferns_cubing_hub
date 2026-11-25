import { useState } from "react";
import { Button } from "./button";
import Typography from "./typography";

interface SetProps{
  scramble: string  
}

export default function ScrambleSaveComponent({scramble}:SetProps){

  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState({hasFinished: false, hasFailed: false});

  async function PostScrambleSaveRequest(){
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/saveSolve", {
      method: 'POST', 
      headers:{
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({
        scramble: scramble
      })
    })

    setIsLoading(false);

    if(!res.ok){
      console.log("whoopsie");
      setErrorState({hasFinished: true, hasFailed: true});
    } else {
      console.log("YAY! SAVED!");
      setErrorState({hasFinished: true, hasFailed: false});
    }
  }

  return (
    <div className="flex justify-center items-center flex-col gap-5 rounded">
      {(errorState.hasFinished && errorState.hasFailed == true) && <div className="bg-red-400 p-5 rounded-full">
        <Typography variant="p" size="h1">Something went wrong.</Typography>
      </div>}
      
      {(errorState.hasFinished && errorState.hasFailed == false) && <div className="bg-green-400 p-5 rounded-full">
        <Typography variant="p" size="h3">Successfully saved Scramble.</Typography>
      </div>}

      <Button onClick={PostScrambleSaveRequest} disabled={isLoading}>Save Scramble</Button>
    </div>
  )
}