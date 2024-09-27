import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const FeedbackForm = ({ shopename }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace false with actual login state
  const [showAlert, setShowAlert] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleTextareaFocus = (event) => {
    if (!isLoggedIn) {
      setShowAlert(true);
      event.preventDefault();
      event.target.blur();
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  return (
    <div className="md:flex mb-10  rounded-lg flex flex-col">
      <div className="bg-white  grid grid-cols-6 gap-2 rounded-xl p-2 text-sm">
        <h1 className="font-poppins text-center text-slate-200 text-xl font-bold col-span-6">
          Send Feedback to{" "}
          <span className="text-grey-400 font-pacifico">{shopename}</span>
        </h1>

        {/* Textarea for feedback */}
        <textarea
          placeholder="I love this service so much it make me easy and efficient....."
          className="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
          value={feedback}
          onChange={handleFeedbackChange}
          onFocus={handleTextareaFocus}
        ></textarea>

        {/* Feedback button */}
        <button
          className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200"
          onClick={() => {
            if (!isLoggedIn) {
              setShowAlert(true); // Show the alert if the user is not logged in
            } else {
              // Handle the feedback submission logic here
              console.log("Feedback submitted:", feedback);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 512 512"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
          </svg>

          {/* Optional text next to the icon */}
        </button>

        {/* Alert Message */}
        {showAlert && (
          <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30">
            {" "}
            {/* Background blur */}
            <div className="flex flex-col gap-2 w-80 sm:w-72  text-[10px] sm:text-xs">
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
                    <p className="text-white">
                      Please log in to provide feedback!
                    </p>
                    <p className="text-gray-500">
                      You need to log in first to type your feedback.
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
    </div>
  );
};

export default FeedbackForm;
