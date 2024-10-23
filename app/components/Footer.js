import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#1E293B] text-white">
        <div className="bg-purple-700 py-6 px-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h2 className="text-xl font-semibold">Talk to our best accounting expert now!</h2>
            <button className="bg-white text-purple-700 px-6 py-2 rounded-full font-semibold">
              Schedule a Meet
            </button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/Group 1.png"
              alt="BCS Logo"
              width={140}
              height={45.44}
            />
            <div className="mt-6 relative">
              <input
                type="email"
                placeholder="Join our newsletter"
                className="bg-[#2D3748] text-white py-2 pl-4 pr-10 rounded-full w-64"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <nav className="flex justify-center space-x-8 mb-8">
            <a href="#" className="hover:text-purple-400">Home</a>
            <a href="#" className="hover:text-purple-400">About Us</a>
            <a href="#" className="hover:text-purple-400">Service</a>
            <a href="#" className="hover:text-purple-400">Pricing Plan</a>
          </nav>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="bg-[#2D3748] p-2 rounded-full">
              <img src="/List1.png" alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className="bg-[#2D3748] p-2 rounded-full">
              <img src="/List2.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="#" className="bg-[#2D3748] p-2 rounded-full">
              <img src="/List3.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="#" className="bg-[#2D3748] p-2 rounded-full">
              <img src="/List4.png" alt="Twitter" width={24} height={24} />
            </a>
          </div>
        </div>
      </footer>
    );
  }