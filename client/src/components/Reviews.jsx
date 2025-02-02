import { useState, useEffect } from "react";
import { reviews } from "../utils";
import { FaArrowLeft, FaArrowRight, FaStar, FaRegStar } from "react-icons/fa";

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [reviewsToShow, setReviewsToShow] = useState(1);

  const totalReviews = reviews.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setReviewsToShow(3);
      } else if (window.innerWidth >= 768) {
        setReviewsToShow(2);
      } else {
        setReviewsToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevReview = () => {
    if (currentReviewIndex > 0) {
      setCurrentReviewIndex(currentReviewIndex - 1);
    }
  };

  const handleNextReview = () => {
    if (currentReviewIndex < totalReviews - reviewsToShow) {
      setCurrentReviewIndex(currentReviewIndex + 1);
    }
  };

  return (
    <section className="bg-[#f9f9f9] pt-12 px-6 max-container">
      <h1 className="text-4xl font-semibold text-[#2d6a4f] mb-8 py-2 text-start">
        <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
          Our Happy Customers
        </span>
      </h1>
      <div className="relative">
        <button
          onClick={handlePrevReview}
          className={`absolute z-10 left-0 text-[#333333] bg-white p-4 rounded-full shadow-lg top-1/2 transform -translate-y-1/2 ${
            currentReviewIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Previous Review"
          disabled={currentReviewIndex === 0}
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentReviewIndex / reviewsToShow) * 100
              }%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[calc(100%/1)] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)] p-8 rounded-xl shadow-xl bg-white transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center"
              >
                <img
                  src={review.image}
                  alt={`${review.name}'s picture`}
                  className="w-28 h-28 rounded-full mb-4 shadow-lg border-4 border-blue-300"
                  loading="lazy"
                />
                <h2 className="text-2xl font-semibold text-[#333333] text-center">
                  {review.name}
                </h2>

                <div className="flex justify-center my-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < review.rating ? (
                        <FaStar className="text-yellow-500 w-5 h-5" />
                      ) : (
                        <FaRegStar className="text-yellow-500 w-5 h-5" />
                      )}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 mt-4 text-center text-lg font-serif">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNextReview}
          className={`absolute right-0 text-[#333333] bg-white p-4 rounded-full shadow-lg top-1/2 transform -translate-y-1/2 ${
            currentReviewIndex >= totalReviews - reviewsToShow
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          aria-label="Next Review"
          disabled={currentReviewIndex >= totalReviews - reviewsToShow}
        >
          <FaArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
