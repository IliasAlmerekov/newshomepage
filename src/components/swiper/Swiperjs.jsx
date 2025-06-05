import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTransLink } from "../../system/utils/lang";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";

import { FreeMode, Pagination, EffectCube } from "swiper/modules";

export default function Swiperjs({ articles, language }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 590);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 590);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        effect={isSmallScreen ? "cube" : undefined}
        grabCursor={true}
        cubeEffect={{
          shadow: isSmallScreen ? true : undefined,
          slideShadows: isSmallScreen ? true : undefined,
          shadowOffset: isSmallScreen ? 20 : undefined,
          shadowScale: isSmallScreen ? 0.94 : undefined,
        }}
        slidesPerView={isSmallScreen ? undefined : 3}
        spaceBetween={isSmallScreen ? undefined : 30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, EffectCube]}
        className="mySwiper"
      >
        {articles.map((item, index) => (
          <SwiperSlide>
            <a className="popular" href={getTransLink(language, item.slug)}>
              {item.content.image?.filename && (
                <img
                  src={item.content.image.filename}
                  alt={item.content.image.filename}
                />
              )}
              <div className="content">
                <span>{(index + 1).toString().padStart(2, "0")}</span>
                <h3>{item.content.headline}</h3>
                <p>{item.content.subline}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
