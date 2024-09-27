import { useState } from "react";

const ImageWithLoader = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className="relative w-full h-full">
      {/* Show loading spinner or placeholder */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        </div>
      )}

      {/* Image element */}
      {!error ? (
        <img
          className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-red-500">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default ImageWithLoader;
