import React from "react";
import img3 from "../Assets/Ecommerces/img3.png";
import img4 from "../Assets/Ecommerces/img4.png";
import img5 from "../Assets/Ecommerces/img5.png";
import img6 from "../Assets/Ecommerces/img6.png";
import img7 from "../Assets/Ecommerces/img7.png";
import img8 from "../Assets/Ecommerces/img8.png";
import img9 from "../Assets/Ecommerces/img9.png";
import img10 from "../Assets/Ecommerces/img10.png";
import img11 from "../Assets/Ecommerces/img11.png";
import img12 from "../Assets/Ecommerces/img12.png";
import img13 from "../Assets/Ecommerces/img13.png";
import img14 from "../Assets/Ecommerces/img14.png";
import svg1 from "../Assets/Ecommerces/svg1.svg";
import svg2 from "../Assets/Ecommerces/svg2.svg";
import svg3 from "../Assets/Ecommerces/svg3.svg";
import icone1 from "../Assets/Ecommerces/icone5.svg";
import icone2 from "../Assets/Ecommerces/icone6.svg";
import icone3 from "../Assets/Ecommerces/icone7.svg";
import icone4 from "../Assets/Ecommerces/icone8.svg";
import line from "../Assets/Ecommerces/line.svg";
import bgimage from "../Assets/Ecommerces/bg-image.png";
import { BiPhoneCall } from "react-icons/bi";

