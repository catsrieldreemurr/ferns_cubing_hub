import { Button } from "./button";

interface SetProps{
  scramble: string  
}

export default function ScrambleSaveComponent({scramble}:SetProps){
  async function PostScrambleSaveRequest(){
    const res = await fetch("http://localhost:3000/saveSolve", {
      method: 'POST', 
      headers:{
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({
        scramble: scramble
      })
    })

    if(!res.ok){
      console.log("whoopsie");
    } else {
      console.log("YAY! SAVED!");
    }
  }

  return (
    <Button onClick={PostScrambleSaveRequest}>Save Scramble</Button>
  )
}