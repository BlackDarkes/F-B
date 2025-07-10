import { useRef, useState, useEffect } from 'react';

export const useSlider = (step: number = 300) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const getMaxSlides = () => {
    if (!sliderRef.current) return 1;
    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    return Math.ceil(maxScroll / step) + 1;
  };

  const scrollToSlide = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) return;

    const maxSlides = getMaxSlides();
    let newSlide = currentSlide;

    if (direction === 'prev' && currentSlide > 1) {
      newSlide = currentSlide - 1;
      sliderRef.current.scrollBy({ left: -step, behavior: 'smooth' });
    } else if (direction === 'next' && currentSlide < maxSlides) {
      newSlide = currentSlide + 1;
      sliderRef.current.scrollBy({ left: step, behavior: 'smooth' });
    }

    setCurrentSlide(newSlide);
  };

  // Обработчик колеса мыши (игнорирует вертикальный скролл)
  const handleWheel = (e: WheelEvent) => {
    if (!sliderRef.current || Math.abs(e.deltaY) > Math.abs(e.deltaX)) return;
    e.preventDefault();
    sliderRef.current.scrollBy({ left: e.deltaX, behavior: 'auto' });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      slider.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return {
    sliderRef,
    currentSlide,
    scrollToPrev: () => scrollToSlide('prev'),
    scrollToNext: () => scrollToSlide('next'),
  };
};