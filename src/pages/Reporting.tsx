import { FUCollapse } from "../FrostUI";
import { useState } from "react";

//icons
// import { TiLightbulb } from "react-icons/ti";
// import { HiOutlineSpeakerphone } from "react-icons/hi";
import Navbar from "../Navbar";
import Footer from "@/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";
import party from "../assets/Corporate Party.png";

import AnalyticsImg from "../assets/analyticsandreports.png";
import XlImg from "../assets/xlextractofreports.png";

function Engagment() {
  const [accordion, setAccordion] = useState<number | null>(0);

  const handleAccordion = (index: number) => () => {
    if (index === accordion) setAccordion(null);
    else setAccordion(index);
  };

  return (
    <>
      <Navbar />
      <div className=" font-Inter bg-gradient-to-b from-blue-300/20">
        <h1 className="text-center text-4xl font-bold py-10 tracking-wider">
          Reportin
        </h1>

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
            <img src={party} className="w-[500px] xl:ml-44" />

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
                      <img src={AnalyticsImg} />
                    </div>

                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Analytics and Reports
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>

                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Generates insights and reports, aiding in data-driven
                      decision-making.
                    </p>
                    <div className="mt-7 flex items-center">
                      <div className="text-primary">
                        Learn more{" "}
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                      </div>
                    </div>
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
                      <img src={XlImg} />
                    </div>
                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      XL Extract of Reports
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>
                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Exports comprehensive data in Excel for in-depth analysis
                      and presentation.
                    </p>
                    <div className="mt-7 flex items-center">
                      <div className="text-primary">
                        Learn more{" "}
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                      </div>
                    </div>
                  </FUCollapse.Menu>
                </FUCollapse>

                <div className="border-b  my-1 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Engagment;
