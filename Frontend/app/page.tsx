import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Whychooseus from "./components/Whychooseus";
import Contactdetails from "./components/Contactdetails";
import  Footer  from "./components/Footer";

export default function Home() {
  return (
   <>
   <div className="flex flex-col w-screen h-screen">
   <Navbar />
   <div className="flex h-screen">
   <Herosection />
   </div>
   <div className="flex mt-20">
   <About/>
   </div>
   <div className="flex mt-20 flex-col">
   <Whychooseus/>
   </div>
   <div className="flex mt-20 flex-col">
   <Contactdetails/>
   </div>
   <div className="flex mt-20 flex-col">
   <Footer/>
   </div>
   </div>
   </>
  );
}
