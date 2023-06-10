import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  const sliderdata = [
    {
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTTtGJ038MXheNSYSfRC-7YC6M_TskSL0Vw&usqp=CAU",
      tag: "adidas",
    },
    {
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyEgCrDmIH_-LRlqNdU50gDjBW_dxg8b8GQ&usqp=CAU",
      tag: "Bonds",
    },
    {
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GsfMGHZWbUR0NzAMchmd-gprL9Rea1HEJQ&usqp=CAU",
      tag: "GROUPON",
    },
    {
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXYcMPdKbV71R-zTfdhQF2r_d5tJ_Qat6rw&usqp=CAU",
      tag: "amazon",
    },
    {
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNSLB7CmAqVGRr3VVcc7vQFPFBK-49-2y-gA&usqp=CAU",
      tag: "DELL",
    },
    {
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTTtGJ038MXheNSYSfRC-7YC6M_TskSL0Vw&usqp=CAU",
      tag: "adidas",
    },
  ];
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {sliderdata.map((el) => (
          <SwiperSlide>
            <div className="w-[140px] h-[180px]">
              {/* image box */}
              <div className="w-[100%] h-[50%] ">
                <img
                  className="w-[100%] h-[100%] rounded-t-3xl"
                  src={el.img_url}
                />
                <p className="relative mt-[-60px] text-center text-teal-50 text-bold text-xl">
                  {el.tag}
                </p>
              </div>
              {/* description box */}
              <div className="w-full h-[50%] bg-teal-50 rounded-b-3xl">
                <div className="flex justify-evenly pt-5 text-[12px]">
                  <p className="text-gray-400">Up to</p>
                  <p className="text-teal-400">8%</p>
                  <p className="text-gray-400">cashback!</p>
                </div>
                <p className="text-gray-400 ml-3 text-[12px]">was 4%</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
