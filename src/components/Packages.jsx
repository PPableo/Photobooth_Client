import React from "react";
import { motion } from "framer-motion";

const boldKeywords = (text, keywords) => {
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
  return text.split(regex).map((part, index) => 
    part && keywords.includes(part.toLowerCase()) ? <strong key={index}>{part}</strong> : part
  );
};

const PackageCard = ({ icon, title, description, price, services }) => (
  <motion.div
    className="w-full px-4 md:w-1/3 lg:w-1/3"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-9 bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
      <div className="mx-auto fill-white bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center">
        {icon}
      </div>
      <h4 className="text-dark mb-4 text-2xl font-semibold">{title}</h4>
      <p className="mt-4 text-gray-700 light:text-gray-300 text-xl">{description}</p>
      <p className="mt-4 text-secondary text-2xl font-bold">{price}</p>
      <ul className="mt-4 text-gray-700 light:text-gray-300 text-lg">
        {services.map((service, index) => (
          <li key={index} className="strong mb-2">• {boldKeywords(service, [
            'Unlimited strips (2x6") print + GIFS + online gallery',
            'Unlimited strips',
            '3 template revisions',
            '(4x6)',
            'postcards (4x6)',
            '4 template revisions',
            'black/white',
            'glam',
            'print'
          ])}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);
  const PackagesSection = () => {
    const packages = [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            {" "}
            <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />{" "}
            <path
              fillRule="evenodd"
              d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />{" "}
          </svg>
        ),
        title: "Digital",
        description: "Capture and share digital memories",
        // price: "$125/HR",
        services: [
          "Digital 2x6 or 4x6 photos + online gallery",
          "Custom template + 2 template revision",
          "White backdrop (8x8ft)",
          "Preset start screen",
          "Colour only",
          "Props (sunglasses and headbands)",
          "Booth attendant",
          "Instantly share via email or text",
        ],
        addOns: [
          "Black and white GLAM filter - $25",
          "Beauty filter - $25",
          'Upgrade to 4x6" prints - $50/hr',
          "Custom props - varies",
        ],
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
              clipRule="evenodd"
            />{" "}
          </svg>
        ),
        title: "Signature",
        description: "Our classic photobooth experience",
        // price: "$155/HR",
        services: [
          'Unlimited strips (2x6”) print + GIFS + online gallery',
          "Custom template + 3 template revisions",
          "White backdrop (8x8ft)",
          "Preset start screen",
          "Colour only",
          "Props (sunglasses and headbands)",
          "Booth attendant",
          "Instantly share via email or text",
        ],
        addOns: [
          "Black and white GLAM filter - $25",
          "Beauty filter - $25",
          'Upgrade to 4x6" prints - $50/hr',
          "Custom props - varies",
        ],
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
            fill="white"
            className="w-8 h-8"
          >
            {" "}
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>{" "}
            <path
              fillRule="evenodd"
              d="M21.2501 3C21.4925 3 21.7176 3.11688 21.8574 3.30983L21.9119 3.39706L25.9186 10.9098L25.9615 11.0122L25.9731 11.05L25.9901 11.1273L25.9994 11.2153L25.9973 11.3147L26.0001 11.25C26.0001 11.3551 25.9785 11.4552 25.9394 11.5461L25.9106 11.6057L25.87 11.6723L25.8173 11.7408L14.6 24.7047C14.4999 24.8391 14.3628 24.9277 14.2139 24.9703L14.1559 24.9844L14.0585 24.9979L13.9999 25L13.8993 24.9932L13.8142 24.9771L13.7109 24.9432L13.6852 24.931C13.5949 24.8911 13.5119 24.8316 13.4425 24.7535L2.17081 11.7263L2.1087 11.6387L2.06079 11.5456L2.02611 11.4463L2.00297 11.3152L2.00269 11.1878L2.01755 11.0891L2.02714 11.0499L2.06104 10.9538L2.08838 10.8971L6.08838 3.39706C6.20243 3.18321 6.41149 3.0396 6.64753 3.00704L6.75014 3H21.2501ZM17.9061 12H10.0911L14.0011 22.16L17.9061 12ZM8.48514 12H4.38914L11.7621 20.518L8.48514 12ZM23.6081 12H19.5151L16.2421 20.511L23.6081 12ZM10.0241 4.499H7.19914L3.99814 10.5H8.42314L10.0241 4.499ZM16.4231 4.499H11.5761L9.97514 10.5H18.0231L16.4231 4.499ZM20.8001 4.499H17.9751L19.5761 10.5H23.9991L20.8001 4.499Z"
              clipRule="evenodd"
            />{" "}
          </svg>
        ),
        title: "Premium",
        description: "The ultimate photobooth package",
        // price: "$185/HR",
        services: [
          'Unlimited strips (2x6”) print or postcards (4x6) + GIFS + online gallery',
          "Custom template + 4 template revisions",
          "White backdrop (8x8ft)",
          "Custom start screen",
          "Colour and/or black/white GLAM print",
          "Props (sunglasses and headbands)",
          "Booth attendant",
          "Instantly share via email or text",
        ],
        addOns: [
          "Black and white GLAM filter - $25",
          "Beauty filter - $25",
          'Upgrade to 4x6" prints - $50/hr',
          "Custom props - varies",
        ],
      },
    ];
    const addOns = [
      "Black and white GLAM filter - $25",
      "Beauty filter - $25",
      "Upgrade to 4x6\" prints - $50/hr",
      "Custom props - varies"
    ];
  
    return (
      <>
        <motion.div
          className="relative h-[50vh] bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/static/gallery-header.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.h1
              className="text-white text-4xl md:text-6xl font-light"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Our Packages
            </motion.h1>
          </div>
        </motion.div>
  
        <section id="packages" className="max-w-7xl mx-auto py-12 px-6 md:px-12 xl:px-6">
          <div className="container mx-auto">
            <motion.div
              className="mx-auto mb-12 max-w-[1000px] text-center lg:mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-center font-medium font-Public text-gray-600 mb-2 block text-lg">
                Choose Your Experience
              </span>
              <h2 className="text-dark font-Public mb-2 text-2xl leading-[1.2] semi-bold sm:text-2xl md:text-[30px]">
                Photobooth Packages for Every Occasion
              </h2>
              <p className="mt-4 text-gray-700 italic font-playfair light:text-gray-300 text-xl">
                Capture memories with our tailored photobooth experiences
              </p>
            </motion.div>
            <div className="-mx-4 flex flex-wrap">
              {packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
            <motion.div
              className="mt-12 bg-gray-100 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Add-ons</h3>
              <ul className="list-disc pl-6 text-gray-700">
                {addOns.map((addOn, index) => (
                  <li key={index}>{addOn}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="mt-12 bg-black text-white p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Important Information</h3>
              <ul className="list-disc pl-6">
                <li>Must book a minimum of 2 hours</li>
                <li>There will be a set-up fee of $45 (not included in hourly rate)</li>
                <li>Non-refundable 50% deposit required</li>
                <li>Please book 2 weeks in advance if custom props are required</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </>
    );
  };
  
  export default PackagesSection;