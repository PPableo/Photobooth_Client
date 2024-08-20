import Container from "./Container"
import React from "react"

const PackageCard = ({ icon, title, description, price, services }) => (
  <div className="w-full px-4 md:w-1/3 lg:w-1/3">
    <div className="mb-9 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
      <div className="mx-auto fill-white bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
        {icon}
      </div>
      <h4 className="text-dark mb-4 text-2xl font-semibold">{title}</h4>
      <p className="mt-4 text-gray-700 light:text-gray-300 text-xl">
        {description}
      </p>
      <p className="mt-4 text-primary text-2xl font-bold">{price}</p>
      <ul className="mt-4 text-gray-700 light:text-gray-300 text-lg">
        {services.map((service, index) => (
          <li key={index} className="mb-2">• {service}</li>
        ))}
      </ul>
    </div>
  </div>
)

const PackagesSection = () => {
  const packages = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="text-secondary" className="w-8 h-8">
          <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
          <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
        </svg>
      ),
      title: "Corporate Classic",
      description: "Perfect for business events and conferences",
      price: "$899",
      services: [
        "4 hours of booth time",
        "Customized corporate branding",
        "Unlimited prints",
        "Digital gallery",
        "Props and backdrop",
        "On-site attendant"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="text-secondary" className="w-8 h-8">
          <path d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z" />
        </svg>
      ),
      title: "Party Starter",
      description: "Liven up your celebration with instant fun",
      price: "$699",
      services: [
        "3 hours of booth time",
        "Standard template design",
        "Unlimited prints",
        "Digital gallery",
        "Fun props",
        "Standard backdrop",
        "On-site attendant"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="text-secondary" className="w-8 h-8">
          <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Wedding Bliss",
      description: "Capture the magic of your special day",
      price: "$1299",
      services: [
        "6 hours of booth time",
        "Customized wedding template",
        "Unlimited prints",
        "Digital gallery & USB drive",
        "Luxury props and backdrop",
        "Guest book service",
        "2 on-site attendants"
      ]
    }
  ]

  return (
    <Container>
      <section
        id="packages"
        className="max-w-7xl mx-auto py-12 px-6 md:px-12 xl:px-6"
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[1000px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Choose Your Experience
                </span>
                <h2 className="text-dark mb-2 text-2xl leading-[1.2] semi-bold sm:text-2xl md:text-[30px]">
                  Photobooth Packages for Every Occasion
                </h2>
                <p className="mt-4 text-gray-700 light:text-gray-300 text-xl">
                  Capture memories with our tailored photobooth experiences
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}

export default PackagesSection