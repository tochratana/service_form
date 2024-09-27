import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoGP from "../../../assets/img/LogoCP1.png"; // Fallback image in case there's no image in the response
import Lottie from "lottie-react";
import Loading from "../../animations/loading.json";
const CardTrending = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServices = async () => {
    try {
      const response = await fetch(
        "https://easyfound.automatex.dev/api/services/?format=json"
      );
      const data = await response.json();

      // Assuming the services are in data.data, we slice the first 8 items
      const slicedServices = data.data.slice(50, 58);

      setServices(slicedServices); // Set only the first 8 services
    } catch (err) {
      console.error("Error fetching services:", err);
      setError("Failed to fetch services.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
      <div className="pl-5 ">
        <p className="font-bold text-header-2 font-pacifico">
          Popular Services
        </p>
      </div>
      {loading && (
        <div className="text-center">
          <Lottie animationData={Loading} className="h-[300px]" loop={true} />
        </div>
      )}
      {error && <p>{error}</p>}
      {!loading && services.length === 0 && <p>No services available.</p>}

      <Link to="/servicepage">
        <div className="mb-10 grid grid-cols-1  gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-6  md:p-5 font-poppins">
          {services.map((service, index) => (
            <div key={index}>
              <a
                href="#"
                className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
              >
                <img
                  alt={service.name}
                  className="h-56 w-full rounded-md object-cover"
                  src={service.image ?? LogoGP} // Use API image or fallback
                />

                <div className="mt-2">
                  <dl>
                    <div className="flex">
                      <dt className="sr-only">Address</dt>
                      <dd className="font-medium">
                        {service.name ?? "123 Wallaby Avenue, Park Road"}
                      </dd>
                    </div>
                  </dl>
                </div>
              </a>
            </div>
          ))}
        </div>
      </Link>
    </>
  );
};

export default CardTrending;
