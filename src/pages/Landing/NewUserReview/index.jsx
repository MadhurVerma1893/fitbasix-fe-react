import { Grid, Typography, Fab } from "@mui/material";
import React, { useRef } from "react";

import "./styles.css";
import {
  ResponsiveContainer,
  StackedCarousel,
} from "react-stacked-center-carousel";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import userR1 from "../../../assets/Users/mensa_ezz.png";
import userR2 from "../../../assets/Users/Dr_kumar.png";
import userR3 from "../../../assets/Users/shaima_hormillosa.png";
import userR4 from "../../../assets/Users/naina_qureshi.png";
import userR5 from "../../../assets/Users/urfi_jagda.png";
import userR6 from "../../../assets/Users/anum_zeeshan.png";
import userR7 from "../../../assets/Users/bony_kar.png";
import userR8 from "../../../assets/Users/shadan_nazeer.png";
import userR9 from "../../../assets/Users/mrs._noushad.png";
import userR10 from "../../../assets/Users/shikha_shack.png";
import userR11 from "../../../assets/Users/Chintan_Shah.png";
import userR12 from "../../../assets/Users/Sanidhi_G._Sharma.png";
import userR13 from "../../../assets/Users/Umair_Qazi.png";
import userR14 from "../../../assets/Users/Zahra_Omar.png";
import userR0 from "../../../assets/Users/user.png";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import NewUsersCard from "./UsersCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const data = [
  {
    content: "It’s really a masterpiece ❤❤",
    name: "Mensa Ezz",
    logo: userR1,
    service: "Service that customer availed",
  },
  {
    content: "Awesome 🙌❤👏 @fitbasix the best app",
    name: "Dr Kumar ",
    logo: userR2,
    service: "Service that customer availed",
  },
  {
    content:
      "Starting a fitness program may be one of the best things you can do for your health. ~ Physical activity can reduce your risk of chronic disease, improve your balance and coordination, help you lose weight - and even improve your sleep habits and self-esteem! With @fitbasix, you get a nutritionist + a fitness expert so you can plan your fitness journey efficiently! Such an easy to use app and convenient as well for busy people like us.Thanks for sharing @anumable.blog! Rooting for your fitness journey.",
    name: "Shaima Hormillosa ",
    logo: userR3,
    service: "Service that customer availed",
  },
  {
    content: "Sooo convenient amazing",
    name: "Naina Qureshi",
    logo: userR4,
    service: "Service that customer availed",
  },
  {
    content: "This is convenient to use",
    name: "Urfi Jagda",
    logo: userR5,
    service: "Service that customer availed",
  },
  {
    content: "I already downloaded the app and it’s super cool.",
    name: "Anum Zeeshan",
    logo: userR6,
    service: "Service that customer availed",
  },
  {
    content: "This is absolutely amazing. FITbasix is such a great app.",
    name: "Bony Kar",
    logo: userR7,
    service: "Service that customer availed",
  },
  {
    content:
      "This app @fitbasix_ looks perfect for all busy people to give some quality time for health at the convenience of our busy schedule.",
    name: "Shadan Nazeer",
    logo: userR8,
    service: "Service that customer availed",
  },
  {
    content:
      "Being Fit is so much Needed now adays and Only laziness makes it delay for being fit..!! @fitbasix_ is a great platform for us.",
    name: "Mrs. Noushad ",
    logo: userR9,
    service: "Service that customer availed",
  },
  {
    content: "@fitbasix_ is all that I need right now",
    name: "Shikha Shack ",
    logo: userR10,
    service: "Service that customer availed",
  },
  {
    content:
      "That is brilliant. I am also planning to join gym but not able to do it because of kids. This is gonna be a great motivation @fitbasix_",
    name: "Zartashia Mir",
    logo: userR0,
    service: "Service that customer availed",
  },
  {
    content:
      "I have been working out with Avik for quite sometime now. I must say my experience is no short than a live training session. Look forward my fitness journey with Fitbasix.",
    name: "Chintan Shah",
    logo: userR11,
    service: "Service that customer availed",
  },
  {
    content:
      "Hi, my name is sanidhi . And i am a happy customer of Fitbasix.. My trainer is Rosen chettri . I am thankful to thi app and my tranier for trusting in me and helping me towards achieving my goals. Thankyou very much.",
    name: "Sanidhi G. Sharma",
    logo: userR12,
    service: "Service that customer availed",
  },
  {
    content:
      "Fitbasix has been fabulous for me. The trainers are professional, they dedicate their time to you, help you navigate your own fitness challenges, and help with building strength, reducing weight, and achieving top levels of fitness.",
    name: "Umair Qazi",
    logo: userR13,
    service: "Service that customer availed",
  },
  {
    content:
      "Everyone says health is wealth but a lot of motivation, stamina, patience, consistency and encouragement goes into achieving it. Fitbasix makes you achieve exactly that; from the point when you’re not up to or geared towards an active lifestyle at all, till you actually achieve the goals you had once....",
    name: "Zahra Omar",
    logo: userR14,
    service: "Service that customer availed",
  },
];
const NewUserReviews = () => {
  const ref = useRef();
  return (
    <div className="userReviewsContainer">
      <Grid container>
        <Grid item md={12} xs={12} className="TopContent--Container">
          <Typography className="UserReviewHead">
            What our Customers say
          </Typography>
          <Typography className="text-[#747474] leading-7 md:ml-[85px] mt-0 ">
            Words from Our Delighted Customers
          </Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <div className="popularClassesContainer--Bottom">
            <ResponsiveContainer
              carouselRef={ref}
              render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 1;
                if (parentWidth >= 1023) currentVisibleSlide = 3;
                if (parentWidth <= 767) currentVisibleSlide = 1;
                return (
                  <>
                    <StackedCarousel
                      ref={carouselRef}
                      slideComponent={NewUsersCard}
                      slideWidth={250}
                      carouselWidth={parentWidth}
                      data={data}
                      currentVisibleSlide={currentVisibleSlide}
                      maxVisibleSlide={3}
                      useGrabCursor
                      fadeDistance={0.2}
                      max-height={500}
                    />
                  </>
                );
              }}
            />
            <div className="FabButton--Container">
              <Fab
                size="small"
                color="secondary"
                aria-label="prev"
                sx={{ backgroundColor: "#C3FFC8" }}
                onClick={() => {
                  ref.current?.goBack();
                }}
              >
                <ArrowBackIosNewIcon sx={{ color: "#022405" }} />
              </Fab>
              <Fab
                size="small"
                color="secondary"
                sx={{ backgroundColor: "#C3FFC8" }}
                aria-label="next"
                onClick={() => {
                  ref.current?.goNext(6);
                }}
              >
                <ArrowForwardIosIcon sx={{ color: "#022405" }} />
              </Fab>
            </div>
          </div>
          <div className="userReviewsContainer--BottomMobile">
            <Swiper
              navigation={false}
              speed={1000}
              className="mySwiper"
              modules={[Autoplay]}
              pagination={false}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              {data?.map((elem, index) => {
                return (
                  <SwiperSlide>
                    <div
                      className="SwiperSlide"
                      style={{ padding: "2rem 0rem" }}
                    >
                      <NewUsersCard data={data} dataIndex={index} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* <div className="userReviewsContainer--Bottom">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              speed={1000}
              className="mySwiper"
              effect={"fade"}
            >
              <SwiperSlide>
                <div className="SwiperSlide" style={{ padding: "2rem 0rem" }}>
                  <NewUsersCard
                    content="It’s really a masterpiece ❤❤"
                    name="Mensa Ezz"
                    logo={userR1}
                    service="Service that customer availed"
                  />
                  <NewUsersCard
                    content="Awesome 🙌❤👏 @fitbasix the best app"
                    name="Dr Kumar "
                    logo={userR2}
                    service="Service that customer availed"
                  />
                  <NewUsersCard
                    content="Starting a fitness program may be one of the best things you can do for your health. ~ Physical activity can reduce your risk of chronic disease, improve your balance and coordination, help you lose weight - and even improve your sleep habits and self-esteem! With @fitbasix, you get a nutritionist + a fitness expert so you can plan your fitness journey efficiently! Such an easy to use app and convenient as well for busy people like us.Thanks for sharing @anumable.blog! Rooting for your fitness journey."
                    name="Shaima Hormillosa "
                    logo={userR3}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="Sooo convenient amazing"
                    name="Naina Qureshi"
                    logo={userR4}
                    service="Service that customer availed"
                  />
                  <NewUsersCard
                    content="This is convenient to use"
                    name="Urfi Jagda"
                    logo={userR5}
                    service="Service that customer availed"
                  />{" "}
                  <NewUsersCard
                    content="I already downloaded the app and it’s super cool."
                    name="Anum Zeeshan"
                    logo={userR6}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="This is absolutely amazing. FITbasix is such a great app."
                    name="Bony Kar"
                    logo={userR7}
                    service="Service that customer availed"
                  />
                  <NewUsersCard
                    content="This app @fitbasix_ looks perfect for all busy people to give some quality time for health at the convenience of our busy schedule."
                    name="Shadan Nazeer"
                    logo={userR8}
                    service="Service that customer availed"
                  />
                  <NewUsersCard
                    content="Being Fit is so much Needed now adays and Only laziness makes it delay for being fit..!! @fitbasix_ is a great platform for us."
                    name="Mrs. Noushad "
                    logo={userR9}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="@fitbasix_ is all that I need right now"
                    name="Shikha Shack "
                    logo={userR10}
                    service="Service that customer availed"
                  />
                  <NewUsersCard
                    content="That is brilliant. I am also planning to join gym but not able to do it because of kids. This is gonna be a great motivation @fitbasix_"
                    name="Zartashia Mir"
                    logo={userR0}
                    service="Service that customer availed"
                  />
                  <NewUsersCard
                    content="I have been working out with Avik for quite sometime now. I must say my experience is no short than a live training session. Look forward my fitness journey with Fitbasix."
                    name="Chintan Shah"
                    logo={userR11}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="Hi, my name is sanidhi . And i am a happy customer of Fitbasix.. My trainer is Rosen chettri . I am thankful to thi app and my tranier for trusting in me and helping me towards achieving my goals. Thankyou very much."
                    name="Sanidhi G. Sharma"
                    logo={userR12}
                    service="Service that customer availed"
                  />
                  <NewUsersCard
                    content="Fitbasix has been fabulous for me. The trainers are professional, they dedicate their time to you, help you navigate your own fitness challenges, and help with building strength, reducing weight, and achieving top levels of fitness."
                    name="Umair Qazi"
                    logo={userR13}
                    service="Service that customer availed"
                  />{" "}
                  <NewUsersCard
                    content="Everyone says health is wealth but a lot of motivation, stamina, patience, consistency and encouragement goes into achieving it. Fitbasix makes you achieve exactly that; from the point when you’re not up to or geared towards an active lifestyle at all, till you actually achieve the goals you had once...."
                    name="Zahra Omar"
                    logo={userR14}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div> */}

          {/* <div className="userReviewsContainer--BottomMobile">
           
            <Swiper
              navigation={false}
              speed={1000}
              className="mySwiper"
              modules={[Autoplay]}
              pagination={false}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="It’s really a masterpiece ❤❤"
                    name="Mensa Ezz"
                    logo={userR1}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="Awesome 🙌❤👏 @fitbasix the best app"
                    name="Dr Kumar "
                    logo={userR2}
                    service="Service that customer availed"
                  />{" "}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="Starting a fitness program may be one of the best things you can do for your health. ~ Physical activity can reduce your risk of chronic disease, improve your balance and coordination, help you lose weight - and even improve your sleep habits and self-esteem! With @fitbasix, you get a nutritionist + a fitness expert so you can plan your fitness journey efficiently! Such an easy to use app and convenient as well for busy people like us.Thanks for sharing @anumable.blog! Rooting for your fitness journey."
                    name="Shaima Hormillosa "
                    logo={userR3}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="Sooo convenient amazing"
                    name="Naina Qureshi"
                    logo={userR4}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="This is convenient to use"
                    name="Urfi Jagda"
                    logo={userR5}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="I already downloaded the app and it’s super cool."
                    name="Anum Zeeshan"
                    logo={userR6}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="This is absolutely amazing. FITbasix is such a great app."
                    name="Bony Kar"
                    logo={userR7}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="This app @fitbasix_ looks perfect for all busy people to give some quality time for health at the convenience of our busy schedule."
                    name="Shadan Nazeer"
                    logo={userR8}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="Being Fit is so much Needed now adays and Only laziness makes it delay for being fit..!! @fitbasix_ is a great platform for us."
                    name="Mrs. Noushad "
                    logo={userR9}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="@fitbasix_ is all that I need right now"
                    name="Shikha Shack "
                    logo={userR10}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="That is brilliant. I am also planning to join gym but not able to do it because of kids. This is gonna be a great motivation @fitbasix_"
                    name="Zartashia Mir"
                    logo={userR0}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="I have been working out with Avik for quite sometime now. I must say my experience is no short than a live training session. Look forward my fitness journey with Fitbasix."
                    name="Chintan Shah"
                    logo={userR11}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="Hi, my name is sanidhi . And i am a happy customer of Fitbasix.. My trainer is Rosen chettri . I am thankful to thi app and my tranier for trusting in me and helping me towards achieving my goals. Thankyou very much."
                    name="Sanidhi G. Sharma"
                    logo={userR12}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="Fitbasix has been fabulous for me. The trainers are professional, they dedicate their time to you, help you navigate your own fitness challenges, and help with building strength, reducing weight, and achieving top levels of fitness."
                    name="Umair Qazi"
                    logo={userR13}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <NewUsersCard
                    content="Everyone says health is wealth but a lot of motivation, stamina, patience, consistency and encouragement goes into achieving it. Fitbasix makes you achieve exactly that; from the point when you’re not up to or geared towards an active lifestyle at all, till you actually achieve the goals you had once...."
                    name="Zahra Omar"
                    logo={userR14}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default NewUserReviews;
