import { useState } from "react";
import arrowDownIcon from "../images/icon-arrow-down.svg";
import arrowUpIcon from "../images/icon-arrow-up.svg";
import { Features } from "./components";
import { Company } from "./components";

function App() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleMenu1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleMenu2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
    setIsOpen1(false)
    setIsOpen2(false)

  };

  return (
    <main
      className="bg-gray-100"
    >
      <header className="flex justify-between p-8">
        <img src="../images/logo.svg" alt="logo" className="h-6 pr-3" />
        <button
          onClick={toggleModal}
          className="lg:hidden text-3xl absolute right-8 top-6 cursor-pointer"
        >
          <ion-icon name={openModal ? "menu" : ""}></ion-icon>
        </button>
        <nav
          className={`gap-8 text-gray-500 font-semibold lg:flex lg:items-center 
          lg:bg-transparent lg:pb-0  lg:static hidden
          lg:z-auto 
          }`}
        >
          <div className="relative ">
            <button
              className="hover:text-gray-900 flex items-center gap-2"
              onClick={toggleMenu1}
            >
              Features
              <img
                className="h-1.5"
                src={isOpen1 ? arrowUpIcon : arrowDownIcon}
                alt="Arrow Icon"
              />
            </button>
            {isOpen1 && <Features />}
          </div>
          <div className="relative">
            <button
              className="hover:text-gray-900 flex items-center gap-2"
              onClick={toggleMenu2}
            >
              Company
              <img
                className="h-1.5"
                src={isOpen2 ? arrowUpIcon : arrowDownIcon}
                alt="Arrow Icon"
              />
            </button>
            {isOpen2 && <Company />}
          </div>
          <div className="lg:flex gap-8 ">
            <button className="hover:text-gray-900">Careers</button>
            <button className="hover:text-gray-900">About</button>
          </div>
        </nav>

        <div className="hidden lg:flex gap-8 text-gray-500 font-semibold">
          <button className="hover:text-gray-900">Login</button>
          <button className="px-4 py-1 rounded-xl border-solid border-2 border-gray-500 hover:text-gray-900 hover:border-gray-900">
            Register
          </button>
        </div>
      </header>
      <section className="flex flex-col-reverse lg:flex-row justify-between px-4 lg:px-12">
        <div className="text-align pl-4 lg:pl-40 pt-10 lg:pt-40 mr-4 lg:mr-20">
          <h1 className="font-bold text-5xl text-center lg:text-left lg:text-8xl">
            Make remote work
          </h1>
          <p className="text-gray-600 text-lg text-center pt-4 lg:text-2xl lg:text-left lg:pt-20">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-gray-900 text-white lg:items-start px-6 py-3 rounded-2xl mt-12 lg:mt-28 text-2xl hover:bg-white hover:text-gray-900 hover:border-solid border-2 border-gray-900">
              Learn more
            </button>
          </div>
          <div className="lg:flex lg:justify-start lg:items-end flex items-end justify-center gap-3 lg:gap-10 pt-20 lg:pt-40">
            <img
              className="w-18"
              src="../images/client-databiz.svg"
              alt="Client Logo"
            />
            <img
              className="w-18"
              src="../images/client-audiophile.svg"
              alt="Client Logo"
            />
            <img
              className="w-18"
              src="../images/client-meet.svg"
              alt="Client Logo"
            />
            <img
              className="w-18"
              src="../images/client-maker.svg"
              alt="Client Logo"
            />
          </div>
        </div>
        <img
          className="w-full lg:max-w-3xl pr-4 lg:pr-20 pt-2 lg:pt-20"
          src="../images/image-hero-desktop.png"
          alt="Hero"
        />
      </section>
      {openModal && (
        <div className=" lg:hidden fixed top-0 right-0 w-full h-full flex items-center justify-end ">
          <div className="bg-white rounded-lg shadow-lg w-1/2 h-full">
            <nav className="px-6 py-16 text-lg flex-col gap-4 text-gray-500 font-semibold flex ">
              <button
                onClick={toggleModal}
                className="absolute top-0 right-0 text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <ion-icon name="close-circle-outline" size="large"></ion-icon>
              </button>
              <div className="relative ">
                <button
                  className="hover:text-gray-900 flex items-center gap-2"
                  onClick={toggleMenu1}
                >
                  Features
                  <img
                    className="h-1.5"
                    src={isOpen1 ? arrowUpIcon : arrowDownIcon}
                    alt="Arrow Icon"
                  />
                </button>
                {isOpen1 && <Features />}
              </div>
              <div className="relative">
                <button
                  className="hover:text-gray-900 flex items-center gap-2"
                  onClick={toggleMenu2}
                >
                  Company
                  <img
                    className="h-1.5"
                    src={isOpen2 ? arrowUpIcon : arrowDownIcon}
                    alt="Arrow Icon"
                  />
                </button>
                {isOpen2 && <Company />}
              </div>
              <div className="hover:text-gray-900">
                <button>Careers</button>
              </div>
              <div className="hover:text-gray-900">
                <button>About</button>
              </div>
              <div className="flex flex-col gap-6 py-6 text-gray-500 font-semibold">
                <button className="hover:text-gray-900">Login</button>
                <button className="px-4 py-1 rounded-xl border-solid border-2 border-gray-500 hover:text-gray-900 hover:border-gray-900">
                  Register
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
