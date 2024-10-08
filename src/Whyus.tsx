// types
import { Why } from "./types";
// import question from './assets/problem.svg'
import WhyUsImg from "./assets/whyTeamgether.jpg";

type WhyProps = {
  why: Why[];
};

const Services = ({ why }: WhyProps) => {
  return (
    <section className="pb-10 font-Inter px-20 bg-gray-400/20 rounded-xl">
      <div className="text-center flex justify-center items-center ">
        <h1 className="text-5xl/relaxed ">
          Why Team<span className="text-sky-300">g</span>ether
        </h1>
      </div>
      <div className="rounded-full ">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1">
            {(why || []).map((why, idx) => {
              return (
                <div
                  key={idx}
                  className="p-2 bg-transparent rounded-md hover:shadow-xl transition-all duration-500 hover:scale-105   border-black"
                  data-aos="fade-up"
                  data-aos-duration={500}
                >
                  <div className="flex flex-row items-center ">
                    <div
                      className={`w-24 h-24 rounded-md  flex items-center justify-center`}
                    >
                      <div className="w-12 h-12">{why.icon}</div>
                    </div>

                    <p className="">{why.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <img
            src={WhyUsImg}
            className="rounded-xl hidden xl:block h-full flex-1 w-6/12"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