const Ecommerce = () => {
  const caseStudies = [
    {
      title: "Fashion Retailer",
      icone: svg3,
      description:
        "We helped a leading fashion brand launch an e-commerce store that increased their online sales by 200% within the first six months.",
    },
    {
      title: "Electronics Store",
      icone: svg1,
      description:
        "Our team developed a robust e-commerce platform for an electronics retailer, enabling them to handle high-order volumes during peak shopping seasons.",
    },
    {
      title: "Healthcare Products",
      icone: svg2,
      description:
        "We designed and developed an e-commerce website for a healthcare company, ensuring compliance with industry regulations while providing a user-friendly shopping experience.",
    },
  ];

  return (
    <div className="mt-20 w-full">
      <div
        className={`top pt-20 h-[30rem] w-[100%] bg-cover bg-[url("http://localhost:3000/images/ecombanner.png")]`}
      >
        <div className="w-[80%] mx-auto">
          <div className="heading">
            <h2 className="text-4xl font-bold uppercase">
              <span>Transform </span>{" "}
              <span className="text-[#2334DE]">Your Business </span>{" "}
              <span>with Cutting-Edge</span>{" "}
              <span className="text-[#2334DE]">
                <br /> E-commerce Solutions
              </span>
            </h2>
          </div>
          <div className="mt-2 flex gap-2">
            <p className="text-sm">
              At Maxify Solutions, we specialize in creating powerful and
              user-friendly e-commerce websites that not only attract customers
              but also convert visits into sales. As a leading Ecommerce Website
              Designing Company with a strong presence, we are committed to
              delivering exceptional e-commerce solutions that meet the unique
              needs of your business. Whether you are a startup looking to make
              your mark or an established business aiming to enhance your online
              presence, our team of experts is here to help you succeed.
            </p>
            <div className="w-[40%] mt-3">
              <button className="p-2 w-[100%] rounded-full border-[#C21EFC] border-[1px]">
                our services
              </button>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto mt-10">
          <img className="w-[100%]" src="images/img2.png" alt="" />
        </div>
      </div>

      {/* second section */}
      <section>
        <div className="bg-white mt-96">
          <div className="flex flex-col md:flex-row items-center  lg:p-8 md:p-16 sm:p-2 lg:w-[90%] sm:w-[90%] mx-auto">
            {/* Left Section */}
            <div className="md:w-[50%] relative flex sm:ml-0 md:mb-0 justify-start">
              <div className="relative">
                <img
                  src={img3}
                  alt="Main"
                  className="rounded-lg w-full h-[25rem] mb-4 ml-2"
                />
                <img
                  src={img4}
                  alt="Secondary"
                  className=" shadow-md w-52 h-auto absolute bottom-0 right-0 transform translate-x-4 translate-y-4"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] sm:w-full pl-0 sm:mt-12 md:mt-0">
              <h2 className="text-3xl md:text-4xl sm:text-xl font-bold text-gray-900 mb-6 sm:mb-2">
                <span>
                  Why Choose Maxify <br /> Solutions for{" "}
                </span>
                <span className="text-[#1351D8]">
                  E-commerce Website Development?
                </span>
              </h2>
              <div className="bg-white rounded-lg">
                <h3 className="text-xl font-semibold  mb-2 text-gray-600">
                  Expertise You Can Trust
                </h3>
                <p className="text-gray-700 mb-4 text-[13px]">
                  Maxify Solutions has established itself as a trusted name in
                  the industry. Our expertise in E-commerce Web Development
                  allows us to create websites that are not only visually
                  appealing but also functionally robust, ensuring a seamless
                  shopping experience for your customers. As an Ecommerce
                  Website Designing Company in Delhi, we understand the local
                  market dynamics and are well-equipped to help businesses
                  succeed in this competitive landscape.
                </p>
              </div>

              <div className="mt-8 flex md:flex-row sm:flex-col gap-3 items-center space-x-4">
                <button className="gradient-background text-white font-normal text-sm px-0 rounded-full py-3 sm:w-full md:w-52 hover:bg-[#2334DE] transition duration-300">
                  EXPLORE MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center  lg:p-8 md:p-16 sm:p-2 lg:w-[90%] sm:w-[90%] mx-auto">
            {/* Left Section */}
            <div className="md:w-[50%] sm:w-full pl-0 sm:mt-12 md:mt-0">
              {/* <h2 className="text-3xl md:text-4xl sm:text-xl font-bold text-gray-900 mb-6 sm:mb-2">
                <span>
                  Why Choose Maxify <br /> Solutions for{" "}
                </span>
                <span className="text-[#1351D8]">
                  E-commerce Website Development?
                </span>
              </h2> */}
              <div className="bg-white rounded-lg">
                <h3 className="text-xl font-semibold  mb-2 text-gray-600">
                  Custom Solutions Tailored to Your Needs
                </h3>
                <p className="text-gray-700 mb-4 text-[13px]">
                  Every business is unique, and so are its e-commerce needs. At
                  Maxify Solutions, we take a personalized approach to Ecommerce
                  Website Design Service in India. Our team works closely with
                  you to understand your business goals, target audience, and
                  specific requirements. This allows us to create a customized
                  e-commerce platform that aligns perfectly with your brand and
                  delivers a superior user experience.
                </p>
              </div>

              <div className="mt-8 flex md:flex-row sm:flex-col gap-3 items-center space-x-4">
                <button className="gradient-background text-white font-normal text-sm px-0 rounded-full py-3 sm:w-full md:w-52 hover:bg-[#2334DE] transition duration-300">
                  EXPLORE MORE
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] relative flex sm:ml-0 md:mb-0 justify-end">
              <div className="relative">
                <img
                  src={img5}
                  alt="Main"
                  className="rounded-lg shadow-md w-full h-[25rem] mb-4 ml-2"
                />
                <img
                  src={img6}
                  alt="Secondary"
                  className=" shadow-md w-52 h-auto absolute bottom-0 right-0 transform translate-x-4 translate-y-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mt-10">
          <div className="flex flex-col md:flex-row  lg:p-8 md:px-16 sm:p-2 lg:w-[90%] sm:w-[90%] mx-auto">
            {/* Left Section */}
            <div className="md:w-[50%] relative flex sm:ml-0 md:mb-0 justify-start mt-20">
              <div className="">
                <img
                  src={img7}
                  alt="Main"
                  className="rounded-lg w-full h-[25rem] mb-4 ml-2"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] sm:w-full pl-0 sm:mt-12 md:mt-0">
              <h2 className="text-3xl md:text-4xl sm:text-xl font-bold text-gray-900 mb-6 sm:mb-2 text-center">
                <p className="gradient-text">End-to-End E-</p>
                <p>Commerce Development</p>
              </h2>
              <div className="bg-white rounded-lg">
                <h3 className="text-lg mb-2 text-gray-600">
                  From concept to launch, Maxify Solutions offers end-to-end{" "}
                  <span> </span>
                  <span className="text-gray-900">
                    Ecommerce Website Design Services <span> </span>
                  </span>
                  that cover every aspect of your online store. Our services
                  include:
                </h3>
                <ul className="flex flex-col gap-2 list-disc">
                  <li>
                    <span className="text-gray-950 font-bold">
                      Custom E-commerce Website Design{" "}
                    </span>
                    :{" "}
                    <span>
                      Tailored designs that reflect your brand identity and
                      resonate with your target audience.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-950 font-bold">
                      Responsive Web Development{" "}
                    </span>
                    :{" "}
                    <span>
                      Mobile-friendly websites that provide a seamless
                      experience across all devices.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-950 font-bold">
                      Secure Payment Gateway Integration{" "}
                    </span>
                    :{" "}
                    <span>
                      Safe and reliable payment solutions that build trust and
                      encourage repeat business
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-950 font-bold">
                      SEO Optimizatio{" "}
                    </span>
                    : <span>E-commerce websites opt</span>
                  </li>
                  <li>
                    imized for search engines to drive organic traffic and boost
                    sales.
                  </li>
                  <li>
                    <span className="text-gray-950 font-bold">
                      CMS Integration{" "}
                    </span>
                    :{" "}
                    <span>
                      Easy-to-use content management systems that allow you to
                      manage your products, content, and promotions
                      effortlessly.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-950 font-bold">
                      Ongoing Support and Maintenance{" "}
                    </span>
                    :{" "}
                    <span>
                      Continuous support to ensure your website remains
                      up-to-date, secure, and fully functional.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* image section */}
      <div className="imge w-[90%] mx-auto border-2 rounded-t-3xl shadow-xl">
        <div className="">
          <img className="w-full h-[30rem]" src={img8} alt="" />
        </div>
        <div>
          <div className="heading p-10">
            <div>
              <h3 className="text-4xl ">
                <span className="gradient-text font-bold">Our Approach :</span>
                <span className="font-medium">
                  {" "}
                  Driving Results with Proven Strategies.
                </span>
              </h3>
            </div>
            <div className="text-lg font-bold text-[#2334DE] mt-10">
              <h2>User-Centric Design</h2>
            </div>
            <div className="mt-5">
              <p className="leading-8">
                At Maxify Solutions, we believe that the success of an
                e-commerce website lies in its ability to provide a seamless and
                enjoyable shopping experience. Our design philosophy is centered
                around the user, ensuring that every element of your website is
                crafted to enhance usability and drive conversions. As an
                Ecommerce Website Designing Company Delhi, we combine aesthetics
                with functionality to create websites that not only look great
                but also perform exceptionally well.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solid Development Framework */}
      <div>
        <div className="bg-white">
          <div className="flex flex-col md:flex-row gap-10  lg:p-8 md:p-16 sm:p-2 lg:w-[90%] sm:w-[90%] mx-auto">
            {/* Left Section */}
            <div className="md:w-[50%] relative flex sm:ml-0 md:mb-0 justify-start">
              <div className="relative">
                <img
                  src={img9}
                  alt="Main"
                  className="rounded-lg w-[90%]  mb-4 ml-2"
                />
                <img
                  src={img10}
                  alt="Secondary"
                  className=" shadow-md h-auto absolute bottom-[-18%] right-[50px] w-40"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] sm:w-full pl-0 sm:mt-12 md:mt-10">
              <h2 className="text-3xl md:text-4xl sm:text-xl font-bold text-gray-900 mb-6 sm:mb-2">
                <span>
                  Solid Development <br /> Framework
                </span>
              </h2>
              <div className="bg-white rounded-lg">
                {/* <h3 className="text-xl font-semibold  mb-2 text-gray-600">
                  Expertise You Can Trust
                </h3> */}
                <p className="text-gray-700 mb-4 text-[13px]">
                  Our development team is skilled in the latest technologies and
                  frameworks, enabling us to build e-commerce websites that are
                  fast, secure, and scalable. We focus on creating a solid
                  backend structure that supports high traffic volumes, smooth
                  transactions, and easy management. Whether you need a simple
                  online store or a complex multi-vendor platform, our Ecommerce
                  Website Design Service in India is designed to meet your
                  specific needs.
                </p>
              </div>

              <div className="mt-8 flex md:flex-row sm:flex-col gap-3 items-center space-x-4">
                <button className="gradient-background text-white font-normal text-sm px-0 rounded-full py-3 sm:w-full md:w-52 hover:bg-[#2334DE] transition duration-300">
                  EXPLORE MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center  lg:p-8 md:p-16 sm:p-2 lg:w-[90%] sm:w-[90%] mx-auto">
            {/* Left Section */}
            <div className="md:w-[50%] sm:w-full pl-0 sm:mt-12 md:mt-0">
              <h2 className="text-3xl md:text-4xl sm:text-xl font-bold text-gray-900 mb-6 sm:mb-2">
                <span>
                  Integrated Digital <br /> Marketing Services
                </span>
              </h2>
              <div className="bg-white rounded-lg">
                <p className="text-gray-700 mb-4 text-[13px]">
                  In addition to e-commerce website development, Maxify
                  Solutions offers comprehensive Digital Marketing services to
                  help you reach your target audience and maximize your online
                  sales. Our integrated approach combines SEO, SMO, PPC, and
                  content marketing to create a powerful online presence for
                  your brand. By working with a full-service Ecommerce Website
                  Designing Company, you can ensure that your website not only
                  attracts visitors but also converts them into loyal customers.
                </p>
              </div>

              <div className="mt-8 flex md:flex-row sm:flex-col gap-3 items-center space-x-4">
                <button className="gradient-background text-white font-normal text-sm px-0 rounded-full py-3 sm:w-full md:w-52 hover:bg-[#2334DE] transition duration-300">
                  EXPLORE MORE
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] relative flex sm:ml-0 md:mb-0 justify-end">
              <div className="relative">
                <img
                  src={img11}
                  alt="Main"
                  className="rounded-lg shadow-md w-full h-[25rem] mb-4 ml-2"
                />
                <img
                  src={img12}
                  alt="Secondary"
                  className=" shadow-md w-52 h-auto absolute bottom-0 right-0 transform translate-x-4 translate-y-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slider section */}

      <div>
        <div className="bg-image bg-cover w-full">
          <div className="w-[90%] mx-auto">
            <div className="slider py-10">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, illo. Ratione reiciendis incidunt nam officiis ducimus
                magnam accusantium, illo iure?
              </p>
            </div>
            <div className="card">
              <div className="text-4xl font-bold">
                <h2 className="gradient-text2">Case Study :</h2>
              </div>
              {/* Grid layout for case study cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {caseStudies.map((study, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-[#635AD9] text-gray-600 hover:text-white transition duration-300 ease-in-out"
                  >
                    <img className="w-14" src={study.icone} alt="" />
                    <h3 className="text-xl font-bold text-purple-800 mb-2 mt-5">
                      {study.title}
                    </h3>
                    <p className="">{study.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            {/* Statistics section */}
            <div className="w-[90%]">
              <div className="bg-[#635AD9] mt-8 flex justify-between pl-10 items-center text-white rounded-l-full">
                <div className="text-center">
                  <img className="w-10 ml-10" src={icone1} alt="" />
                  <div className="text-3xl font-bold">1000+</div>
                  <div>Satisfied Clients</div>
                </div>
                <div>
                  <img src={line} alt="" />
                </div>
                <div className="text-center">
                  <img className="w-10 ml-10" src={icone2} alt="" />
                  <div className="text-3xl font-bold">600+</div>
                  <div>Finished Projects</div>
                </div>
                <div>
                  <img src={line} alt="" />
                </div>
                <div className="text-center">
                  <img className="w-10 ml-10" src={icone3} alt="" />
                  <div className="text-3xl font-bold">100+</div>
                  <div>Skilled Experts</div>
                </div>
                <div>
                  <img src={line} alt="" />
                </div>
                <div className="text-center">
                  <img className="w-10 ml-10" src={icone4} alt="" />
                  <div className="text-3xl font-bold">5,90+</div>
                  <div>Media Posts</div>
                </div>
                <div>
                  <img className="w-60 h-[13rem]" src={img13} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white mt-10">
          <div className="flex flex-col md:flex-row  lg:p-8 md:px-16 sm:p-2 lg:w-[90%] sm:w-[90%] mx-auto">
            {/* Left Section */}
            <div className="md:w-[50%] relative flex sm:ml-0 md:mb-0 justify-start">
              <div className="">
                <img
                  src={img14}
                  alt="Main"
                  className="rounded-lg w-full h-[25rem] mb-4 ml-2"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] sm:w-full pl-0 sm:mt-12 md:mt-20">
              <h2 className="text-3xl md:text-4xl sm:text-xl font-bold text-gray-900 mb-6 sm:mb-2 text-center">
                <p className="gradient-text">Get Started with </p>
                <p>Maxify Solutions Today</p>
              </h2>
              <div className="bg-white rounded-lg">
                <p>
                  Ready to take your business to the next level with a custom
                  e-commerce website? Contact Us today to discuss your project
                  and learn more about our Ecommerce Website Design Service in
                  India. As a leading Ecommerce Website Designing Company in
                  Delhi, we are committed to delivering solutions that drive
                  results and help your business grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
