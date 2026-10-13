'use client'

import Footer from "./components/Footer";
import Header from "./components/Header"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { productHomePage, bestSellersHomePage, reviews} from '../public/fakeData/fakeapi'
import { StarFilled, CheckCircleFilled, UserOutlined } from '@ant-design/icons';
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { Tooltip } from 'antd';


export default function Home() {

  const timeAgo = (dateString: string) => {
    return formatDistanceToNow(new Date(dateString), {
      addSuffix: true,
    });
  }

  return (
    <div>
      <Header />
      <div className="w-full flex flex-col">
        <p className="text-[22px] md:text-[30px] text-center font-bold mt-10 md:mt-20 mb-5">HANDMADE GRIP-X NAILS</p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="cursor-pointer">
            {productHomePage.slice(0, 11).map((item) => (
              <CarouselItem key={item.name} className="basis-1/2 sm:basis-1/3 md:basis-1/4">
                <div className="p-1">
                  <Card className="hover:shadow-2xl">
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-3 md:p-6">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                      <p className="text-sm md:text-lg font-semibold text-center">{item.name}</p>
                      <p className="text-sm md:text-base">${item.price}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 md:left-4" />
          <CarouselNext className="right-1 md:right-4" />
        </Carousel>

        <p className="text-[22px] md:text-[30px] text-center font-bold mt-10 md:mt-20 mb-5"> NAIL ESSENTIALS </p>

        <video
          src="/videos/1K34PRO8E_DMCL0D.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
        >
          Trình duyệt của bạn không hỗ trợ video.
        </video>

        <p className="text-[22px] md:text-[30px] text-center font-bold mt-10 md:mt-20 mb-5"> BEST SELLERS </p>

        <div className="w-full grid grid-cols-3 gap-2 sm:gap-4 md:gap-5 px-3 sm:px-4 md:px-5">
  {
    bestSellersHomePage.map((item) => (
      <div key={item.name}>
        <Image
          src="/images/products/p1.JPG"
          alt={item.name}
          width={300}
          height={300}
          className="rounded-xl w-full h-auto aspect-square object-cover"
        />
        <p className="text-xs sm:text-base md:text-[25px] font-bold mt-2 line-clamp-1">{item.name}</p>
        <p className="text-[10px] sm:text-sm md:text-[18px]">${item.price}</p>
      </div>
    ))
  }
</div>

        <p className="text-[22px] md:text-[30px] text-center font-bold mt-10 md:mt-20 mb-5"> OUR REVIEWS </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-[90%] md:w-[70%] mx-auto relative"
        >
          <CarouselContent>
            {reviews.map((item) => (
              <CarouselItem key={item.id} className="basis-full sm:basis-1/2 md:basis-1/3">
                <div className="p-1">
                  <Card className="hover:shadow-2xl">
                    <CardContent className="h-auto md:h-60 flex flex-col gap-2 items-center justify-between p-4">
                        <div className="w-full flex flex-row justify-between items-center">
                          <div>
                            {Array.from({ length: item.stars }).map((_, i) => (
                              <StarFilled key={i} style={{ color: "#FFD700" }} />
                            ))}
                            <Tooltip placement="right" title='Trustindex verifies that the original source of the review is Google.'>
                              <CheckCircleFilled style={{ color: "#1890ff", marginLeft: '5px' }} />
                            </Tooltip>
                          </div>
                          <Tooltip placement="left" title='Posted on Google' align={{ offset: [8, 0] }}>
                            <Image
                              src="/images/googleicon.png"
                              alt="google-icon"
                              width={50}
                              height={28}
                              className="w-10 md:w-15"
                          />
                          </Tooltip>
                        </div>
                        <p className="text-base md:text-[22px] leading-snug">{item.content}</p>
                        <div className="w-full flex flex-row rounded-[50%]">
                          <UserOutlined className="text-[28px] md:text-[40px] p-2" />
                          <div>
                            <p className="text-base md:text-[20px] font-bold">{item.name}</p>
                            <p className="text-sm md:text-base">{timeAgo(item.time)}</p>
                          </div>
                        </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2 md:-left-4" />
          <CarouselNext className="-right-2 md:-right-4" />
        </Carousel>

        <div className="relative mt-10 md:mt-20">
          <Image
             src="/images/homebanner1.png"
              alt="banner"
              width={1920}
              height={1080}
              sizes="100vw"
              className="w-full h-auto"
              quality={100}
              priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:items-end md:justify-center md:text-right md:top-1/2 md:right-20 md:-translate-y-1/2 md:inset-auto px-4 md:px-0">
            <p className="text-white text-[28px] sm:text-[40px] md:text-[60px] font-bold leading-none">SHOP US IRL</p>
            <p className="text-white text-[14px] sm:text-[18px] md:text-[22px] leading-none mt-2 md:mt-0">Make Your Nails Look Gorgeous</p>
            <a href="https://maps.app.goo.gl/gmrdB2rnqc2D7nnf9" target="_blank" className="text-white text-sm md:text-base p-3 md:p-5 bg-black rounded-lg mt-3 md:mt-5">FIND US</a>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
