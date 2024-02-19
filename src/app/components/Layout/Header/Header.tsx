import Brand from "./Brand/brand";
import Navbar from "./Navbar/navbar";
 
export default function Header (){
  return(
  <header className="flex flex-col h-16 shadow-sm bg-white items-center justify-center">
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between">
        <Brand />
        <Navbar />
      </div>
    </div>
  </header>
  )
}