import React, { useEffect, useState } from "react";
// import SectionTitle from '../../components/SectionTitle';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="mb-20">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-28 pb-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className="text-6xl my-6" />
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-500 mt-2">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;