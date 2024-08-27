import Container from "./Container";
import Accordion from "./Accordian";
import Image from "next/legacy/image";

const Features = () => {
  return (
    <Container>
              <div className="mt-20 space-y-4 px-6 md:px-0">
          <h2 className="text-left text-2xl font-light text-gray-800 light:text-white md:text-4xl" id="faqs">
            Corporate, Parties, Weddings<span className="text-primary"> Captured.</span>
          </h2>
        </div>
      <div id="features" className="my-20">
        <div className="p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
          <Accordion
            title={<h3 className="text-secondary text-xl py-2"> What is a photo booth?</h3>}
            answer={
              <div>
                <p className="mb-4 semi-bold">
                A photo booth is a modern kiosk or station that contains an automated camera and film processor. It allows guests at events to take fun and memorable photos, often with props and customizable backgrounds.</p>
              </div>
            }
          />
          <Accordion
            title={<h3 className="text-secondary text-xl py-2"> Why should I rent a photo booth for my event?
</h3>}
            answer={
              <div>
                <p className="mb-4">
                
Renting a photo booth adds entertainment value to your event, provides guests with a fun activity, and offers a unique way to capture memories. It also allows guests to take home a keepsake from the event in the form of printed photos or digital images. </p>
              </div>
            }
          />
          <Accordion
            title={<h3 className="text-secondary  text-xl py-2"> How do I book a photo booth for my event?
</h3>}
            answer={
              <div>
                <p className="mb-4">
                Book Here Via Calender or Contact Us @ Here and @ Here</p>
              </div>
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Features;
