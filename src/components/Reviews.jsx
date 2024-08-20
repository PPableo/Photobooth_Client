import Container from "./Container";
import Image from "next/image";

const Reviews = () => {
  return (
      <div className="text-gray-600 light:text-gray-300" id="reviews">
    <Container>
        <div className="m-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-light text-gray-800 light:text-white md:text-4xl">
            We have some <span className="text-primary"> fans.</span>
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
                <h6 className="text-lg font-medium text-gray-700 light:text-white">
                Sarah M.
                </h6>
                <p className="text-sm text-gray-500 light:text-gray-300">
                Bride
                </p>
              </div>
            </div>
            <p className="mt-8">
            PhotoHaus.to made our wedding unforgettable! Their sleek, modern booth fit perfectly with our venue's aesthetic. The staff was professional and fun, ensuring all our guests had a blast. High-quality prints and digital copies were ready instantly. Highly recommend!
            </p>
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
                John D.
                </h6>
                <p className="text-sm text-gray-500 light:text-gray-300">
                Event Coordinator
                </p>
              </div>
            </div>
            <p className="mt-8">
            We hired PhotoHaus.to for our annual corporate gala, and they exceeded all expectations. The team arrived early, set up quickly, and were incredibly accommodating. Our employees loved the custom branded prints and the online gallery. A must-have for any corporate event!
            </p>
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
                Emma L.
                </h6>
                <p className="text-sm text-gray-500 light:text-gray-300">
                Professional Event Planner
                </p>
              </div>
            </div>
            <p className="mt-8">
            As a party planner, I've worked with many photobooth companies, but PhotoHaus.to stands out. Their equipment is top-notch, producing studio-quality images. They're always punctual, professional, and go above and beyond for clients. My go-to recommendation for Toronto events!
            </p>
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
                Michael R.
                </h6>
                <p className="text-sm text-gray-500 light:text-gray-300">
                Parent
                </p>
              </div>
            </div>
            <p className="mt-8">
            PhotoHaus.to brought so much joy to my daughter's sweet 16! The booth's touchscreen was easy to use, and the props were high-quality and diverse. The social media sharing feature was a hit with the teens. Thank you for making her day special!
            </p>
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
                Dr. Amelia S.
                </h6>
                <p className="text-sm text-gray-500 light:text-gray-300">
                Non-profit Director
                </p>
              </div>
            </div>
            <p className="mt-8">
            I was impressed by PhotoHaus.to's attention to detail at our charity fundraiser. They offered a variety of backdrops to match our theme, and their team was courteous and patient with all our guests. The instant prints were a lovely keepsake for attendees.
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
                Lisa Q.
                </h6>
                <p className="text-sm text-gray-500 light:text-gray-300">
                Birthday Celebrant
                </p>
              </div>
            </div>
            <p className="mt-8">
            As someone who's camera-shy, I was amazed at how comfortable PhotoHaus.to made me feel. Their booth attendant was friendly and gave great posing tips. The photos turned out amazing - definitely boosted my confidence! Can't wait to hire them again.
            </p>
          </div>
        </div>
    </Container>
      </div>
  );
};

export default Reviews;
