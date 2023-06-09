import { Typography } from "@mui/material";
import React from "react";
import trainer1 from "../../../assets/Trainers/trainer1.png";
import trainer2 from "../../../assets/Trainers/trainer2.png";
import trainer3 from "../../../assets/Trainers/trainer3.png";
import trainer4 from "../../../assets/Trainers/trainer4.png";
import TrainerCard from "./TrainerCard";
import "./styles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { getTrainers } from "../../../api/services";

const TopTrainers = () => {
  const [trainers, setTrainers] = useState([]);

  const getData = async () => {
    let response = await getTrainers();

    setTrainers(response?.response?.data);
  };

  useEffect(() => {
    getData();
  }, []);

 const capitalizeFirstLetter = (string) => {

    return string.charAt(0).toUpperCase() + string.slice(1);

}

  return (
    <div className="topTrainersContainer">
      <div className="topTrainersContainer--top">
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", textAlign: "center" }}
        >
          Our top trainers
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginTop: "1rem" }}
        >
          Meet our exceptional trainers at FITbasix! Skilled professionals
          committed to helping you achieve your fitness goals.
        </Typography>
      </div>
      <div className="topTrainersContainer--bottom">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          speed={1000}
          className="mySwiper"
          effect={"fade"}
        >
          <SwiperSlide>
            <div className="SwiperSlide">
              <TrainerCard
                image={trainers[0]?.profilePhoto}
                name={trainers[0]?.name}
                designation="Personal Trainer"
                experience="1"
                rating={parseInt(trainers[0]?.rating)}
                reviews={40}
              />
              <TrainerCard
                image={trainers[1]?.profilePhoto}
                name={trainers[1]?.name}
                designation="Personal Trainer"
                experience="2"
                rating={parseInt(trainers[1]?.rating)}
                reviews={30}
              />
              <TrainerCard
                image={trainers[2]?.profilePhoto}
                name={trainers[2]?.name}
                designation="Personal Trainer"
                experience="1"
                rating={parseInt(trainers[2]?.rating)}
                reviews={25}
              />
              <TrainerCard
                image={trainers[3]?.profilePhoto}
                name={trainers[3]?.name}
                designation="Personal Trainer"
                experience="2.5"
                rating={parseInt(trainers[3]?.rating)}
                reviews={30}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <TrainerCard
                image={trainers[4]?.profilePhoto}
                name={trainers[4]?.name}
                designation="Personal Trainer"
                experience="2"
                rating={parseInt(trainers[4]?.rating)}
                reviews={30}
              />
              <TrainerCard
                image={trainers[5]?.profilePhoto}
                name={trainers[5]?.name}
                designation="Personal Trainer"
                experience="2.5"
                rating={parseInt(trainers[5]?.rating)}
                reviews={35}
              />
              <TrainerCard
                image={trainers[6]?.profilePhoto}
                name={trainers[6]?.name}
                designation="Diet Trainer"
                experience="1"
                rating={parseInt(trainers[6]?.rating)}
                reviews={20}
              />
              {/* <TrainerCard
                image={trainers[7]?.profilePhoto}
                name={trainers[7]?.name}
                designation="HIIT Trainer"
                experience="3"
                rating={parseInt(trainers[7]?.rating)}
                reviews={234}
              /> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="topTrainersContainer--bottomMobile">
        <Swiper
          navigation={false}
          modules={[Pagination]}
          speed={1000}
          className="mySwiper"
          effect={"fade"}
          pagination={true}
        >
          {trainers?.map((obj, index) => (
            <>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <TrainerCard
                    image={obj?.profilePhoto}
                    name={obj?.name}
                    designation="HIIT Trainer"
                    experience="3"
                    rating={parseInt(obj?.rating)}
                    reviews={234}
                  />
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopTrainers;
