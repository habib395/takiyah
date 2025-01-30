import React, { useEffect, useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://i.ibb.co.com/c2R18Zd/plain-one.png",
    "https://i.ibb.co.com/R4GPhZv/embo-one.png",
    "https://i.ibb.co.com/gP32sZY/hand-one.png",
    "https://i.ibb.co.com/jZqJB14/lux-one.png",
    "https://i.ibb.co.com/zRZBLyC/kid-one.png",
    "https://i.ibb.co.com/jLVVzbW/tra-one.png",
    "https://i.ibb.co.com/Mh9ycfr/sport-one.png",
    "https://i.ibb.co.com/0fWwqKc/cul-one.png",
    "https://i.ibb.co.com/cw8J89d/tion-one.png",
    "https://i.ibb.co.com/hDhZmyP/fashion-one.png",
    "https://i.ibb.co.com/TYB6vP7/fes-one.png",
    "https://i.ibb.co.com/tM6ryJg/casual-one.png",
    "https://i.ibb.co.com/mF6TqKZ/plain-three.png",
    "https://i.ibb.co.com/KKNY8fn/embo-two.png",
    "https://i.ibb.co.com/D45mmGd/hand-two.png",
    "https://i.ibb.co.com/r0phbNx/lux-two.png",
    "https://i.ibb.co.com/r71VxrR/kid-two.png",
    "https://i.ibb.co.com/1RzBzyQ/tra-two.png",
    "https://i.ibb.co.com/CQs6B1g/sport-two.png",
    "https://i.ibb.co.com/grcyNpy/cul-two.png",
    "https://i.ibb.co.com/0D5rRZz/tion-two.png",
    "https://i.ibb.co.com/YkJkKwT/fashion-two.png",
    "https://i.ibb.co.com/5WBNyHW/fas-two.png",
    "https://i.ibb.co.com/DQkDZHX/casuyal-two.png",
    "https://i.ibb.co.com/Swv2xH3/plain-two.png",
    "https://i.ibb.co.com/859dWKQ/embo-three.png",
    "https://i.ibb.co.com/XVgQKvY/hand-three.png",
    "https://i.ibb.co.com/MBY9cq3/lux-three.png",
    "https://i.ibb.co.com/J3KxJLG/kid-three.png",
    "https://i.ibb.co.com/180bwxS/tra-three.png",
    "https://i.ibb.co.com/c2R18Zd/plain-one.png",
    "https://i.ibb.co.com/R4GPhZv/embo-one.png",
    "https://i.ibb.co.com/gP32sZY/hand-one.png",
    "https://i.ibb.co.com/jZqJB14/lux-one.png",
    "https://i.ibb.co.com/zRZBLyC/kid-one.png",
    "https://i.ibb.co.com/jLVVzbW/tra-one.png",
    "https://i.ibb.co.com/Mh9ycfr/sport-one.png",
    "https://i.ibb.co.com/0fWwqKc/cul-one.png",
    "https://i.ibb.co.com/cw8J89d/tion-one.png",
    "https://i.ibb.co.com/hDhZmyP/fashion-one.png",
    "https://i.ibb.co.com/TYB6vP7/fes-one.png",
    "https://i.ibb.co.com/tM6ryJg/casual-one.png",
    "https://i.ibb.co.com/mF6TqKZ/plain-three.png",
    "https://i.ibb.co.com/KKNY8fn/embo-two.png",
    "https://i.ibb.co.com/D45mmGd/hand-two.png",
    "https://i.ibb.co.com/r0phbNx/lux-two.png",
    "https://i.ibb.co.com/r71VxrR/kid-two.png",
    "https://i.ibb.co.com/1RzBzyQ/tra-two.png",
    "https://i.ibb.co.com/CQs6B1g/sport-two.png",
    "https://i.ibb.co.com/grcyNpy/cul-two.png",
    "https://i.ibb.co.com/0D5rRZz/tion-two.png",
    "https://i.ibb.co.com/YkJkKwT/fashion-two.png",
    "https://i.ibb.co.com/5WBNyHW/fas-two.png",
    "https://i.ibb.co.com/DQkDZHX/casuyal-two.png",
    "https://i.ibb.co.com/Swv2xH3/plain-two.png",
    "https://i.ibb.co.com/859dWKQ/embo-three.png",
    "https://i.ibb.co.com/XVgQKvY/hand-three.png",
    "https://i.ibb.co.com/MBY9cq3/lux-three.png",
    "https://i.ibb.co.com/J3KxJLG/kid-three.png",
    "https://i.ibb.co.com/180bwxS/tra-three.png",
    "https://i.ibb.co.com/c2R18Zd/plain-one.png",
    "https://i.ibb.co.com/R4GPhZv/embo-one.png",
    "https://i.ibb.co.com/gP32sZY/hand-one.png",
    "https://i.ibb.co.com/jZqJB14/lux-one.png",
    "https://i.ibb.co.com/zRZBLyC/kid-one.png",
    "https://i.ibb.co.com/jLVVzbW/tra-one.png",
    "https://i.ibb.co.com/Mh9ycfr/sport-one.png",
    "https://i.ibb.co.com/0fWwqKc/cul-one.png",
    "https://i.ibb.co.com/cw8J89d/tion-one.png",
    "https://i.ibb.co.com/hDhZmyP/fashion-one.png",
    "https://i.ibb.co.com/TYB6vP7/fes-one.png",
    "https://i.ibb.co.com/tM6ryJg/casual-one.png",
    "https://i.ibb.co.com/mF6TqKZ/plain-three.png",
    "https://i.ibb.co.com/KKNY8fn/embo-two.png",
    "https://i.ibb.co.com/D45mmGd/hand-two.png",
    "https://i.ibb.co.com/r0phbNx/lux-two.png",
    "https://i.ibb.co.com/r71VxrR/kid-two.png",
    "https://i.ibb.co.com/1RzBzyQ/tra-two.png",
    "https://i.ibb.co.com/CQs6B1g/sport-two.png",
    "https://i.ibb.co.com/grcyNpy/cul-two.png",
    "https://i.ibb.co.com/0D5rRZz/tion-two.png",
    "https://i.ibb.co.com/YkJkKwT/fashion-two.png",
    "https://i.ibb.co.com/5WBNyHW/fas-two.png",
    "https://i.ibb.co.com/DQkDZHX/casuyal-two.png",
    "https://i.ibb.co.com/Swv2xH3/plain-two.png",
    "https://i.ibb.co.com/859dWKQ/embo-three.png",
    "https://i.ibb.co.com/XVgQKvY/hand-three.png",
    "https://i.ibb.co.com/MBY9cq3/lux-three.png",
    "https://i.ibb.co.com/J3KxJLG/kid-three.png",
    "https://i.ibb.co.com/180bwxS/tra-three.png",
    "https://i.ibb.co.com/c2R18Zd/plain-one.png",
    "https://i.ibb.co.com/R4GPhZv/embo-one.png",
    "https://i.ibb.co.com/gP32sZY/hand-one.png",
    "https://i.ibb.co.com/jZqJB14/lux-one.png",
    "https://i.ibb.co.com/zRZBLyC/kid-one.png",
    "https://i.ibb.co.com/jLVVzbW/tra-one.png",
    "https://i.ibb.co.com/Mh9ycfr/sport-one.png",
    "https://i.ibb.co.com/0fWwqKc/cul-one.png",
    "https://i.ibb.co.com/cw8J89d/tion-one.png",
    "https://i.ibb.co.com/hDhZmyP/fashion-one.png",
    "https://i.ibb.co.com/TYB6vP7/fes-one.png",
    "https://i.ibb.co.com/tM6ryJg/casual-one.png",
    "https://i.ibb.co.com/mF6TqKZ/plain-three.png",
    "https://i.ibb.co.com/KKNY8fn/embo-two.png",
    "https://i.ibb.co.com/D45mmGd/hand-two.png",
    "https://i.ibb.co.com/r0phbNx/lux-two.png",
    "https://i.ibb.co.com/r71VxrR/kid-two.png",
    "https://i.ibb.co.com/1RzBzyQ/tra-two.png",
    "https://i.ibb.co.com/CQs6B1g/sport-two.png",
    "https://i.ibb.co.com/grcyNpy/cul-two.png",
    "https://i.ibb.co.com/0D5rRZz/tion-two.png",
    "https://i.ibb.co.com/YkJkKwT/fashion-two.png",
    "https://i.ibb.co.com/5WBNyHW/fas-two.png",
    "https://i.ibb.co.com/DQkDZHX/casuyal-two.png",
    "https://i.ibb.co.com/Swv2xH3/plain-two.png",
    "https://i.ibb.co.com/859dWKQ/embo-three.png",
    "https://i.ibb.co.com/XVgQKvY/hand-three.png",
    "https://i.ibb.co.com/MBY9cq3/lux-three.png",
    "https://i.ibb.co.com/J3KxJLG/kid-three.png",
    "https://i.ibb.co.com/180bwxS/tra-three.png"
  ];

  const visibleImages = 40; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / visibleImages}%)`,
          width: `${(images.length * 100) / visibleImages}%`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{
              flexBasis: `${100 / visibleImages}%`,
            }}
          >
            <img src={src} alt={`Slide ${index}`} className="w-full h-[70px] sm:h-[100px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
