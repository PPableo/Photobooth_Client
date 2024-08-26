import Image from "next/image";
import Container from "./Container";

const Landing = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2-space-x-52 "
      >
        {/* opacity-90 light:opacity-20 */}
        <Image
          src="/static/background2.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <Container>
        <div className="max-w-7xl pt-36 mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className=" tracking-widest text-white font-thin light:text-white font-copperplate text-7xl md:text-7xl xl:text-8xl">
                PHOTOHAUS{" "}
                {/* <span className="text-white light:text-white">.TO</span> */}
              </h1>

              <p className="text-center text-white font-semibold uppercase light:text-gray-300 text-xl">
                A modern photobooth{" "}
              </p>
              {/* <p className="mt-8 text-white light:text-gray-300 text-xl">
            Corporate • Parties • Weddings{" "}
            </p>
            <p className="mt-8 text-white light:text-gray-300 text-xl">
            Toronto, Peel and York Region{" "}
            </p> */}
              <div className="mt-8 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <a
                  href="https://www.instagram.com/photohaus.to/"
                  className="relative  bg-white  px-6 py-3 text-lg font-semibold items-center justify-center px-6 before:absolute before:inset-0 before:rounded-none before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-gray-600">
                    Book Now
                  </span>
                </a>
                <a
                  href="#faqs"
                  className="relative  flex bg-white  px-6 py-3 text-lg font-semibold items-center justify-center px-6 before:absolute before:inset-0 before:rounded-none before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  
                  <span className="relative text-base font-semibold text-gray-600">
                    Learn more
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Landing;
