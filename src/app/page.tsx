import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Button, Feature } from "@/types";
import { FaCheck } from "react-icons/fa/index.js";
import Image from 'next/image'



const Home = () => {
  const homepage = getListPage("_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  
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

      

      <section className="section pt-10">
        <div className="container">
          <div className="row justify-center">
            
            <div className="text-center lg:col-7">
            {banner.image && (
              <div className="col-12 ">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto mb-6"
                  width="800"
                  height="420"
                  alt="banner image"
                  priority
                />
              </div>
            )}
              <h1
                className="mb-4"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <p
                className="mb-8"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              {banner.button!.enable && (
                <a className="btn btn-primary" href={banner.button!.link}>
                  {banner.button!.label}
                </a>
              )}
            </div>
            
          </div>
        </div>
      </section>
      



     


      
{/* 
<div className="container my-24 mx-auto md:px-6">

  <section className="mb-32 text-center lg:text-left">


    <div className="py-12 md:px-12">
      <div className="container mx-auto xl:px-32">
        <div className="grid items-center lg:grid-cols-2">
          <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
            <div
              className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
              <h2 className="mb-6 text-3xl font-bold">Why is it so great?</h2>
              <p className="mb-8 text-neutral-500 dark:text-neutral-300">
                Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                neque iaculis malesuada. Aenean gravida magna orci, non
                efficitur est porta id. Donec magna diam.
              </p>

              <div className="grid gap-x-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                <div className="mb-6">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mr-3 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Support
                    24/7
                  </p>
                </div>

                <div className="mb-6">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mr-3 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Analytics
                  </p>
                </div>

                <div className="mb-6">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mr-3 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>Components
                  </p>
                </div>
                <div className="mb-6">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mr-3 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Updates
                  </p>
                </div>

                <div className="mb-6">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mr-3 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Reports
                  </p>
                </div>

                <div className="mb-6">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mr-3 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Mobile
                  </p>
                </div>
                <div className="mb-6">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mr-3 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Modules
                  </p>
                </div>

                <div className="mb-6">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mr-3 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Blocks
                  </p>
                </div>

                <div className="mb-6">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mr-3 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Templates
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mb-14 lg:mb-0 ">
            <Image src="/images/products/flowx-marketing.png" width={1000} height={`150`} className=" mb-5 rotate-lg-6 w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

</div> */}
<section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Unleash Your Creativity </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Envision Your Perfect Vape Device and Let Us Bring It to Life!</p>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Speak to Sales
          </a> 
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
          <Image src="/images/banners/Image_20230711091558.jpg" width={1000} height={1000} alt="mockup" className="rounded-lg" />
      </div>                
  </div>
</section>
<section className="">
  <div className="bg-gray-100 dark:bg-theme-dark p-10 mx-auto px-4 text-gray-600 dark:text-white md:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-gray-800 dark:text-dark text-3xl font-semibold sm:text-4xl">
        Excellence on all facets.
      </h3>
      <p className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
      </p>
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
<section className="bg-center bg-no-repeat bg-[url('/images/banners/plant_backdrop.png')] bg-gray-700 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Accelerate Your Time to Market</h1>
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
    </>
  );
};

export default Home;
