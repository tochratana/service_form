import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const PremiumButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace false with actual login state
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    if (!isLoggedIn) {
      setShowAlert(true); // Show the alert if the user is not logged in
    } else {
      // Handle the premium action here (e.g., navigate to premium content)
      console.log("Accessing premium content");
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Close the alert
  };

  return (
    <div className=" absolute bottom-0 right-5 md:flex hidden mb-10 rounded-lg flex flex-col">
      <button
        onClick={handleButtonClick}
        className="brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600"
      >
        <div className="px-6 py-2 backdrop-blur-xl bg-black/80 rounded-lg font-bold w-full h-full">
          <div className="group-hover:scale-100 flex group-hover:text-yellow-500 text-yellow-600 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              className="w-6 h-6 stroke-yellow-600 group-hover:stroke-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              ></path>
            </svg>
            DM Owner
          </div>
        </div>
      </button>

      {/* Alert Message */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30">
          {" "}
          {/* Background blur */}
          <div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs">
            <div className="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
              <div className="flex gap-2">
                <div className="text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 1 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-white">Please log in to make chat!</p>
                  <p className="text-gray-500">
                    You need to log in first to Direct Message Shop Owner.
                  </p>
                </div>
              </div>
              <button
                className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear"
                onClick={handleCloseAlert}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Link to Login */}
            <Link
              to="/login" // Use Link for navigation
              className="w-full bg-blue-500 text-white rounded-md py-2 text-center hover:bg-blue-600 transition duration-300"
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumButton;
