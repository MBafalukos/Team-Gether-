import { FUCollapse } from "../FrostUI";
import { useState } from "react";

//icons
// import { TiLightbulb } from "react-icons/ti";
// import { HiOutlineSpeakerphone } from "react-icons/hi";
// import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import { LuScanFace } from "react-icons/lu";
import Navbar from "../Navbar";
import Footer from "@/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";
import party from "../assets/digitalImg.jpg";

import KnowledgeImg from "../assets/knowledgebase.png";
import StorageImg from "../assets/documentstorage.png";
import CardImg from "../assets/businessdigitalcard.png";

function Engagment() {
  const [accordion, setAccordion] = useState<number | null>(0);

  const handleAccordion = (index: number) => () => {
    if (index === accordion) setAccordion(null);
    else setAccordion(index);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className=" font-Inter bg-blue-400/20">
        <h1 className="text-center text-4xl font-bold py-10 tracking-wider">
          Digital Space
        </h1>
        <h3 className="text-center text-xl">
          Securely manages documents, enhancing collaboration and compliance.
        </h3>
        <div
          data-fc-type="accordion"
          data-aos="fade-up"
          data-aos-duration="500"
          className=" gap-10 items-center p-20"
        >
          <div className="relative">
            <div className="hidden sm:block">
              <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-start-8 2xl:after:end-0 after:bg-[url('@/assets/images/pattern/dot5.svg')]"></div>
              <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-end-8 before:bg-[url('@/assets/images/pattern/dot2.svg')]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center ">
            <img src={party} className="w-[500px] xl:ml-44 rounded-xl" />

            <div className="xl:mr-36">
              <div>
                <FUCollapse
                  open={accordion == 0}
                  toggleCollapse={handleAccordion(0)}
                >
                  <FUCollapse.Toggle
                    className=" inline-flex items-center gap-x-4 w-full p-2  text-black transition-all hover:text-gray-500  dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="border rounded-lg flex items-center justify-center h-12 w-12">
                      <img src={KnowledgeImg} />
                    </div>

                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Knowledge Base
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>

                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Enables comprehensive performance appraisals, fostering
                      employee development..
                    </p>
                  </FUCollapse.Menu>
                </FUCollapse>

                <div className="border-b my-1 w-full "></div>
              </div>

              <div>
                <FUCollapse
                  open={accordion == 1}
                  toggleCollapse={handleAccordion(1)}
                >
                  <FUCollapse.Toggle
                    className=" inline-flex items-center gap-x-4 w-full p-2  text-black transition hover:text-gray-500  dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="border rounded-lg flex items-center justify-center h-12 w-12">
                      <img src={StorageImg} />
                    </div>
                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Document Storage
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>
                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Securely manages documents, enhancing collaboration and
                      ensuring compliance.
                    </p>
                  </FUCollapse.Menu>
                </FUCollapse>

                <div className="border-b  my-1 "></div>
              </div>

              <div>
                <FUCollapse
                  open={accordion == 2}
                  toggleCollapse={handleAccordion(2)}
                >
                  <FUCollapse.Toggle
                    className="inline-flex items-center gap-x-4 w-full p-2  text-black transition hover:text-gray-500  dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="border rounded-lg flex items-center justify-center h-12 w-12">
                      <img src={CardImg} />
                    </div>
                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Business Digital Card
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>
                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Creates digital cards, facilitating networking and
                      simplifying communication.
                    </p>
                  </FUCollapse.Menu>
                </FUCollapse>
                <div className="border-b my-1 w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Engagment;
