  
import Features from "./Features"
import Whyus from "./Whyus"
import { services , why , plans } from './data'

//image
import portrait from './assets/portrait.jpg'

const Hero = () => {
	return (
		<section className="pt-40 px-20 relative bg-gradient-to-b from-red-500/5 to-amber-500/5 font-Inter">
				<div>
				<div className="hero-with-shapes -z-10">
					<div className="shape1" />
					<div className="shape2" />
					<div className="shape3" />
				</div>
				<div className=" container">
					
					<div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
						<div
							className="pb-3 mb-10"
							data-aos="fade-right"
							data-aos-duration={1000}
						>
							
							<h1 className="md:text-5xl text-3xl font-medium my-3">
							The heartbeat of your company's collaboration and interaction
							</h1>
							<p className="text-base mt-6 mb-20 text-slate-700">
							An Employee Experience and Engagement Platform designed to enhance internal 
							communication and elevate employee experience and engagement.
							</p>
							<div className="flex flex-wrap items-center justify-center  md:justify-start gap-5">
								<div
									
									className="py-3 px-6 rounded border border-red-500 font-semibold text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/50 focus:outline focus:outline-red-500/50 transition-all duration-500"
								>
									Learn More
								</div>
								
							</div>
						</div>
						
						<div data-aos="fade-up" data-aos-duration={500} >
							<img
								src = {portrait}																
								className="lg:ms-auto lg:me-0 mx-auto  z-10 rounded-full relative bottom-10 "
							/>
						</div>
					</div>
				</div>
			</div>
		

					<Features />
					<Whyus  why =  { why } />  


			</section>
    )   
}

export default  Hero