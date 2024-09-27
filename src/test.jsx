import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LogoGP from "./assets/img/LogoCP1.png";
import { Link } from "react-router-dom";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 cursor-pointer z-10"
      style={{ color: "red", fontSize: "2rem" }}
      onClick={onClick}
    >
      &#9654;
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 cursor-pointer z-10"
      style={{ color: "red", fontSize: "2rem" }}
      onClick={onClick}
    >
      &#9664;
    </div>
  );
}

function Test() {
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust breakpoint as needed

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://easyfound.automatex.dev/api/services/?format=json"
      );
      const data = await response.json();
      setSliderData(data.data || []);
    } catch (e) {
      console.error("Error fetching data:", e);
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();

    // Update mobile state on resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: !isMobile, // Hide dots on mobile
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3, // Adjust slides based on screen size
    slidesToScroll: isMobile ? 1 : 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="pt-10 font-poppins">
      <div className="w-full rounded-lg m-auto">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && sliderData.length === 0 && <p>No products available.</p>}
        {sliderData.length > 0 && (
          <Slider {...settings}>
            {sliderData.map((item) => (
              <div key={item.id} className="bg-white p-2">
                <Link
                  to={`/api/${item.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.image ?? LogoGP}
                    alt={item.name}
                    className="w-full h-60 rounded-lg object-cover block"
                  />
                  <div className="p-6 mt-3 bg-primary-500 rounded-lg">
                    <p className="font-semibold text-white text-center line-clamp-1">
                      {item.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Test;
