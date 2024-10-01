// types
import { Why } from "./types";
// import question from './assets/problem.svg'

type WhyProps = {
  why: Why[];
};

const Services = ({ why }: WhyProps) => {
  return (
    <section className="pb-10 font-Inter px-20 bg-blue-400/20">
      <div className="text-center flex justify-center items-center mb-10">
        {/* <img src = {question} className='w-20 h-20' /> */}
        <h1 className="text-5xl/relaxed text-gray-700">Why us</h1>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-12 gap-4">
        {(why || []).map((why, idx) => {
          return (
            <div
              key={idx}
              className="p-6 bg-white rounded-md hover:shadow-xl transition-all duration-500 hover:scale-105  border border-black"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <div className="flex flex-col items-center ">
                <div
                  className={`w-24 h-24 rounded-md  flex items-center justify-center`}
                >
                  {why.icon}
                </div>

                <p className="text-slate-400">{why.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
