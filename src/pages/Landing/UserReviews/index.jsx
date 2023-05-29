import React from "react";
import "./styles.css";
import { Grid, Typography } from "@mui/material";
import UsersCard from "./UsersCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const UserReviews = () => {
  return (
    <div className="userReviewsContainer">
      <Grid container>
        <Grid item md={12} xs={12} className="TopContent--Container">
          {" "}
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, marginTop: "1rem", textAlign: "center" }}
          >
            Check Out Our <span style={{ color: "#49AD50" }}>Users</span>{" "}
            Reviews
          </Typography>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", marginTop: "1rem" }}
          >
            Users rave about FITbasix's personal training sessions:
            game-changing workouts, measurable progress, and <br/> newfound confidence
            in their fitness journey!
          </Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          {/* FOR DESKTOP */}
          <div className="userReviewsContainer--Bottom">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              speed={1000}
              className="mySwiper"
              effect={"fade"}
            >
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="FITbasix transformed my fitness routine with its user-friendly interface, diverse workouts, and expert guidance. Highly recommend!"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content="FITbasix transformed my fitness journey! With its user-friendly interface and comprehensive workout library, reaching my goals has never been easier."
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />{" "}
                  <UsersCard
                    content="FITbasix transformed my fitness routine! With its user-friendly interface and diverse workout options, I'm achieving my goals faster than ever. #FITbasix"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />{" "}
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />{" "}
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* FOR MOBILE */}
          <div className="userReviewsContainer--BottomMobile">
            <Swiper
              navigation={false}
              modules={[Pagination]}
              speed={1000}
              className="mySwiper"
              effect={"fade"}
              pagination={true}
            >
              <SwiperSlide>
                <div className="SwiperSlide">
                  {" "}
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  {" "}
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  {" "}
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserReviews;
