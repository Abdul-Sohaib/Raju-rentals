import { DollarSign, Wrench, Clock, Headphones } from 'lucide-react';

const Whychooseus = () => {
    const Details=[
        {
            icon:DollarSign,
            title:"Affordable Rates",
            description:"Competitive pricing with transparent costs and no hidden charges. Best value for your money.",
        },
        {
            icon:Wrench,
            title:"Well-Maintained Vehicles",
            description:"All vehicles undergo regular maintenance and safety checks to ensure reliability.",
        },
        {
            icon:Clock,
            title:"On-Time Delivery",
            description:"Punctual service guaranteed. We value your time and ensure timely vehicle delivery.",
        },
        {
            icon:Headphones,
            title:"24/7 Support",
            description:"Round-the-clock customer support available to assist you whenever you need help.",
        },
    ]
  return (
    <>
    <section id='our vehicals'>
    <div>
        <div className='flex flex-col justify-center items-center p-3 gap-10'>
            <h1 className='text-4xl font-bold'>Why Choose Us</h1>
            <h2 className='text-2xl font-semibold'>Your Trusted Partner in Commercial Vehicle Rentals</h2>
            <p className='text-lg'> We stand out from the competition with our commitment to quality, 
            affordability, and exceptional customer service.</p>
        </div>
        <div className='flex xs:flex-col xs:gap-2 p-3 justify-around'>
            {Details.map((Detail, index) => {
                const Icon = Detail.icon;
                return (
                    <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-black w-full"
                  >
                    <div className= 'w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-black'>
                      <Icon className="w-8 h-8 text-blue-500" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3">{Detail.title}</h3>
                    
                    <p className="text-sm font-semibold leading-relaxed">
                      {Detail.description}
                    </p>
                  </div>
                ) 
            })}
        </div>
        <div className='flex justify-center items-center'>
        <div className="grid md:grid-cols-4 gap-8 text-center  border-2 border-black w-[90vw] p-5 rounded-xl">
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">1000+</div>
              <div className="teblack">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">50+</div>
              <div className="text-black">Fleet Size</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">10+</div>
              <div className="text-black">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">99%</div>
              <div className="text-black">Customer Satisfaction</div>
            </div>
          </div>
        </div>
    </div>
    </section>

    </>
  )
}

export default Whychooseus