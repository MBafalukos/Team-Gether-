import Features from "./Features";
import Whyus from "./Whyus";
import { services, why, plans } from "./data";
import { Button } from "./components/ui/button";

//image
import portrait from "./assets/portrait.jpg";

const Hero = () => {
  return (
    <>
      <section className="pt-40 px-20 relative bg-gradient-to-b from-blue-500/20 to-zinc-400/20 font-Inter">
        <div>
          <div className="hero-with-shapes -z-10">
            <div className="shape1" />
            <div className="shape2" />
            <div className="shape3" />
          </div>
          <div className=" flex pb-44">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center ">
              <div
                className="pb- mb-10"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <h1 className="md:text-5xl text-3xl font-medium my-3">
                  The <span className="bg-gradient-to-b from-sky-600 to-sky-900 bg-clip-text text-transparent">heartbeat</span> of your
                  company's collaboration and interaction
                </h1>
                <p className="text-base mt-6 mb-20 text-slate-700">
                  An <span className="bg-gradient-to-b from-sky-700 font-bold to-black bg-clip-text text-transparent">Employee Experience</span>{" "}
                  and <span className="bg-gradient-to-b font-bold from-sky-600 to-black bg-clip-text text-transparent ">Engagement Platform</span>{" "}
                  designed to{" "}
                  <span className="">enhance internal communication</span> and{" "}
                  <span className="">
                    elevate employee experience and engagement
                  </span>
                </p>
                <div className="flex flex-wrap items-center justify-center  md:justify-start gap-5">
                  <div className="py-3 px-6 rounded border border-sky-300 font-semibold text-white bg-sky-300 hover:shadow-lg hover:shadow-sky-500/50 hover:cursor-pointer hover:scale-105 focus:outline focus:outline-red-500/50 transition-all duration-500">
                    
                    Learn More
                    
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-duration={500}>
                <img
                  src={portrait}
                  className="lg:ms-auto lg:me-0 mx-auto z-10 rounded-3xl relative  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="px-20">
        <Features />
        <Whyus why={why} />
      </div>
    </>
  );
};

export default Hero;
