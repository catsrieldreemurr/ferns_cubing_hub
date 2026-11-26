import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import Typography from "./typography";

interface SetProps{
  setTimePassedMs: Dispatch<SetStateAction<number>>
  timePassedMs: number;
}

export default function Stopwatch({setTimePassedMs, timePassedMs}:SetProps){
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState(0);

  function ToggleTime(){
    if (!isActive){
      setStartTime(Date.now())
      setIsActive(true);
      console.log("Started")
    } else {
      setIsActive(false);
      console.log("Stopped")
    }
  }

  useEffect(() => {
    let intervalId: number;
    if (isActive) {
      intervalId = setInterval(() => setTimePassedMs(Date.now() - startTime), 10);
    }
    return () => clearInterval(intervalId);
  }, [isActive, startTime]);

  const minutes = Math.floor((timePassedMs % 3600000) / 60000);
  const seconds = Math.floor((timePassedMs % 60000) / 1000);
  const miliseconds = timePassedMs % 100;

  useEffect(() => {
    const handleKeyDown = (event:KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();

        ToggleTime();
      } 
    };
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isActive])

  

  return (
    <div>
      <Typography size="h1" style="p-5">       
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {miliseconds.toString().padStart(2, "0")}</Typography>
    </div>
  )
}