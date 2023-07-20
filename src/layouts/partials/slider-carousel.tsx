'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const InfoCard = () => {
  return (
    <div className="bg-gray-900 p-4 md:flex py-10 justify-center"> {/* Added 'justify-center' class */}
      <div className="md:w-1/4">
        <Carousel showStatus={false} showThumbs={false}>
          <div className="rounded-xl">
            <Image src="/images/banners/Image_202307110915521.jpg" alt="Image 1" width={500} height={500} className="rounded-lg" />
          </div>
          <div>
            <Image src="/images/banners/6ml box 06.png" alt="Image 2" width={500} height={500} className="rounded-lg"  />
          </div>
          <div>
            <Image  src="/images/banners/Image_20230711091552 (1).jpg" alt="Image 3"width={500} height={500} className="rounded-lg" />
          </div>
        </Carousel>
      </div>
      <div className="lg:col-span-7 flex flex-col justify-center pl-10 py-10">
        <h1 className="max-w-2xl mb-4 text-4xl text-paradym font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white text-center">
          Try it Out<span className="gradient-text"> Today!</span>
        </h1>
        <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
        Uncover the Perfect Product for You - Try Before You Commit
        </p>
        <div className="flex justify-center">
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
            Get Samples
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
