import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-green-500"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-green-500 font-sans text-sm  sm:text-xl">
            {" "}
            02.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://agazh.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"Agazh.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"hairstore.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
              <div className="w-full"></div>
              <span className="text-green-500 sm:text-lg bg-AAprimary px-2 py-1 rounded">
                Currently Active....
              </span>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-green-500 text-base">StartUp</span>
                <a href="" rel="noreferrer">
                  <span className=" md:text-gray-200 text-green-500 font-bold text-xl hover:cursor-pointer">
                    Agazh
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  A digital platform that connects buyers with experts to
                  provide personalized advice on product selection, budgeting,
                  and marketplace recommendations. Built to streamline
                  purchasing decisions and create a revenue-generating
                  consultation model.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              ></ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/Dawit212119/Agazh" />
                <a href="" rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={""}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded text-green-500
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img
                src={"EGA.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full text-green-500 opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"EGA.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-green-500 text-base">InternShip</span>
                <Link href={"/typing"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    EGA
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Developed EGA, an e-commerce platform for Chewata Awaki,
                  enabling seamless game purchases and rentals. Utilized
                  Next.js, Prisma ORM,MongoDb, and Telebirr for full-stack
                  development, e-commerce functionalities, and payment
                  integration.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Nextjs</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">Prisma</span>
                <span className="pr-4 z-10">telebirr</span>
                <span className="pr-4 z-10">Cloudinary</span>
                <span className="pr-4 z-10">MongoDB</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="EGA.png" />
                <ExternalLink url={"typing"} router={router} />
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a
                href="https://heroconsultancy-kcip.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"Hero.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full text-green-500 opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/YPredict-v1.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-green-500 text-base">Freelance</span>
                <a
                  href="https://heroconsultancy-kcip.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Hero-Counsultancy
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  I had the opportunity to actively participate in the
                  development of a project designed to bridge the gap between
                  individuals seeking{" "}
                  <span className="text-green-500"> scholarships </span> and{" "}
                  <span className="text-green-500"> consultancy </span>
                  organizations. The goal of the system was to create an
                  intuitive platform that facilitates seamless communication,
                  guiding users through the process of finding the right
                  scholarship{" "}
                  <span className="text-green-500">
                    {" "}
                    opportunities{" "}
                  </span> and{" "}
                  <span className="text-green-500">
                    {" "}
                    receiving expert advice{" "}
                  </span>{" "}
                  from consultants. This system was built to streamline the
                  application process, making it easier for individuals to
                  access valuable resources and increase their chances of
                  success in securing scholarships.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Prisma</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">Nextjs</span>
                <span className="pr-4 z-10">Nodemailer</span>
                <span className="pr-4 z-10">Typescript</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <div className="z-10 flex fle-row space-x-5 ">
                  <GithubIcon link="https://github.com/Dawit212119/Consultancy" />
                  <a
                    href="https://heroconsultancy-kcip.vercel.app/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <ExternalLink url={""} router={router} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={""} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"DMS.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full text-green-500 opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"DMS.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-green-500 text-base">
                  Freelance Project
                </span>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-green-500 font-bold text-xl hover:cursor-pointer">
                    Document Mangement System
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  A secure and user-friendly web app for organizing, storing,
                  and accessing digital documents efficiently. Users can upload
                  documents, categorize them, search easily, and track versions.
                  Each uploaded document can also have a unique QR code
                  generated for quick access, all within a responsive interface
                  for seamless use across devices.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Nextjs</span>
                <span className="pr-4 z-10">Express</span>
                <span className="pr-4 z-10">Firebase</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {<GithubIcon link="https://github.com/Dawit212119/DMS" />}
                <a href="" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                // href={"https://mern-esate-fb5y.onrender.com"}
                // target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"mernEstate.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full text-green-500 opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"mernEstate.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-green-500 text-base">mern-esate.com</span>
                <a
                  href="https://mern-esate-fb5y.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-green-500 font-bold text-xl hover:cursor-pointer">
                    RealEstate
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  I developed a platform that connects{" "}
                  <span className="text-green-500"> buyers</span>and{" "}
                  <span className="text-green-500"> sellers </span> of houses or
                  rental properties. Users can create accounts and post detailed
                  listings about their properties, including descriptions, the
                  number of bedrooms, and other relevant features. Potential
                  buyers or renters can contact the property owner directly via
                  email to inquire further. This project provides a seamless way
                  for individuals to{" "}
                  <span className="text-green-500"> find </span> and
                  <span className="text-green-500"> connect </span>
                  with each other in the real estate market.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Reactjs</span>
                <span className="pr-4 z-10">Nodejs</span>
                <span className="pr-4 z-10">Expressjs</span>
                <span className="pr-4 z-10">MongoDB</span>
                <span className="pr-4 z-10">Tailwind</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {
                  <GithubIcon link="https://github.com/Dawit212119/mern-esate" />
                }
                <a
                  href="https://mern-esate-fb5y.onrender.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://mern-esate-fb5y.onrender.com"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"Admin.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full text-green-500 opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"mernEstate.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-green-500 text-base"></span>
                <a
                  href="https://mern-esate-fb5y.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-green-500 font-bold text-xl hover:cursor-pointer">
                    Admin Dashboard
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  I am currently working on an{" "}
                  <span className="text-green-500">admin dashboard</span>{" "}
                  project that allows administrators to manage bus distribution,
                  oversee routes, and perform actions such as updating,
                  deleting, and viewing route details efficiently.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Reactjs</span>
                <span className="pr-4 z-10">Nodejs</span>
                <span className="pr-4 z-10">Expressjs</span>
                <span className="pr-4 z-10">MongoDB</span>
                <span className="pr-4 z-10">Tailwind</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {
                  <GithubIcon link="https://github.com/Dawit212119/Anbessa-Bus" />
                }
                <a
                  // href="https://mern-esate-fb5y.onrender.com"
                  // target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        ///////////////////////////////
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                // href={"https://mern-esate-fb5y.onrender.com"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"User.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full text-green-500 opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={".png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-green-500 text-base"></span>
                <a
                  href="https://mern-esate-fb5y.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-green-500 font-bold text-xl hover:cursor-pointer">
                    User
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  I am working on a connected system where{" "}
                  <span className="text-green-500">users</span> can fill out
                  route forms, sign up, sign in, and view their route status.
                  This information is sent to the admin side as notifications,
                  allowing administrators to identify and manage the most needed
                  routes efficiently.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Reactjs</span>
                <span className="pr-4 z-10">Nodejs</span>
                <span className="pr-4 z-10">Expressjs</span>
                <span className="pr-4 z-10">MongoDB</span>
                <span className="pr-4 z-10">Tailwind</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {<GithubIcon link="https://github.com/Dawit212119/User" />}
                <a
                  // href="https://mern-esate-fb5y.onrender.com"
                  // target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // TODO : to here  */}
        {/* // ?  Project  1 Ens Vision */}
        {/* // ?  Project 2 - FeverTokens */}
        {/* // ?  Project  3*/}
        {/* // ?  Project 4 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={"/userdatapuller"}>
                <div
                  className="absolute w-full h-full rounded bg-green-500
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img
                src={"xclone.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"xclone.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-green-500 text-base">Project</span>
                <Link href={""}>
                  <span className=" md:text-gray-200 text-green-500 font-bold text-xl hover:cursor-pointer">
                    X-clone
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  I cloning the popular{" "}
                  <span className="text-green-500"> platform X </span> . The
                  main objective of this project was to replicate the core{" "}
                  <span className="text-green-500"> features </span> and{" "}
                  <span className="text-green-500"> functionality </span>
                  of X while introducing new features tailored to specific user
                  needs. One of the key elements was to enable users to post
                  <span className="text-green-500"> content, </span>{" "}
                  <span className="text-green-500"> interact </span> with
                  others, and explore various{" "}
                  <span className="text-green-500"> feeds </span> . The project
                  aimed to create a seamless user experience, focusing on
                  real-time interaction and an easy-to-use interface, just like
                  the original platform. Throughout the development process, I
                  gained valuable hands-on experience in building
                  <span className="text-green-500">
                    {" "}
                    scalable web applications{" "}
                  </span>{" "}
                  and{" "}
                  <span className="text-green-500">
                    {" "}
                    improving user engagement{" "}
                  </span>
                  , making the platform more accessible and interactive
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Nextjs</span>
                <span className="pr-4 z-10">Firebase</span>
                <span className="pr-4 z-10">Tailwind</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/Dawit212119/X-clone" />
                <ExternalLink url={""} router={router} />
              </div>
            </div>
          </div>
        </div>
        {/* // ? Project 5 */}
        {/* // ?  Project 6 */}
        {/* <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
        {/* <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href="https://github.com/hktitof/CallCenter"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/CallCenter.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div> */}
        {/* right Content */}
        {/* <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
        {/* <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/CallCenter.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div> */}
        {/* <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a
                  href="https://github.com/hktitof/CallCenter"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Call Center Management System
                  </span>
                </a> */}
        {/* </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  A{" "}
                  <span className="text-AAsecondary">
                    JavaFX call center management system
                  </span>{" "}
                  project it is used for receiving or transmitting a large
                  volume of enquiries between the agent and the customer,it
                  handles the communication between agents & clients it can be
                  used for the both side client & agent side to handle the
                  messages and issues.
                </p>
              </div> */}
        {/* <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">JavaFX</span>
                <span className="pr-4 z-10">Java Concurrency</span>
                <span className="pr-4 z-10">MultiThreading</span>
                <span className="pr-4 z-10">MySQL</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/hktitof/CallCenter" />
              </div>
            </div> */}
        {/* </div>
        </div> */}
      </div>
    </div>
  );
}
