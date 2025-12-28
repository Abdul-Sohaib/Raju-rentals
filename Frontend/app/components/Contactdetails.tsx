
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
const Contactdetails = () => {
  return (
    <>
    <section id='contact'>
    <div className='flex flex-col p-3'>
    <div className="flex flex-col gap-5 ">
        <span className="bg-yellow-100 border-2 border-yellow-500 p-3 py-2 rounded-full text-lg w-fit">Get In Touch</span>
        <span className="text-xl font-semibold">Call Now for Fast Booking</span>
        <p className="text-lg">Ready to rent a commercial vehicle? Contact us now for instant quotes and quick booking. Our team is available 24/7 to assist you.</p>
    </div>
    <div>
    <div className="flex xs:flex-col w-full  justify-around xs:gap-2">
              <a 
                href="tel:+917635969895"
                className="flex items-start space-x-4 p-4 rounded-xl bg-white  border-2 border-black"
              >
                <div className="bg-secondary p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-black text-sm mb-1">Call Us</div>
                  <div className="text-black text-xl font-semibold">+91 7635969895</div>
                </div>
              </a>

              <a 
                href="https://wa.me/917635969895"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-4 rounded-xl bg-white  border-2 border-black"
              >
                <div className="bg-green-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-black text-sm mb-1">WhatsApp</div>
                  <div className="text-black text-xl font-semibold">+91 7635969895</div>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white  border-2 border-black">
                <div className="bg-secondary p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-black text-sm mb-1">Email</div>
                  <div className="text-black text-xl font-semibold">rajucommercialrentals@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white  border-2 border-black">
                <div className="bg-secondary p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-black text-sm mb-1">Location</div>
                  <div className="text-black text-xl font-semibold">Panitola,Tinsukia, Assam, India</div>
                </div>
              </div>
            </div>
          </div>
    </div>
    </section>
    </>
  )
}

export default Contactdetails