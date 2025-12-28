import Image from 'next/image'
import { Shield, Clock, DollarSign } from 'lucide-react';
import rentaldemo from '@/public/images/rentaldemo.jpg'
import { IoCallOutline } from 'react-icons/io5';

const About = () => {
    const features=[
        {
            icon: <Shield className='w-10 h-10'/>,
            title: 'Trusted Service',
            description: '100% verified and well-maintained vehicles'
        },
        {
            icon: <Clock className='w-10 h-10'/>,
            title: 'Fast Service',
            description: 'Quick booking and instant delivery'
        },
        {
            icon: <DollarSign className='w-10 h-10'/>,
            title: 'Affordable Rentals',
            description: 'We offer competitive pricing for our vehicles to ensure you get the best value for your money.'
        },
    ]
  return (
    <>
    <section id='about'>
    <div className="flex xs:flex-col flex-1 justify-between items-center">
        <div className="flex flex-col p-3 mx-auto">
     <Image
     src={rentaldemo}
     alt="Raju Rentals Logo"
    className="w-[100vw] h-full rounded-md"
     />
     <div className='relative bottom-20 left-20 xs:bottom-16 bg-white p-3 rounded-xl shadow-xl w-fit border-2 border-black'>
     <div className="flex items-center space-x-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-primary text-balck">10+</div>
                  <div className="text-sm text-accent text-balck">Years Experience</div>
                </div>
              </div>
     </div>
        </div>
        <div className="flex flex-col p-3 mx-auto gap-10">
            {/* image of raju and car */}
            <h1 className="text-2xl font-bold">About Raju Rentals</h1>
            <p className="text-lg">At Raju Rentals, we understand that your business relies on dependable and efficient transportation. With years of experience in the commercial vehicle rental industry, we provide high-quality vehicles that keep your operations running smoothly and on time.</p>
            <p className="text-lg">Our fleet includes tempo travellers, mini trucks, and heavy-duty commercial vehicles, all carefully maintained to deliver maximum safety, reliability, and performance. We believe in transparent pricing, flexible rental plans, and a customer-first approach that ensures a seamless rental experience every time.</p>
            <p className="text-lg">Whether you need vehicles for goods transport, business logistics, or commercial use — Raju Rentals is your trusted partner for reliable, affordable, and professional vehicle rental services.</p>
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon as React.ReactNode;
                return (
                  <div key={index} className="space-y-3">
                    <div className="bg-transparent w-fit text-blue-500 rounded-xl flex items-center justify-center">
                      {Icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                      <p className="text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className='bg-yellow-400 px-4 py-2 rounded-md font-normal flex items-center gap-2 w-fit'>
                    <IoCallOutline className="w-4 h-4" />
                    Call Now for instant booking
                </button>
        </div>
    </div>
    </section>
    </>
  )
}

export default About