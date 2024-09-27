//images

import Engage from "./assets/meeting.png";
import Manage from "./assets/time-management.png";
import Reports from "./assets/seo-report.png";
import DSpace from "./assets/digital.png";

const Features = () => {
  return (
    <>
      <section className="overflow-hidden font-Inter">
        <div className="xl:py-24 py-16">
          <div className="text-center">
            <h1 className="text-3xl/tight  mt-3 mb-4">
              Better Management. Better Performance
            </h1>
            {/* <p className="text-gray-500">
								Start working with <span className="text-primary">Prompt</span>{' '}
								to manage your workforce better
							</p> */}
          </div>

          {/* 1st Features */}
          <div className="xl:pt-16 xl:pb-28 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-20 px-28 ">
              <a href="/engagment">
                <div className="flex flex-col items-center justify-center rounded hover:cursor-pointer transition-all hover:scale-105 hover:border  hover:border-gray-500 py-5">
                  <div className="bg-blue-500/10 rounded-lg flex items-center justify-center h-12 w-12 mb-5">
                    <img src={Engage} />
                  </div>
                  <h1 className="text-xl">Engagment</h1>
                  <p className="font-light px-10 text-center">
                    Engage your employees and build a strong company culture
                  </p>
                </div>
              </a>

              <a href="/managers">
                <div className="flex flex-col items-center justify-center rounded hover:cursor-pointer transition-all hover:scale-105 hover:border  hover:border-gray-500 py-5">
                  <div className="bg-blue-500/10 rounded-lg flex items-center justify-center h-12 w-12 mb-5">
                    <img src={Manage} />
                  </div>
                  <h1 className="text-xl">Managers</h1>
                  <p className="font-light px-10 text-center">
                    Manage communication, performance and culture in one
                    platform
                  </p>
                </div>
              </a>

              <a href="/digital-space">
                <div className="flex flex-col items-center justify-center  rounded   hover:cursor-pointer transition-all hover:scale-105 hover:border  hover:border-gray-500 py-5">
                  <div className="bg-blue-500/10 rounded-lg flex items-center justify-center h-12 w-12 mb-5">
                    <img src={DSpace} />
                  </div>
                  <h1 className="text-xl">Digital Space</h1>
                  <p className="font-light px-10 text-center">
                    Securely manages documents, enhancing collaboration and
                    ensuring compliance.
                  </p>
                </div>
              </a>

              <a href="/reporting">
                <div className="flex flex-col items-center justify-center rounded hover:cursor-pointer transition-all hover:scale-105 hover:border  hover:border-gray-500 py-5">
                  <div className="bg-blue-500/10 rounded-lg flex items-center justify-center h-12 w-12 mb-5">
                    <img src={Reports} />
                  </div>
                  <h1 className="text-xl">Reporting</h1>
                  <p className="font-light px-10 text-center">
                    Generates insights and reports, aiding in data-driven
                    decision-making.
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* 2nd Feature */}

          {/*  */}

          {/* 3rd Feature */}

          {/* <div className="xl:pt-16 xl:pb-28 py-16">
							<div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
								<div className="relative">
									<div className="hidden sm:block">
										<div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-start-8 2xl:after:end-0 after:bg-[url('@/assets/images/pattern/dot5.svg')]"></div>
										<div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-end-8 before:bg-[url('@/assets/images/pattern/dot2.svg')]"></div>
									</div>
									<img
										src={portrait}
										alt="saas1"
										data-aos="fade-right"
										data-aos-duration="400"
									/>
								</div>

								<div className="lg:ms-24">
									<div
										data-fc-type="accordion"
										data-aos="fade-up"
										data-aos-duration="500"
									>
										<FUCollapse
											open={accordion == 0}
											toggleCollapse={handleAccordion(0)}
										>
											<FUCollapse.Toggle
												className="pt-2 inline-flex items-center gap-x-4 w-full  text-left text-black transition-all hover:text-gray-500  dark:hover:text-gray-400"
												data-fc-type="collapse"
											>
												<div className="bg-blue-500/10 rounded-lg flex items-center justify-center h-12 w-12">
													{' '}
												</div>
                                                
												<h1 className=" mb-4 mt-2">
													Improve Employee Experience
												</h1>
											</FUCollapse.Toggle>
											<FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
												<p className="text-gray-700 dark:text-gray-300">
													Before we dive into why companies must invest in
													employee experience (EX), it’s important to understand
													what this concept entails.
												</p>
												<div className="mt-7 flex items-center">
													<div className="text-primary">
														Learn more{' '}
														<i className="fa-solid fa-arrow-right ms-2"></i>
													</div>
												</div>
											</FUCollapse.Menu>
										</FUCollapse>

										<div className="border-b my-6"></div>

										<FUCollapse
											open={accordion == 1}
											toggleCollapse={handleAccordion(1)}
										>
											<FUCollapse.Toggle
												className="pt-2 inline-flex items-center gap-x-4 w-full  text-left text-black transition hover:text-gray-500  dark:hover:text-gray-400"
												data-fc-type="collapse"
											>
												<div className="bg-green-500/10 rounded-lg flex items-center justify-center h-12 w-12">
													{' '}
												</div>
												<h1 className=" mb-4 mt-2">
													Hiring & Onboarding
												</h1>
											</FUCollapse.Toggle>
											<FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
												<p className="text-gray-700 dark:text-gray-300">
													Post your job, interview candidates and make offers,
													all on Prompt. Start hiring today.
												</p>
												<div className="mt-7 flex items-center">
													<div className="text-primary">
														Learn more{' '}
														<i className="fa-solid fa-arrow-right ms-2"></i>
													</div>
												</div>
											</FUCollapse.Menu>
										</FUCollapse>

										<div className="border-b my-6"></div>

										<FUCollapse
											open={accordion == 2}
											toggleCollapse={handleAccordion(2)}
										>
											<FUCollapse.Toggle
												className="pt-2 inline-flex items-center gap-x-4 w-full  text-left text-black transition hover:text-gray-500  dark:hover:text-gray-400"
												data-fc-type="collapse"
											>
												<div className="bg-orange-500/10 rounded-lg flex items-center justify-center h-12 w-12">
													    {' '}
												</div>
												<h1 className=" mb-4 mt-2">
													People Data & Analytics
												</h1>
											</FUCollapse.Toggle>
											<FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
												<p className="text-gray-700 dark:text-gray-300">
													Finding committed employees is one of public and
													private organizations’ top priorities.
												</p>
												<div className="mt-7 flex items-center">
													<div className="text-primary">
														Learn more{' '}
														<i className="fa-solid fa-arrow-right ms-2"></i>
													</div>
												</div>
											</FUCollapse.Menu>
										</FUCollapse>
									</div>
								</div>
							</div>
						</div> */}

          {/* <div>
							<div className="grid  lg:grid-cols-2 grid-cols-1n gap-6 items-center">
								<div
									className="order-2 lg:order-1 2xl:w-9/12"
									data-aos="fade-up"
									data-aos-duration="500"
								>
									<div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-lg">
										<svg
											className="h-7 w-7 text-primary"
											viewBox="0 0 24 24"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXdiv="http://www.w3.org/1999/xdiv"
										>
											{' '}
											<g
												stroke="none"
												strokeWidth="1"
												fill="none"
												fillRule="evenodd"
											>
												{' '}
												<rect
													id="bound"
													x="0"
													y="0"
													width="24"
													height="24"
												></rect>{' '}
												<path
													d="M10.8226874,8.36941377 L12.7324324,9.82298668 C13.4112512,8.93113547 14.4592942,8.4 15.6,8.4 C17.5882251,8.4 19.2,10.0117749 19.2,12 C19.2,13.9882251 17.5882251,15.6 15.6,15.6 C14.5814697,15.6 13.6363389,15.1780547 12.9574041,14.4447676 L11.1963369,16.075302 C12.2923051,17.2590082 13.8596186,18 15.6,18 C18.9137085,18 21.6,15.3137085 21.6,12 C21.6,8.6862915 18.9137085,6 15.6,6 C13.6507856,6 11.9186648,6.9294879 10.8226874,8.36941377 Z"
													id="Combined-Shape"
													fill="currentColor"
													opacity="0.3"
												></path>{' '}
												<path
													d="M8.4,18 C5.0862915,18 2.4,15.3137085 2.4,12 C2.4,8.6862915 5.0862915,6 8.4,6 C11.7137085,6 14.4,8.6862915 14.4,12 C14.4,15.3137085 11.7137085,18 8.4,18 Z"
													id="Oval-14-Copy"
													fill="currentColor"
												></path>{' '}
											</g>{' '}
										</svg>{' '}
									</div>

									<h1 className="text-3xl/tight  mt-6 mb-4">
										Smart Payroll. Paying your people couldn't be easier
									</h1>
									<p className="text-gray-500">
										You can modify your pages with drag-dropping , can import
										demos with just ” One Click” and can modify theme setting
										easy-to-use options panel.
									</p>
									<div className="flex items-center mt-12">
										<div className="text-primary">
											Learn more{' '}
											<i className="fa-solid fa-arrow-right ms-2"></i>{' '}
										</div>
									</div>
								</div>

								<div className="relative order-1 lg:order-2">
									<div className="hidden sm:block">
										<div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-end-8 2xl:after:-end-8 after:bg-[url('@/assets/images/pattern/dot2.svg')]"></div>
										<div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('@/assets/images/pattern/dot5.svg')]"></div>
									</div>

									<img
										src={portrait}
										alt="saas2"
										data-aos="fade-left"
										data-aos-duration="400"
									/>
								</div>
							</div>
						</div> */}

          {/*   <div className="xl:pt-16 xl:pb-28 py-16">
							<div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
								

								<div className="lg:ms-24">
									<div
										data-fc-type="accordion"
										data-aos="fade-up"
										data-aos-duration="500"
									>  
                                        
										<FUCollapse
											open={accordion == 0}
											toggleCollapse={handleAccordion(0)}
										>
											<FUCollapse.Toggle
												className="pt-2 inline-flex items-center gap-x-4 w-full  text-left text-black transition-all hover:text-gray-500  dark:hover:text-gray-400"
												data-fc-type="collapse"
											>
												<div className="bg-blue-500/10 rounded-lg flex items-center justify-center h-12 w-12">
													{' '}
												</div>
                                                
												<h1 className=" mb-4 mt-2">
													Improve Employee Experience
												</h1>
											</FUCollapse.Toggle>
											<FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
												<p className="text-gray-700 dark:text-gray-300">
													Before we dive into why companies must invest in
													employee experience (EX), it’s important to understand
													what this concept entails.
												</p>
												<div className="mt-7 flex items-center">
													<div className="text-primary">
														Learn more{' '}
														<i className="fa-solid fa-arrow-right ms-2"></i>
													</div>
												</div>
											</FUCollapse.Menu>
										</FUCollapse>

										<div className="border-b my-6"></div>

										<FUCollapse
											open={accordion == 1}
											toggleCollapse={handleAccordion(1)}
										>
											<FUCollapse.Toggle
												className="pt-2 inline-flex items-center gap-x-4 w-full  text-left text-black transition hover:text-gray-500  dark:hover:text-gray-400"
												data-fc-type="collapse"
											>
												<div className="bg-green-500/10 rounded-lg flex items-center justify-center h-12 w-12">
													{' '}
												</div>
												<h1 className=" mb-4 mt-2">
													Hiring & Onboarding
												</h1>
											</FUCollapse.Toggle>
											<FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
												<p className="text-gray-700 dark:text-gray-300">
													Post your job, interview candidates and make offers,
													all on Prompt. Start hiring today.
												</p>
												<div className="mt-7 flex items-center">
													<div className="text-primary">
														Learn more{' '}
														<i className="fa-solid fa-arrow-right ms-2"></i>
													</div>
												</div>
											</FUCollapse.Menu>
										</FUCollapse>

										<div className="border-b my-6"></div>

										<FUCollapse
											open={accordion == 2}
											toggleCollapse={handleAccordion(2)}
										>
											<FUCollapse.Toggle
												className="pt-2 inline-flex items-center gap-x-4 w-full  text-left text-black transition hover:text-gray-500  dark:hover:text-gray-400"
												data-fc-type="collapse"
											>
												<div className="bg-orange-500/10 rounded-lg flex items-center justify-center h-12 w-12">
													    {' '}
												</div>
												<h1 className=" mb-4 mt-2">
													People Data & Analytics
												</h1>
											</FUCollapse.Toggle>
											<FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
												<p className="text-gray-700 dark:text-gray-300">
													Finding committed employees is one of public and
													private organizations’ top priorities.
												</p>
												<div className="mt-7 flex items-center">
													<div className="text-primary">
														Learn more{' '}
														<i className="fa-solid fa-arrow-right ms-2"></i>
													</div>
												</div>
											</FUCollapse.Menu>
										</FUCollapse>
									</div>
								</div>
                                 <div className="relative">
									<div className="hidden sm:block">
										<div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-start-8 2xl:after:end-0 after:bg-[url('@/assets/images/pattern/dot5.svg')]"></div>
										<div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-end-8 before:bg-[url('@/assets/images/pattern/dot2.svg')]"></div>
									</div>
									<img
										src={portrait}
										alt="saas1"
										data-aos="fade-right"
										data-aos-duration="400"
									/>
								</div> 
							</div>
						</div> */}
        </div>

        {/* <div  className=" hidden xl:py-24 py-16">
					<div className="container" data-aos="fade-up" data-aos-duration="600">
						<div className="text-center">
							<h1 className="text-2xl ">
								Any many more powerful features
							</h1>
						</div>

						<div className=" hidden py-16">
							<div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
								<div className="order-1">
									<div className="flex flex-col gap-5">
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Hire and Retain Top Talent
										</p>
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Team Management
										</p>
									</div>
								</div>

								<div className="order-3 xl:order-2">
									<div className="flex flex-col gap-5">
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Stay Compliant
										</p>
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Improve Productivity
										</p>
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Improve Experience
										</p>
									</div>
								</div>

								<div className="order-4 xl:order-3">
									<div className="flex flex-col gap-5">
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Self-service Time Tracking
										</p>
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Performance Management
										</p>
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Expert HR
										</p>
									</div>
								</div>

								<div className="order-2 xl:order-4">
									<div className="flex flex-col gap-5">
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											New Hire Checklist
										</p>
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Tax Calculator
										</p>
									</div>
								</div>
							</div>
						</div>

						<button className="flex items-center justify-center mx-auto">
							<div
								to=""
								className="bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg  hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-6 py-3"
							>
								Sign Up Now <i className="fa-solid fa-arrow-right ms-2"></i>{' '}
							</div>
						</button>
					</div>
				</div> */}
      </section>
    </>
  );
};

export default Features;
