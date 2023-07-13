import React from "react";
import AboutUs from "./AboutUs";
import BMI from "./BMI";

import Home from "./Home";
import LiveClass from "./LiveClass";
import PopularClasses from "./PopularClasses";
import TopTrainers from "./TopTrainers";
import UserReviews from "./UserReviews";
import WorkoutSessions from "./WorkoutSessions";
import NewWorkoutSessions from "./NewWorkoutSessions";
import "./styles.css";
import FAQ from "./FAQ";
import GetStarted from "./GetStarted";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FacebookChat from "../FacebookChat";

// GTM MODULE
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import Booking from "../Booking";
import NewFooter from "./NewFooter";
import NewUserReviews from "./NewUserReview";
import { Helmet } from "react-helmet";

const Landing = () => {
  useEffect(() => {
    const tagManagerArgs = {
      dataLayer: {
        pageName: "HomePage",
      },
      gtmId: "GTM-K7HC9VF",
    };

    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <div className="landingContainer">
      <Helmet>
        <title>Virtual Training Session | Personal Training Simplified</title>
        <meta
          name="keywords"
          content="yoga training, online yoga classes, virtual yoga sessions, online yoga classes for beginners, live yoga sessions online, online fitness trainer, personal trainer online, virtual fitness training, personal trainer online, online workout programs, 1 on 1 personal training, certified personal trainer online, fitness program online, online personal training sessions, virtual fitness classes at home"
        />
        <meta
          name="description"
          content="Join our online yoga classes for beginners and experience live yoga sessions from certified personal trainers. Get virtual fitness training with personalized workout programs and 1 on 1 personal training sessions."
        />
        <meta
          property="og:title"
          content="Virtual Training Session | Personal Training Simplified"
        />
        <meta
          property="og:description"
          content="Join our online yoga classes for beginners and experience live yoga sessions from certified personal trainers. Get virtual fitness training with personalized workout programs and 1 on 1 personal training sessions."
        />
      </Helmet>

      {/* <Navbar /> */}
      <Home />
      <FacebookChat />
      {/* <LiveClass /> */}
      {/* <AboutUs /> */}
      {/* <PopularClasses /> */}
      {/* <NewWorkoutSessions /> */}
      {/* <WorkoutSessions /> */}
      {/* <TopTrainers /> */}
      {/* <BMI /> */}
      <NewUserReviews />
      {/* <UserReviews /> */}
      <Booking />
      {/* <GetStarted /> */}
      {/* <FAQ /> */}
      {/* <Footer /> */}
      <NewFooter />
    </div>
  );
};

export default Landing;
