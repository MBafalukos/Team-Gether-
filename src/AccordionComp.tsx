import { FUCollapse } from "./FrostUI";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function AccordionComp({ data }: any) {
  const [accordion, setAccordion] = useState<number | null>(0);

  const handleAccordion = (index: number) => () => {
    if (index === accordion) setAccordion(null);
    else setAccordion(index);
  };
  return (
    <>
      <div className=" font-Inter bg-blue-400/20">
        <h1 className="text-center text-2xl font-bold py-10 tracking-wider">
          {data.title}
        </h1>
        <h3 className="text-center text-xl">{data.subtitle}</h3>
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

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <img src={data.image} className="w-[500px]  rounded-xl" />
            </div>

            <div className=" flex-1">
              {" "}
              {data.accordion.map((subdata: any) => (
                <div>
                  <FUCollapse
                    open={accordion == subdata.id}
                    toggleCollapse={handleAccordion(subdata.id)}
                  >
                    <FUCollapse.Toggle
                      className=" inline-flex items-center gap-x-4 w-full p-2  text-black transition-all hover:text-gray-500  dark:hover:text-gray-400"
                      data-fc-type="collapse"
                    >
                      <div className="border rounded-lg flex items-center justify-center h-12 w-12">
                        <img src={subdata.icon} />
                      </div>

                      <h1 className=" flex items-center w-full  justify-between text-lg">
                        {subdata.title}
                        <MdKeyboardArrowDown />
                      </h1>
                    </FUCollapse.Toggle>

                    <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
                      <p className="text-gray-700 dark:text-gray-300">
                        {subdata.content}
                      </p>
                    </FUCollapse.Menu>
                  </FUCollapse>

                  <div className="border-b my-1 w-full "></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccordionComp;
