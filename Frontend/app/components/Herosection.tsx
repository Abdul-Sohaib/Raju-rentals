import { BiArrowFromLeft } from "react-icons/bi"
import { IoCallOutline } from "react-icons/io5"
import CarModel from "./CarModel"


const Herosection = () => {
  return (
    <>
    <section id="home" className="w-screen">
    <div className='flex flex-1 bg-blue-400 h-full w-full'>
    <div className="flex flex-1 w-full xs:flex-col-reverse xs:gap-7">
        <div className='container mx-auto  p-3 justify-evenly flex flex-col xs:gap-6'>
            <h1 className='text-md font-semibold px-3 py-2 bg-yellow-100 rounded-full text-yellow-500 border-2 border-yellow-500 w-fit'>⭐ Trusted by 1000+ Businesses</h1>
            <span className='text-xl xs:text-lg font-semibold'>Reliable Commercial Vehicle Rentals for Your Business Needs</span>
            <p className='text-xl xs:text-sm text-black'>Get premium commercial vehicles for your business with flexible rental plans, competitive pricing, and 24/7 support. We ensure your business keeps moving.</p>
            <div className="flex gap-5 w-full">
                <button className='bg-yellow-400 px-4 py-2 rounded-md font-normal flex items-center gap-2 xs:hidden'>
                    Book Now 
                    <BiArrowFromLeft className="w-4 h-4 xs:w-10 xs:h-10" />
                </button>
                <button className='bg-yellow-400 px-4 py-2 rounded-md font-normal flex items-center gap-2 xs:text-sm xs:font-bold'>
                    <IoCallOutline className="w-4 h-4 xs:w-6 xs:h-6" />
                    Call Now for instant booking
                </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
            <div >
                <div className="text-3xl xs:text-xl font-bold text-secondary">1000+</div>
                <div className="text-black font-semibold text-xl xs:text-sm mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl xs:text-xl font-bold text-secondary">50+</div>
                <div className="text-black font-semibold text-xl xs:text-sm mt-1">Vehicles</div>
              </div>
              <div>
                <div className="text-3xl xs:text-xl font-bold text-secondary">24/7</div>
                <div className="text-black font-semibold text-xl xs:text-sm mt-1">Support</div>
              </div>
            </div>
        </div>
        <div className="container mx-auto flex xs:h-[20vh] w-full h-full">
        <CarModel/>
        </div>
        </div>
         <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48L60 42.7C120 37 240 27 360 26.7C480 27 600 37 720 42.7C840 48 960 48 1080 42.7C1200 37 1320 27 1380 21.3L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V48Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </div>
    </section>
    </>
  )
}

export default Herosection