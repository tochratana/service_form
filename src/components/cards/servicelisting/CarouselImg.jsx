import { Carousel } from "flowbite-react";

export function CarouselImg({ image, name }) {
  return (
    <div className="grid grid-cols-1 lg:hidden mt-5">
      <Carousel className="h-[470px]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </Carousel>
    </div>
  );
}
