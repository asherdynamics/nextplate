'use client';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function Slider() {
  return (
    <Carousel className="max-h-3xl">
      <div>
        <Image src="/images/banners/website-banner-05.png" alt="Slide 1" width={1600} height={800} />
        {/* <p className="legend">Slide 1</p> */}
      </div>
      <div>
        <Image src="/images/banners/banner-2.png" alt="Slide 1" width={1600} height={800} />
        {/* <p className="legend">Slide 2</p> */}
      </div>
    </Carousel>
  );
}
