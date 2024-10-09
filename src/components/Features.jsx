import Container from "./Container";
import Accordion from "./Accordian";
import Image from "next/legacy/image";

const Features = () => {
  return (
    <Container>
      <div className="mt-20 space-y-4 px-6 md:px-0">
        <h2
          className="text-center text-3xl font-light text-gray-800 light:text-white md:text-4xl"
          id="faqs"
        >
          Corporate, Parties, Weddings
          <span className="text-gray-600 italic"> Captured.</span>
        </h2>
      </div>
      <div id="features" className="my-20">
        <div className="p-8 border border-gray-100 text-left bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
          <Accordion
            title={
              <h3 className="text-secondary text-xl py-2">
                {" "}
                What is a photo booth?
              </h3>
            }
            answer={
              <div>
                <p className="mb-4 semi-bold">
                  A photobooth is a kiosk that contains a DSLR camera and a
                  on-site printer to develop the photos in less than 30 seconds.
                  The photobooth is not only good for photos but also gifs! All
                  of our packages come with an online gallery.
                </p>
              </div>
            }
          />
          <Accordion
            title={
              <h3 className="text-secondary text-left text-xl py-2">
                Why should I rent a photo booth for my event?
              </h3>
            }
            answer={
              <div>
                <p className="mb-4">
                  There are many reasons why you should rent a photobooth. But
                  here are the top three reasons:
                </p>
                <p className="mb-4">
                  1. It gives your guests the opportunity to take home a
                  keepsake to remember your event.
                  <br />
                  2. It helps keep your guests entertained all night.
                  <br />
                  3. It's perfect for all-ages so nobody misses out on the fun!
                </p>
              </div>
            }
          />
          <Accordion
            title={
              <h3 className="text-secondary text-left text-xl py-2">
                {" "}
                How do I book a photo booth for my event?
              </h3>
            }
            answer={
              <div>
                <p className="mb-4">
                You can book through our website, email photohausto@gmail.com or Instagram <a href="https://www.instagram.com/photohaus.to/" className="text-purple-700" >@photohaus.to</a></p>
              </div>
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Features;
