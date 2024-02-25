import Image from "next/image";
import { GoogleGeminiEffectDemo } from "./components/created/gemini";
import { ThreeDCardDemo } from "./components/created/3d-card";

export default function Home(){
  return (
    <div>
      <GoogleGeminiEffectDemo/>
      <h1>Welco\me</h1>
      <ThreeDCardDemo/>
    </div>
    
  )
}