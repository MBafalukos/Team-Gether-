// import { Link } from 'react-router-dom'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "./Form/";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  // form validation schema
  const schemaResolver = yupResolver(
    yup.object().shape({
      fname: yup.string().required("Please enter first name"),
      lname: yup.string().required("Please enter last name"),
      email: yup
        .string()
        .required("Please enter Email")
        .email("Please enter valid Email"),
      message: yup.string().required("Please enter Message"),
    })
  );

  // form method
  const methods = useForm({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;
  return (
    <>
      <section
        id="contact"
        className="bg-sky-100/20 lg:pt-28 sm:pb-36 pb-16 pt-36 relative"
      >
        <div className="flex justify-center">
          <div className="lg:w-7/12 text-center">
            <h1 className="text-5xl/relaxed text-gray-700">Contact Us</h1>
            <p className="mb-6 md:text-lg text-gray-500">
              Please fill out the following form and we will get back to you
              shortly
            </p>
          </div>
        </div>

        <div className="absolute -bottom-1 w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 40"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            {" "}
            <g
              id="shape-b"
              stroke="none"
              strokeWidth={1}
              fill="none"
              fillRule="evenodd"
            >
              {" "}
              <g id="curve" fill="#fff">
                {" "}
                <path
                  d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z"
                  id="Path"
                />{" "}
              </g>{" "}
            </g>{" "}
          </svg>
        </div>
      </section>

      <section className="lg:pb-24 py-6 relative">
        <div className="flex align-items-center justify-center">
          <div className="w-1/2">
            <div className="mb-6 relative bg-clip-border rounded-[0.1875rem]">
              <div className="py-12">
                <h2 className="mb-4 text-2xl/6 mt-0 font-medium">
                  Let's Talk Further
                </h2>
                <p className="mb-12 text-base/6">
                  Please fill out the following form and we will get back to you
                  shortly
                </p>
                <form
                  onSubmit={handleSubmit(() => {
                    location;
                  })}
                >
                  <div className="flex gap-6">
                    <div className="md:w-1/2">
                      <FormInput
                        label="First Name"
                        name="fname"
                        type="text"
                        className="py-2 px-4 leading-6 block w-full border-black border  rounded text-sm focus:border-gray-300 focus:ring-0"
                        placeholder="Your First Name"
                        labelClassName="block text-sm font-medium mb-1 text-gray-600"
                        containerClass="mb-5"
                        register={register}
                        errors={errors}
                        control={control}
                      />
                    </div>
                    <div className="md:w-1/2">
                      <FormInput
                        label="Last Name"
                        name="lname"
                        type="text"
                        className="py-2 px-4 leading-6 block w-full border-black border  rounded text-sm focus:border-gray-300 focus:ring-0"
                        placeholder="Your Last Name"
                        labelClassName="block text-sm font-medium mb-1 text-gray-600"
                        containerClass="mb-5"
                        register={register}
                        errors={errors}
                        control={control}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <FormInput
                      label="Email"
                      name="email"
                      type="email"
                      className="py-2 px-4 leading-6 block w-full border-black border  rounded text-sm focus:border-gray-300 focus:ring-0"
                      placeholder="Your Email"
                      labelClassName="block text-sm font-medium mb-1 text-gray-600"
                      containerClass="mb-5"
                      register={register}
                      errors={errors}
                      control={control}
                    />
                    <FormInput
                      label="Message"
                      name="message"
                      type="textarea"
                      className="py-2 px-4 leading-6 block w-full border-black border resize-none rounded text-sm focus:border-gray-300 focus:ring-0"
                      placeholder="Type Your Massage..."
                      labelClassName="block text-sm font-medium mb-1 text-gray-600"
                      containerClass="mb-5"
                      rows={4}
                      register={register}
                      errors={errors}
                      control={control}
                    />
                  </div>
                  <div className="flex justify-center ">
                    <button
                      type="submit"
                      className="inline-flex w-1/3 justify-center items-center text-md bg-sky-300 text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 rounded-md transition-all hover:shadow-lg hover:shadow-primary/80"
                    >
                      <span className="hidden md:block">Get in touch</span>
                      <span className="block md:hidden">Send </span>
                      <span className="w-4 h-4 ms-1">
                        <svg
                          className="w-full h-full text-white"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          {" "}
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            {" "}
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />{" "}
                            <path
                              d="M3,13.5 L19,12 L3,10.5 L3,3.7732928 C3,3.70255344 3.01501031,3.63261921 3.04403925,3.56811047 C3.15735832,3.3162903 3.45336217,3.20401298 3.70518234,3.31733205 L21.9867539,11.5440392 C22.098181,11.5941815 22.1873901,11.6833905 22.2375323,11.7948177 C22.3508514,12.0466378 22.2385741,12.3426417 21.9867539,12.4559608 L3.70518234,20.6826679 C3.64067359,20.7116969 3.57073936,20.7267072 3.5,20.7267072 C3.22385763,20.7267072 3,20.5028496 3,20.2267072 L3,13.5 Z"
                              id="Combined-Shape"
                              fill="currentcolor"
                            />{" "}
                          </g>{" "}
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <div className="lg:w-5/12 ms-auto overflow-x-hidden">
						<div className="h-[520px]">
							<div
								id="marker-map5"
								className="h-100"
								data-toggle="map"
								data-map='{"mapCenter": [40.749179, -73.989276], "zoom": 12, "useTextIcon": false, "interactive": true, "geojson": "/assets/sample-listing-geojson.json" }'
							>
								<iframe
									className="w-full h-[500px]"
									src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569"
									frameBorder={0}
								/>
							</div>
						</div>
					</div> */}
        </div>
      </section>
    </>
  );
};

export default ContactUs;
