import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import { getTransLink } from "../../utils/lang";

export default function SwiperEmbla({ articles, language }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="popular-articles">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {articles.map((item, index) => (
            <div className="embla__slide" key={index}>
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
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots">
        {articles.map((_, index) => (
          <button
            key={index}
            className={`embla__dot ${
              index === selectedIndex ? "is-selected" : ""
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
