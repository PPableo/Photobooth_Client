import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  {
    to: "/#packages",
    label: "Packages",
  },
  {
    to: "/#reviews",
    label: "Testimonials",
  },
  {
    to: "/#templates",
    label: "Templates",
  },
];

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleNavlinks = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    const navlinks = document.querySelector("#navlinks");
    const hamburger = document.querySelector("#hamburger");
    const layer = document.querySelector("#navLayer");
    const linkElements = [...navlinks.querySelector("ul").children];

    if (isToggled) {
      navlinks.classList.add(
        "!visible",
        "!scale-100",
        "!opacity-100",
        "!lg:translate-y-0"
      );
      hamburger.classList.add("toggled");
      layer.classList.add("origin-top", "scale-y-100");
    } else {
      navlinks.classList.remove(
        "!visible",
        "!scale-100",
        "!opacity-100",
        "!lg:translate-y-0"
      );
      hamburger.classList.remove("toggled");
      layer.classList.remove("origin-top", "scale-y-100");
    }

    const handleLinkClick = () => {
      setIsToggled(false);
    };

    linkElements.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      linkElements.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, [isToggled]);

  return (
    <header>
      <nav className="absolute z-10 w-full border-b border-black/5 light:border-white/5 lg:border-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative flex items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <a
                href="/#home"
                aria-label="logo"
                className="flex items-center space-x-2"
              >
                    <div className="relative w-20 aspect-square">
      <Image
        src={"/static/logo/image00001.png"}
        alt="logo"
        layout="fill"
        objectFit="contain"
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        />
      </div>
                {/* <div aria-hidden="true" className="flex space-x-1">
                  <svg
                    className="text-red-400 w-6 h-auto fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                  </svg>
                  <div className="h-6 w-2 bg-primary animate-blink"></div>
                </div> */}
                <span className="text-2xl font-light text-gray-900 light:text-white">
                  PHOTOHAUS.TO
                </span>
                {/* <span className="font-bold text-gray-500 light:text-white">
                  A modern photobooth
                </span> */}
              </a>

              <div className="relative flex max-h-10 items-center lg:hidden">
                <button
                  aria-label="hamburger"
                  id="hamburger"
                  className="relative -mr-6 p-6"
                  onClick={toggleNavlinks}
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 light:bg-gray-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 light:bg-gray-300"
                  ></div>
                </button>
              </div>
            </div>
            <div
              id="navLayer"
              aria-hidden="true"
              className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 light:bg-gray-900/70 lg:hidden"
            ></div>
            <div
              id="navlinks"
              className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 light:border-gray-700 light:bg-gray-800 light:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none"
            >
              <div className="w-full text-gray-600 light:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.to}
                        className="hover:text-primary block transition light:hover:text-white md:px-4"
                      >
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#features"
                      target="_blank"
                      className="flex gap-2 font-semibold text-gray-700 transition hover:text-primary light:text-white light:hover:text-white md:px-4"
                    >
                      <span>FAQ</span>
                      <span className="flex rounded-full bg-primary/20 px-1.5 py-0.5 text-xs tracking-wider text-purple-700 light:bg-white/10 light:text-orange-300">
                        new
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-12 lg:mt-0">
                <a
                  href="#"
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold text-white">
                    Book Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
