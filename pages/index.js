import Image from 'next/image';
import {useState} from 'react';
import TwitterLogo from '../assets/images/twitter-logo.svg';
import SignupModal from '../components/SignupModal';

export default function Home() {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const onClose = () => {
    setShowSignupModal(false);
  };
  return (
    <>
      <div className=" min-h-screen flex flex-col">
        <div className=" flex-1 grid grid-cols-12 ">
          <div className="col-span-7 relative">
            <Image
              alt="twitter-landing"
              src="/images/landing-page-image.png"
              layout="fill"
              className="object-cover "
            ></Image>
          </div>
          <div className="col-span-5 px-8 flex items-center ">
            <div>
              <TwitterLogo className="text-primary-500 w-10 h-10" />

              <h1 className="text-6xl font-black mt-16">Happening now</h1>
              <div className="mt-12">
                <h2 className="text-3xl mb-8 font-bold">Join Twitter today.</h2>
                <div className="w-76 ">
                  <button className=" w-full py-2 px-6 bg-primary-500  text-white rounded-full font-bold">
                    Signup with email
                  </button>
                  <div className="text-xs text-gray-300 mt-2">
                    By signing up, I hereby acknowledge that I have completely
                    read and fully understand the Travel Policy
                  </div>
                  <div className="mt-12">
                    <h2 className="text-l font-bold">
                      Already have an acount?
                    </h2>
                    <button
                      onClick={() => setShowSignupModal(true)}
                      className="mt-4 w-full py-2 px-6 border font-semibold border-gray-200 rounded-full text-primary"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray-100 opacity-80 py-4 flex justify-center items-center text-center">
          <div className="container mx-auto text-xs text-gray-400 space-x-9 ">
            <a href="https://twitter.com">About</a>
            <a href="https://twitter.com">Help Center</a>
            <a href="https://twitter.com">Term of Service</a>
            <a href="https://twitter.com">Privacy Policy</a>
            <a href="https://twitter.com">Cookie Policy</a>
            <a href="https://twitter.com">Imprint</a>
            <a href="https://twitter.com">Accessibility</a>
          </div>
        </footer>
      </div>
      <SignupModal open={showSignupModal} onClose={onClose} />
    </>
  );
}
