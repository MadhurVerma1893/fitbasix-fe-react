import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import picture from "../../../assets/WhoareWe.svg";
import image1 from "../../../assets/cardImg1.svg";
import image2 from "../../../assets/cardImg2.svg";
import image3 from "../../../assets/cardImg3.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { Pagination } from "swiper";
import FreeTrialDialog from "../../../components/FreeTrialDialog";
import "./styles.css";
const AboutUs = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "easeIn" }}
      variants={{
        visible: { opacity: 1, scale: 1 },

        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {" "}
      <Grid container spacing={2} className="aboutUsContainer">
        <Grid item md={6} xs={12}>
          <Grid container sx={{ padding: "2rem 1rem 2rem 2rem" }}>
            <Grid item md={12}>
              <Typography variant="h3" className="textContent">
                <span style={{ color: "#49AD50", fontWeight: 700 }}>Who </span>
                are we?
              </Typography>
            </Grid>
            <Grid item md={12} xs={12} className="textContent">
              <Typography>
                Welcome to FITbasix! We provide personalized fitness solutions:
                one-to-one personal training, nutrition plans, and free live
                training and yoga sessions for all levels. Join us on your
                journey to a healthier, fitter lifestyle.
              </Typography>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              sx={{ position: "relative", marginTop: "1rem" }}
            >
              <img
                src={picture}
                alt="picture"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12} className="aboutUsContainer--Right">
          <Grid container>
            <Grid item sx={{ marginTop: "1rem" }}>
              <div className="cardContainer">
                <div className="leftContainer">
                  <img alt="" src={image1} />
                </div>
                <div className="rightContainer">
                  <div className="cardTitle">
                    <Typography variant="h6">FREE DIET CONSULTANCY</Typography>
                  </div>
                  <div>
                    <Typography>
                      Fuel your fitness with customized diet plans. Reach your
                      fitness goals with our expertly crafted meal guidance.
                      Join us today!
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item sx={{ marginTop: "1rem" }}>
              <div className="cardContainer">
                <div className="leftContainer">
                  <img alt="" src={image2} />
                </div>
                <div className="rightContainer">
                  <div className="cardTitle">
                    <Typography variant="h6">PERSONAL TRAINING</Typography>
                  </div>
                  <div>
                    <Typography>
                      Elevate your fitness with personalized, one-to-one
                      training. Achieve your goals with expert guidance. Join us
                      today!
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item sx={{ marginTop: "1rem" }}>
              <div className="cardContainer">
                <div className="leftContainer">
                  <img src={image3} alt="" />
                </div>
                <div className="rightContainer">
                  <div className="cardTitle">
                    <Typography variant="h6">FREE YOGA SESSIONS</Typography>
                  </div>
                  <div>
                    <Typography>
                      Unwind and strengthen with yoga for all levels. Our expert
                      instructors guide you towards flexibility and inner peace.
                      Join us today!
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
          sx={{ textAlign: "center", marginBottom: "1rem", marginTop: "1rem" }}
          className="getTrial-btn"
        >
          <Button
            sx={{
              backgroundColor: "#49AD50",
              color: "#fff",
              textAlign: "center",
            }}
            onClick={() => setOpen(true)}
          >
            {" "}
            Get a FREE TRIAL
          </Button>
        </Grid>
        <Grid item md={12} xs={12} className="aboutUsContainer--RightMobile">
          <Grid container >
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
                  <div className="cardContainer">
                    <div className="leftContainer">
                      <img src={image1} alt="" />
                    </div>
                    <div className="rightContainer">
                      <div className="cardTitle">
                        <Typography variant="h6" sx={{ textAlign: "center" }}>
                          FREE DIET CONSULTANCY
                        </Typography>
                      </div>
                      <div>
                        <Typography sx={{ textAlign: "center" }}>
                          Fuel your fitness with customized diet plans. Reach
                          your fitness goals with our expertly crafted meal
                          guidance. Join us today!
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <div className="cardContainer">
                    <div className="leftContainer">
                      <img src={image2} alt="" />
                    </div>
                    <div className="rightContainer">
                      <div className="cardTitle">
                        <Typography variant="h6">PERSONAL TRAINING</Typography>
                      </div>
                      <div>
                        <Typography>
                          Elevate your fitness with personalized, one-to-one
                          training. Achieve your goals with expert guidance.
                          Join us today!
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <div className="cardContainer">
                    <div className="leftContainer">
                      <img src={image3} alt="" />
                    </div>
                    <div className="rightContainer">
                      <div className="cardTitle">
                        <Typography variant="h6">FREE YOGA SESSIONS</Typography>
                      </div>
                      <div>
                        <Typography>
                          Unwind and strengthen with yoga for all levels. Our
                          expert instructors guide you towards flexibility and
                          inner peace. Join us today!
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
          className="getTrial-btnMobile"
          sx={{ textAlign: "center" }}
        >
          <Button
            sx={{
              backgroundColor: "#49AD50",
              color: "#fff",
              textAlign: "center",
            }}
            onClick={() => setOpen(true)}
          >
            {" "}
            Get a FREE TRIAL
          </Button>
        </Grid>
        <FreeTrialDialog
          setOpen={setOpen}
          open={open}
          title={"Get a FREE TRIAL!"}
        />
      </Grid>
    </motion.div>
  );
};

export default AboutUs;
