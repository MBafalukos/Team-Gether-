// import ScrollIntoView from "react-scroll-into-view";
import TeamgetherLogo from "./assets/TeamgetherLogo.png";
/* import Greek from "./assets/greece.svg";
import English from "./assets/englishflag.png";
 import {
   DropdownMenu,
  DropdownMenuContent,
   DropdownMenuItem,
  DropdownMenuTrigger}
 from "./components/ui/dropdown-menu"; */

import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
// import { useRef } from "react";
import { useState } from "react";

import { Button } from "./components/ui/button";

import {
  Drawer,
  //   DrawerClose,
  DrawerContent,
  DrawerDescription,
  //   DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-[20] font-Inter shadow-md">
      <div className="bg-white items-center sticky top-0 flex justify-between w-full h-24">
        <div className="ml-4 sm:ml-12">
          <a href="/Team-Gether-/">
            <img
              className="w-44  sm:h-24 sm:w-96 hover:cursor-pointer"
              src={TeamgetherLogo}
            ></img>
          </a>
        </div>
        <ul className="inline-flex items-center space-x-4 sm:space-x-12 text-xs sm:text-lg ">
          <div className="">
            <NavLink
              to="/features"
              className="aria-[current=page]:underline decoration-sky-300 hidden font-semibold hover:cursor-pointer hover:underline "
            >
              Features
            </NavLink>
          </div>
          <NavLink
            to="/industries"
            className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline "
          >
            <li className="block">Industries</li>
          </NavLink>
          <NavLink
            to="/about"
            className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline "
          >
            <li className="block">About</li>
          </NavLink>

          {/* <NavLink
            to="/pricing"
            className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline "
          > */}
          <Link to="/home#pricing">
            <li className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline active:underline ">
              Pricing
            </li>
          </Link>
          {/* </NavLink> */}

          {/* <a
            href="/contact"
            className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline "
          > */}
          {/* <NavLink className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline "> */}
          <Link to="/home#contact">
            <li className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline active:underline ">
              Contact us
            </li>
          </Link>
          {/* </a> */}
          {/* </NavLink> */}
          <li className="hidden lg:block items-center">
            <Drawer>
              <DrawerTrigger asChild className="align-center">
                <Button className="border-sky-300 hover:bg-sky-300 bg-white hover:text-white rounded-full text-black border-2 hover:border-sky-300 text-base font-semibold  ">
                  Book a Demo
                </Button>
              </DrawerTrigger>
              <DrawerContent className="w-12/12 align-center">
                <DrawerHeader>
                  <DrawerTitle>Book a Demo</DrawerTitle>
                  <DrawerDescription>
                    Schedule a demo with us and see how Teamgether can help your
                    team collaborate more effectively.
                  </DrawerDescription>
                </DrawerHeader>
                <form className="  rounded-xl text-center ">
                  <div className="">
                    <input
                      className="w-6/12 border-2 rounded-xl p-2"
                      placeholder="Your Name"
                    ></input>
                  </div>
                  <div className="mt-4">
                    <input
                      type="email"
                      className="w-6/12 border-2 rounded-xl p-2"
                      placeholder="Your Email"
                    ></input>
                  </div>
                  <div className="mt-4">
                    <input
                      className="w-6/12 border-2 rounded-xl p-2"
                      placeholder="Your Company "
                    ></input>
                  </div>
                  <div className="mt-4">
                    <input
                      className="w-6/12 border-2 rounded-xl p-2"
                      placeholder="Your Position "
                    ></input>
                  </div>
                  <div className="mt-4">
                    <input
                      className="w-6/12 border-2 rounded-xl p-2"
                      placeholder="Your Phone Number "
                    ></input>
                  </div>
                  <div className="mt-4">
                    <textarea
                      className="w-6/12 border-2 rounded-xl p-2 resize-none h-24"
                      placeholder="Message"
                    />
                  </div>
                  <Button className="px-12 mt-4 bg-sky-300 hover:bg-white hover:text-sky-300 ">
                    Book a Demo
                  </Button>
                </form>
              </DrawerContent>
            </Drawer>
          </li>
          <li className="mt-2 lg:hidden mx-4 block px-14">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </li>
          <li className="pr-4 w-12 h-12 hidden lg:block ">
            {/*  <DropdownMenu className="w-12 h-12">
              <DropdownMenuTrigger asChild>
                <img
                  className="hover:cursor-pointer sm:h-8 sm:rounded-full"
                  src={English}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="">
                <DropdownMenuItem className=" p-0 m-0">
                  <img className="h-8" src={Greek} />{" "}
                  <span className="p-4">Greek</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="bg-white w-full text-center lg:hidden">
          <ul className="space-y-4 text-lg">
            <NavLink
              to="/industries"
              className="block font-semibold hover:cursor-pointer hover:underline"
              onClick={toggleMenu}
            >
              Industries
            </NavLink>
            <NavLink
              to="/about"
              className="block font-semibold hover:cursor-pointer hover:underline"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <li className="aria-[current=page]:underline decoration-sky-300  font-semibold hover:cursor-pointer hover:underline active:underline ">
              <Link to="/home#pricing" onClick={toggleMenu}>
                Pricing
              </Link>
            </li>
            <li className="aria-[current=page]:underline decoration-sky-300  font-semibold hover:cursor-pointer hover:underline active:underline ">
              <Link to="/home#contact" onClick={toggleMenu}>
                Contact us
              </Link>
            </li>
            <li className=" items-center">
              <Drawer>
                <DrawerTrigger asChild className="align-center">
                  <Button className="border-sky-300 bg-sky-300 text-white rounded-full  border-2 hover:border-sky-300 text-base font-semibold  ">
                    Book a Demo
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="w-12/12 align-center">
                  <DrawerHeader>
                    <DrawerTitle>Book a Demo</DrawerTitle>
                    <DrawerDescription>
                      Schedule a demo with us and see how Teamgether can help
                      your team collaborate more effectively.
                    </DrawerDescription>
                  </DrawerHeader>
                  <form className="  rounded-xl text-center ">
                    <div className="">
                      <input
                        className="w-6/12 border-2 rounded-xl p-2"
                        placeholder="Your Name"
                      ></input>
                    </div>
                    <div className="mt-4">
                      <input
                        type="email"
                        className="w-6/12 border-2 rounded-xl p-2"
                        placeholder="Your Email"
                      ></input>
                    </div>
                    <div className="mt-4">
                      <input
                        className="w-6/12 border-2 rounded-xl p-2"
                        placeholder="Your Company "
                      ></input>
                    </div>
                    <div className="mt-4">
                      <input
                        className="w-6/12 border-2 rounded-xl p-2"
                        placeholder="Your Position "
                      ></input>
                    </div>
                    <div className="mt-4">
                      <input
                        className="w-6/12 border-2 rounded-xl p-2"
                        placeholder="Your Phone Number "
                      ></input>
                    </div>
                    <div className="mt-4">
                      <textarea
                        className="w-6/12 border-2 rounded-xl p-2 resize-none h-24"
                        placeholder="Message"
                      />
                    </div>
                    <Button className="px-12 mt-4 bg-sky-300 hover:bg-white hover:text-sky-300 ">
                      Book a Demo
                    </Button>
                  </form>
                </DrawerContent>
              </Drawer>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
