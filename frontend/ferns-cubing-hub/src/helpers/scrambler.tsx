import { randomScrambleForEvent  } from "cubing/scramble";

export default async function Scrambler(){
  try{
    const scramble = await randomScrambleForEvent("333");

    return scramble.toString();
  } 
  catch(err){
    return "Something went Wrong: " + err
  }
}