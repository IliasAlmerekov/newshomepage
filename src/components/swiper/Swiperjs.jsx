import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getTransLink } from '../../system/utils/lang'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './style.css'

import { FreeMode, Pagination, Navigation } from 'swiper/modules'

export default function Swiperjs({ articles, language }) {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  )
  console.log(articles.slug)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isMobile = screenWidth <= 768
  const isTablet = screenWidth > 768 && screenWidth <= 1024

  return (
    <>
      <Swiper
        slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
        spaceBetween={isMobile || isTablet ? 20 : 30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {articles.map((item, index) => (
          <SwiperSlide>
            {item.content.image?.filename && (
              <img
                className="card-image"
                src={item.content.image.filename}
                alt={item.content.image.filename}
              />
            )}
            <a className="popular" href={getTransLink(language, item.slug)}>
              <div className="content">
                <span>{(index + 1).toString().padStart(2, '0')}</span>
                <h3>{item.content.headline}</h3>
                <p>{item.content.subline}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
