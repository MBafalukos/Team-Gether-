// import { FUCollapse } from "./FrostUI";
// import { useState } from "react";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import SectionData from "./SectionData";

// function Delete({ data }) {
//   const [accordion, setAccordion] = useState<number | null>(0);

//   const handleAccordion = (index: number) => () => {
//     if (index === accordion) setAccordion(null);
//     else setAccordion(index);
//   };
//   return (
//     <>
//       <div className=" font-Inter bg-blue-400/20">
//         {SectionData.map((kati) => {
//           return (
//             <h1 className="text-center text-4xl font-bold py-10 tracking-wider">
//               {kati.title}
//             </h1>
//           );
//         })}

//         {SectionData.map((kati) => {
//           return <h3 className="text-center text-xl">{kati.subtitle}</h3>;
//         })}
//         <div
//           data-fc-type="accordion"
//           data-aos="fade-up"
//           data-aos-duration="500"
//           className=" gap-10 items-center p-20"
//         >
//           <div className="relative">
//             <div className="hidden sm:block">
//               <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-start-8 2xl:after:end-0 after:bg-[url('@/assets/images/pattern/dot5.svg')]"></div>
//               <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-end-8 before:bg-[url('@/assets/images/pattern/dot2.svg')]"></div>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="flex-1">
//               {SectionData.map((kati) => {
//                 return (
//                   <img src={kati.image} className="w-full  rounded-xl"></img>
//                 );
//               })}
//             </div>

//             <div className=" flex-1">
//               <div>
//                 <FUCollapse
//                   open={accordion == 0}
//                   toggleCollapse={handleAccordion(0)}
//                 >
//                   <FUCollapse.Toggle
//                     className=" inline-flex items-center gap-x-4 w-full p-2  text-black transition-all hover:text-gray-500  dark:hover:text-gray-400"
//                     data-fc-type="collapse"
//                   >
//                     <div className="border rounded-lg flex items-center justify-center h-12 w-12">
//                       {SectionData.map((kati) => {
//                         return <img src={kati.accordion.icon}></img>;
//                       })}
//                       {/* <img src={KnowledgeImg} /> */}
//                     </div>

//                     {SectionData.map((kati) => {
//                       return (
//                         <h1 className="flex items-center w-full  justify-between text-lg">
//                           {kati.accordion.title};
//                           <MdKeyboardArrowDown />
//                         </h1>
//                       );
//                     })}
//                     {/* <h1 className=" flex items-center w-full  justify-between text-lg">
//                       Knowledge Base
//                       <MdKeyboardArrowDown />
//                     </h1> */}
//                   </FUCollapse.Toggle>

//                   <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
//                     {SectionData.map((kati) => {
//                       return (
//                         <p className="text-gray-700 dark:text-gray-300">
//                           {kati.accordion.content};
//                         </p>
//                       );
//                     })}
//                     {/* <p className="text-gray-700 dark:text-gray-300">
//                       Enables comprehensive performance appraisals, fostering
//                       employee development..
//                     </p> */}
//                   </FUCollapse.Menu>
//                 </FUCollapse>

//                 <div className="border-b my-1 w-full "></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Delete;
