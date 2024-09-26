import { FUCollapse } from '../FrostUI'
import { useState } from 'react'

import portrait from "../assets/portrait.jpg"

//icons
import { TiLightbulb } from "react-icons/ti";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LuScanFace } from "react-icons/lu";

function Engagment() {

    const [accordion, setAccordion] = useState<number | null>(0)

	const handleAccordion = (index: number) => () => {
		if (index === accordion) setAccordion(null)
		else setAccordion(index)
	}
 
    return (
    <div className='mx-44 my-36'>
                                    

                                    <h1 className='text-center text-2xl mb-10'>Engagment</h1>
                                    <div
										data-fc-type="accordion"
										data-aos="fade-up"
										data-aos-duration="500"
                                        className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'
									>
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
                                    
                                <div>
                                    <div>
										<FUCollapse
											open={accordion == 0}
											toggleCollapse={handleAccordion(0)}
										>   
                                            
											<FUCollapse.Toggle
												className=" inline-flex items-center gap-x-4 w-full  text-left text-black transition-all hover:text-gray-500  dark:hover:text-gray-400"
												data-fc-type="collapse"
											>
												<div className="bg-blue-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                                                <TiLightbulb  className='text-black h-7 w-7'/>
												</div>
                                                
												<h1 className="text-lg">
													Brain Storming
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
                                        

										<div className="border-b my-1"></div>
                                        </div>

                                        <div>
										<FUCollapse
											open={accordion == 1}
											toggleCollapse={handleAccordion(1)}
										>
											<FUCollapse.Toggle
												className=" inline-flex items-center gap-x-4 w-full  text-left text-black transition hover:text-gray-500  dark:hover:text-gray-400"
												data-fc-type="collapse"
											>
												<div className="bg-green-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                                                <HiOutlineSpeakerphone className = 'text-black w-7 h-7' />
												</div>
												<h1 className="text-lg">
                                                        Announcements
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

										<div className="border-b my-1"></div>
                                        </div>

                                        <div>
										<FUCollapse
											open={accordion == 2}
											toggleCollapse={handleAccordion(2)}
										>
											<FUCollapse.Toggle
												className="pt-2 inline-flex items-center gap-x-4 w-full  text-left text-black transition hover:text-gray-500  dark:hover:text-gray-400"
												data-fc-type="collapse"
											>
												<div className="bg-orange-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                                                <IoChatboxEllipsesOutline className='text-black w-7 h-7'/>
                                                
												</div>
												<h1 className="text-lg">
                                                        Chat
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
                                        <div className="border-b my-1"></div>
                                        </div>
                                        <div>
										<FUCollapse
											open={accordion == 3}
											toggleCollapse={handleAccordion(3)}
										>
											<FUCollapse.Toggle
												className="pt-2 inline-flex items-center gap-x-4 w-full  text-left text-black transition hover:text-gray-500  dark:hover:text-gray-400"
												data-fc-type="collapse"
											>
												<div className="bg-orange-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                                                <LuScanFace className='text-black w-7 h-7' />
												</div>
												<h1 className="text-lg">
                                                Employee Recognition
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
                                        <div className="border-b my-1"></div>
                                        </div>
                                    </div>        
                                
                                
                                </div> 

    </div>
  )
}

export default Engagment
