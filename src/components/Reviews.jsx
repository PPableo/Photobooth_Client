import Container from "./Container";
import Image from "next/legacy/image";

const Reviews = () => {
  return (
      <div className="text-gray-600 light:text-gray-300" id="reviews">
    <Container>
        <div className="m-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-light text-gray-800 light:text-white md:text-4xl">
            We have some <span className="text-gray-600 italic"> fans.</span>
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-4 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/avatars/avatar.webp"
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 light:text-white">Brandon</h6>
                {/* <p className="text-sm text-gray-500 light:text-gray-300">
                Bride
                </p> */}
              </div>
            </div>
            <p className="mt-8">
            From the minute I messaged photohaus till the end of our wedding day they’ve been a joy to work with! They made everything very seamless and beautiful with plenty of options and details that captured us and our guests. We really appreciate the photobooth and the staff that came along with it. They even made a point to get my wife and I to the booth to make sure we used it as well and no other vendor did that! We’re so happy we found them!            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/avatars/avatar-1.webp"
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 light:text-white">
                Cathy
                </h6>
                {/* <p className="text-sm text-gray-500 light:text-gray-300">
                Event Coordinator
                </p> */}
              </div>
            </div>
            <p className="mt-8">
            Super happy w the services from photohaus!! They made my besties bday one to rmb for sure. On time, professional & the photos were exactly how we wanted with the templates and quality. Will definitely be using again for our next event. 🥰</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/avatars/avatar-2.webp"
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 light:text-white">
                Anderson
                </h6>
                {/* <p className="text-sm text-gray-500 light:text-gray-300">
                Professional Event Planner
                </p> */}
              </div>
            </div>
            <p className="mt-8">
            Having Photohaus at our wedding made it so much better. The service was an absolute delight! The setup was sleek and professional, and the attendant was friendly and attentive throughout the event. The variety of props that were included made it even so much better. It added a creative touch to our photos, making each snapshot memorable. The quality of the prints was exceptional, and our family and friends had a great time capturing all the moments together. If you want to elevate your event and create unforgettable moment, I highly recommend Photohaus for any event! </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/avatars/avatar-3.webp"
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 light:text-white">
                Chantal
                </h6>
                {/* <p className="text-sm text-gray-500 light:text-gray-300">
                Parent
                </p> */}
              </div>
            </div>
            <p className="mt-8">
            Exceptional service from start to finish with Photo Haus! Their communication was outstanding, ensuring every detail was perfectly coordinated. The photos were absolutely stunning! They even added in customized props to our event which we loved. Highly recommend this team for their professionalism, clear communication, and incredible photo quality! I would definitely book them again! Thanks Photo Haus!</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/avatars/avatar-4.webp"
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 light:text-white">
                Jen
                </h6>
                {/* <p className="text-sm text-gray-500 light:text-gray-300">
                Non-profit Director
                </p> */}
              </div>
            </div>
            <p className="mt-8">
            This was possibly my favourite experience for my party! Everything was set up so nicely and the pictures taken were such great quality! Even the staff that ran the booth were super friendly! Will definitely be using their services again.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/avatars/avatar.webp"
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 light:text-white">
                Julia
                </h6>
                {/* <p className="text-sm text-gray-500 light:text-gray-300">
                Birthday Celebrant
                </p> */}
              </div>
            </div>
            <p className="mt-8">
            Photohaus made my grad party one to remember! The team, service, and quality were amazing and very professional. Everything came out exactly how I wanted to and I’ll definitely be using them for my next event ❤️</p>
          </div>
        </div>
    </Container>
      </div>
  );
};

export default Reviews;
