import { FUCollapse } from "../FrostUI";
import { useState } from "react";

//icons
// import { TiLightbulb } from "react-icons/ti";
// import { HiOutlineSpeakerphone } from "react-icons/hi";
// import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import { LuScanFace } from "react-icons/lu";
// import Navbar from "../Navbar";
// import Footer from "@/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";
import party from "../assets/bstormImg.jpg";
import party1 from "../assets/hshakeImg.jpg";

import BrainstormImg from "../assets/brainstorming.png";
import StoriesImg from "../assets/stories.png";
import AnnouncementsImg from "../assets/announcements.png";
import ChatImg from "../assets/chat.png";
import SurveysImg from "../assets/surveysandpolls.png";
import MediaImg from "../assets/mediawall.png";
import GoalsImg from "../assets/valuesandgoals.png";
import BadgesImg from "../assets/badgesandawards.png";
import EventsImg from "../assets/events.png";
import ErecognitionImg from "../assets/employeerecognition.png";
import VoiceImg from "../assets/yourvoice.png";
import ChartImg from "../assets/organizationalchart.png";
// import { Brain } from "lucide-react";

function Engagment() {
  const [accordion, setAccordion] = useState<number | null>(0);

  const handleAccordion = (index: number) => () => {
    if (index === accordion) setAccordion(null);
    else setAccordion(index);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className=" font-Inter ">
        <h1 className="text-center text-4xl font-bold py-10 tracking-wider">
          Engagement
        </h1>
        <h3 className="text-center text-xl">
          Engage your employees and build a strong company culture
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

          <div className="grid grid-cols-1 md:grid-cols-2  ">
            {/* <div className="w-[500px] xl:ml-44">
              {accordion === 0 && <img src={party} />}
              {accordion === 1 && <img src={party} />}
              {accordion === 2 && <img src={party1} />}
              {accordion === 3 && <img src={party} />}
              {accordion === 4 && <img src={party1} />}
              {accordion === 5 && <img src={party} />}
            </div> */}
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
                      <img src={BrainstormImg} />
                    </div>

                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Brain Storming
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>

                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Before we dive into why companies must invest in employee
                      experience (EX), it’s important to understand what this
                      concept entails.
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
                      <img src={AnnouncementsImg} />
                    </div>
                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Announcements
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>
                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Post your job, interview candidates and make offers, all
                      on Prompt. Start hiring today.
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
                      <img src={ChatImg} />
                    </div>
                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Chat
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>
                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Finding committed employees is one of public and private
                      organizations’ top priorities.
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
                      <img src={VoiceImg} />
                    </div>

                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Your Voice
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>

                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Offers a confidential channel for feedback, promoting
                      openness and action.
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
                      <img src={StoriesImg} />
                    </div>
                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Stories
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
                <div className="border-b my-1 w-full"></div>
              </div>

              <div>
                <FUCollapse
                  open={accordion == 12}
                  toggleCollapse={handleAccordion(12)}
                >
                  <FUCollapse.Toggle
                    className=" inline-flex items-center gap-x-4 w-full p-2  text-black transition-all hover:text-gray-500  dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="border rounded-lg flex items-center justify-center h-12 w-12">
                      <img src={ChartImg} />
                    </div>

                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Organization Chart
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>

                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Visualizes hierarchy and roles, improving clarity and
                      decision-making.
                    </p>
                  </FUCollapse.Menu>
                </FUCollapse>

                <div className="border-b my-1 w-full"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-10 ">
            <div className="flex flex-col xl:ml-36">
              <div>
                <FUCollapse
                  open={accordion == 6}
                  toggleCollapse={handleAccordion(6)}
                >
                  <FUCollapse.Toggle
                    className=" inline-flex items-center gap-x-4 w-full p-2  text-black transition-all hover:text-gray-500  dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="border rounded-lg flex items-center justify-center h-12 w-12">
                      <img src={SurveysImg} />
                    </div>

                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Survey and Polls
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>

                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Collects employee feedback for data-driven decision-making
                      and sentiment analysis.
                    </p>
                  </FUCollapse.Menu>
                </FUCollapse>
                <div className="border-b my-1 w-full"></div>
              </div>

              <div>
                <FUCollapse
                  open={accordion == 7}
                  toggleCollapse={handleAccordion(7)}
                >
                  <FUCollapse.Toggle
                    className=" inline-flex items-center gap-x-4 w-full p-2  text-black transition hover:text-gray-500  dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="border rounded-lg flex items-center justify-center h-12 w-12">
                      <img src={MediaImg} />
                    </div>
                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Media Wall
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>
                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Showcases multimedia content, boosting morale and
                      celebrating achievements.
                    </p>
                  </FUCollapse.Menu>
                </FUCollapse>

                <div className="border-b my-1 w-full"></div>
              </div>
              <div>
                <FUCollapse
                  open={accordion == 8}
                  toggleCollapse={handleAccordion(8)}
                >
                  <FUCollapse.Toggle
                    className=" inline-flex items-center gap-x-4 w-full p-2  text-black transition-all hover:text-gray-500  dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="border rounded-lg flex items-center justify-center h-12 w-12">
                      <img src={GoalsImg} />
                    </div>

                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Values and Goals
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>

                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Communicates core values and goals, enhancing purpose and
                      alignment.
                    </p>
                  </FUCollapse.Menu>
                </FUCollapse>
                <div className="border-b my-1 w-full"></div>
              </div>
              <div>
                <FUCollapse
                  open={accordion == 9}
                  toggleCollapse={handleAccordion(9)}
                >
                  <FUCollapse.Toggle
                    className=" inline-flex items-center gap-x-4 w-full p-2  text-black transition hover:text-gray-500  dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="border rounded-lg flex items-center justify-center h-12 w-12">
                      <img src={ErecognitionImg} />
                    </div>
                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Employee Recognition
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>
                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Finding committed employees is one of public and private
                      organizations’ top priorities.
                    </p>
                  </FUCollapse.Menu>
                </FUCollapse>

                <div className="border-b my-1 w-full"></div>
              </div>
              <div>
                <FUCollapse
                  open={accordion == 10}
                  toggleCollapse={handleAccordion(10)}
                >
                  <FUCollapse.Toggle
                    className=" inline-flex items-center gap-x-4 w-full p-2  text-black transition-all hover:text-gray-500  dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="border rounded-lg flex items-center justify-center h-12 w-12">
                      <img src={BadgesImg} />
                    </div>

                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Badges and awards
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>

                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Recognizes achievements with virtual awards, promoting
                      appreciation and motivation.
                    </p>
                  </FUCollapse.Menu>
                </FUCollapse>
                <div className="border-b my-1 w-full"></div>
              </div>

              <div>
                <FUCollapse
                  open={accordion == 11}
                  toggleCollapse={handleAccordion(11)}
                >
                  <FUCollapse.Toggle
                    className=" inline-flex items-center gap-x-4 w-full p-2  text-black transition hover:text-gray-500  dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="border rounded-lg flex items-center justify-center h-12 w-12">
                      <img src={EventsImg} />
                    </div>
                    <h1 className=" flex items-center w-full  justify-between text-lg">
                      Events
                      <MdKeyboardArrowDown />
                    </h1>
                  </FUCollapse.Toggle>
                  <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Provides an event calendar to keep employees informed and
                      engaged.
                    </p>
                  </FUCollapse.Menu>
                </FUCollapse>

                <div className="border-b my-1 w-full"></div>
              </div>
            </div>

            <img
              src={party1}
              className="w-[500px] xl:mr-44 hidden md:block rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Engagment;
