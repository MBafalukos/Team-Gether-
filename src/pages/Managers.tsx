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
import party from "../assets/Corporate Party.png";

import PerformanceImg from "../assets/performancefeedback.png";
import EvaluationImg from "../assets/360evaluation.png";
import NotesImg from "../assets/mynotes.png";
import TalentImg from "../assets/talentgroup.png";
import SurveysImg from "../assets/surveysandpolls.png";

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
          Managers
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
                      <img src={EvaluationImg} />
                    </div>

                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      360 Evaluation
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>

                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Enables comprehensive performance appraisals, fostering
                      employee development.
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
                      <img src={PerformanceImg} />
                    </div>
                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Performance Feedback
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>
                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Fosters community by sharing experiences and insights
                      across the organization.
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
                      <img src={TalentImg} />
                    </div>
                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Talent Group
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>
                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Manages talent groups, identifying leaders and aligning
                      growth with goals.
                    </p>
                  </FUCollapse.Menu>
                </FUCollapse>
                <div className="border-b my-1 w-full"></div>
              </div>

              <div>
                <FUCollapse
                  open={accordion == 4}
                  toggleCollapse={handleAccordion(4)}
                >
                  <FUCollapse.Toggle
                    className=" inline-flex items-center gap-x-4 w-full p-2  text-black transition-all hover:text-gray-500  dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="border rounded-lg flex items-center justify-center h-12 w-12">
                      <img src={NotesImg} />
                    </div>

                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      My Notes
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>

                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Keeps detailed notes, offering a clear, fact-based view of
                      each employee.
                    </p>
                  </FUCollapse.Menu>
                </FUCollapse>
                <div className="border-b my-1 w-full"></div>
              </div>

              <div>
                <FUCollapse
                  open={accordion == 5}
                  toggleCollapse={handleAccordion(5)}
                >
                  <FUCollapse.Toggle
                    className=" inline-flex items-center gap-x-4 w-full p-2  text-black transition hover:text-gray-500  dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="border rounded-lg flex items-center justify-center h-12 w-12">
                      <img src={SurveysImg} />
                    </div>
                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Ambassadors
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>
                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Empowers employee ambassadors to promote the organization
                      and boost engagement.
                    </p>
                  </FUCollapse.Menu>
                </FUCollapse>
                <div className="border-b my-1 w-full"></div>
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
