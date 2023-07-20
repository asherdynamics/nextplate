import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Button, Feature } from "@/types";
import { FaCheck } from "react-icons/fa/index.js";
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import Slider from "@/partials/Slider";
import InfoCard from "@/partials/slider-carousel";


const Home = () => {
  const homepage = getListPage("_index.md");
  // const testimonial = getListPage("sections/testimonial.md");
  // const callToAction = getListPage("sections/call-to-action.md");
  
  const stats = [
    {
        data: "90000+",
        title: "Sq. Ft. Footprint"
    },
    {
        data: "50+",
        title: "Owned Patents"
    },
    {
        data: "2000+",
        title: "Statisfied Customers Served"
    },
    {
        data: "5M+",
        title: "Monthly Capacity"
    },
];



  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  
  return (
    <>
      <SeoMeta />
 <Slider />
      <Marquee
      className="bg-paradym"
      >
        <div className="marquee-text  text-black text-2xl md:text-5xl font-extrabold py-2 md:py-4 mx-4">
          OEM
        </div>
        <div className="marquee-text  text-black text-2xl md:text-5xl font-extrabold py-2 md:py-4 mx-4">
          ODM
        </div>
        <div className="marquee-text  text-black text-2xl md:text-5xl font-extrabold py-2 md:py-4 mx-4">
         DISTRIBUTION
        </div>
        <div className="marquee-text  text-black text-2xl md:text-5xl font-extrabold py-2 md:py-4 mx-4">
          PACKAGING
        </div>
        <div className="marquee-text  text-black text-2xl md:text-5xl font-extrabold py-2 md:py-4 mx-4">
          DESIGN
        </div>
        <div className="marquee-text  text-black text-2xl md:text-5xl font-extrabold py-2 md:py-4 mx-4">
          EXPERIENCE
        </div>
        <div className="marquee-text  text-black text-2xl md:text-5xl font-extrabold py-2 md:py-4 mx-4">
          PRICING
        </div>
        <div className="marquee-text  text-black text-2xl md:text-5xl font-extrabold py-2 md:py-4 mx-4">
          CUSTOMER SUPPORT
        </div>
      </Marquee>

<section className="">
  <div className="bg-gray-100 dark:bg-theme-dark p-10 mx-auto px-4 text-gray-600 dark:text-white md:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-gray-800 dark:text-dark text-3xl font-semibold sm:text-4xl">
        Unrivaled Strength in Numbers
      </h3>
    </div>
    <div className="mt-12">
      <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
        {stats.map((item, idx) => (
          <li key={idx} className="text-center px-12 md:px-16">
            <div className="inline-block p-0 top-0 bottom-3 right-0 left-0">
              <h4 className="text-4xl font-semibold text-light dark:text-dark">{item.data}</h4>
            </div>
            <p className="mt-2 text-black font-extrabold bg-paradym">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>
<InfoCard />
<section className="bg-center bg-no-repeat bg-[url('/images/banners/plant_backdrop.png')] bg-gray-700 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Accelerate Your Time to Market</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Partner with Our Efficient OEM Manufacturing Process and Launch Your Products Faster!</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            {/* <a href="/contact" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> */}
            <a href="/contact" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Get Started
            </a>  
        </div>
    </div>
</section>
<section className="bg-gray-900 dark:bg-gray-900">
  <div className="max-w-screen-xl mx-auto px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid lg:grid-cols-12">
    <div className="lg:col-span-7 flex flex-col justify-center">
      <h1 className="max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white text-center">
      Where Precision Meets Innovation: Unveiling the Heart of Creation.
      </h1>
      <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
        Envision Your Perfect Vape Device and Let Us Bring It to Life!
      </p>
      <div className="flex justify-center pb-8">
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Get started
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-paradym border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Speak to Sales
        </a>
      </div>
    </div>
    <div className="lg:col-span-5 grid grid-cols-2 gap-4">
      <div className="rounded-lg">
        <Image
          src="/images/close_up_3ml.png"
          alt="mockup"
          width={1000}
          height={1000}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="rounded-lg ">
        <Image
          src="/images/about3Img1.png"
          alt="mockup"
          width={1000}
          height={1000}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="rounded-lg ">
        <Image
          src="/images/index3Img2.jpeg"
          alt="mockup"
          width={1000}
          height={1000}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="rounded-lg ">
        <Image
          src="/images/banners/Image_20230711091558.jpg"
          alt="mockup"
          width={1000}
          height={1000}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>




    </>
  );
};

export default Home;
