import PricingCards2 from "./PricingCards2";
import { plans } from "./data";
import Prices from "./assets/price-list.svg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Pricing = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = () => {
      const hash = location.hash; // get the hash from URL (e.g., #mySection)
      if (hash) {
        const element = document.getElementById(hash.substring(1)); // remove the "#" and get the element by ID
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // scroll to the element
        }
      }
    };
    scrollToId();
  }, [location]);

  return (
    <div className="flex justify-center">
      <section className="py-20 px-12 ">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center items-center">
              <img src={Prices} className="h-12 w-12" />
              <h2 className="md:text-3xl/tight text-3xl font-semibold my-4">
                &nbsp;Pricing Plans
              </h2>
            </div>
            <p className="md:text-lg text-slate-500 leading-7">
              Pricing that <span className="text-primary">works</span> for
              everyone.
            </p>
          </div>
          <PricingCards2 plans={plans} />
        </div>
      </section>
    </div>
  );
};

export default Pricing;
