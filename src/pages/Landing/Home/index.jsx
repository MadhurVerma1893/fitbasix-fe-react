import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  Grid,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import homelogo from "../../../assets/HomepageLogo.svg";
// import whatsappLogo from "../../../assets/newLanding/whatsappLogo.png";
import whatsappLogo from "../../../assets/whatsapp-symbol-logo.svg";
import background from "../../../assets/newLanding/background.png";
import "./styles.css";

import FreeTrialDialog from "../../../components/FreeTrialDialog";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppStoreButton,
  ButtonsContainer,
  GooglePlayButton,
} from "react-mobile-app-button";
import FitbasixLogo from "../../../assets/Fitba6Logo.svg";
import FormBooking from "../../../components/FormBooking/FormBooking";

const useStyles = makeStyles(() => ({
  buttonStep: {
    width: "150px",
    height: "49px",
    background: "#5F8FE8",
    backgrounImage: 'url("../../../assets/google play.jpg")',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const APKUrl =
    "https://play.google.com/store/apps/details?id=com.fitbasixco.fitbasix&hl=en&gl=US&pli=1";
  const iOSUrl = "https://apps.apple.com/tt/app/fitbasix/id1618003884";
  return (
    <div className="homeContainer">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={2} className="homeInnerContainer">
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              sx={{ position: "absolute", width: "90%" }}
            >
              <div
                style={{
                  display: "flex",
                  // flexDirection: "column",
                  placeItems: "end",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <img src={FitbasixLogo} className="FitLogo" alt="" />

                <a href="https://wa.me/971528802831">
                  <Button variant="contained" className="callUsBtn">
                    <span style={{ textTransform: "none" }}>Call us </span>
                    &nbsp;
                    <span
                      style={{ textTransform: "uppercase", fontWeight: "bold" }}
                    >
                      NOW!
                    </span>
                    <img
                      src={whatsappLogo}
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "5px",
                      }}
                      alt="whatsaap"
                    />
                  </Button>
                </a>

                {/* <div style={{ display: "flex" }}>
                  <ButtonsContainer className="buttons-container">
                    <GooglePlayButton
                      url={APKUrl}
                      theme={"light"}
                      className={"appstore-style"}
                    />
                    <AppStoreButton
                      url={iOSUrl}
                      theme={"light"}
                      className={"appstore-style"}
                    />
                  </ButtonsContainer>
                </div> */}
              </div>
            </Grid>

            <Grid item xs={12} sm={12} className="mob_Head_view">
              {/* <img src={FitbasixLogo} alt="" /> */}
              <Typography className="title" style={{ marginTop: "6rem" }}>
                <span className="title">
                  PERSONAL TRAINING <br />
                  <span style={{ color: "#49AD50" }}>SIMPLIFIED</span>
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} className="sub-title">
              <Typography>
                <span className="sub-title">
                  Get personalized online training designed
                  <br /> Just for you!
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} className="knowMore-btn">
              {/* <Button
                variant="contained"
                onClick={() => setOpen(true)}
                style={{
                  textTransform: "none",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  textShadow: "1px 1px #000",
                }}
              >
                Know more
              </Button> */}
              <div style={{ display: "flex" }}>
                <ButtonsContainer className="buttons-container">
                  <GooglePlayButton
                    url={APKUrl}
                    theme={"light"}
                    className={"appstore-style"}
                  />
                  <AppStoreButton
                    url={iOSUrl}
                    theme={"light"}
                    className={"appstore-style"}
                  />
                </ButtonsContainer>
              </div>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div className="form-div">
                <FormBooking />
              </div>
            </Grid>
            {/* </Box>
            </Box>  */}
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} className="explore-btn">
          <Typography
            variant="subtitle1"
            style={{ marginBottom: "110px" }}
            onClick={() => {
              document
                .querySelector(`#liveClassId`)
                .scrollIntoView({ behavior: "smooth" });
            }}
            sx={{ cursor: "pointer" }}
          >
            Explore
            <br />
            <KeyboardArrowDownIcon />
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={1}
          sx={{ textAlign: "end", padding: "1rem" }}
          className="whatsappContainer"
        >
          <Tooltip
            title="Contact Us"
            placement="left-start"
            arrow
            sx={{ backgroundColor: "#fff" }}
          >
            <a href="https://wa.me/971528802831" className="float">
              <img src={whatsappLogo} alt="" height={50} />
            </a>
          </Tooltip>
        </Grid>
        <FreeTrialDialog
          setOpen={setOpen}
          open={open}
          title={"Get a FREE TRIAL!"}
        />
        <img
          src={background}
          className=" flex self-end w-full h-[130px] bg-inherit"
          alt="bg"
        />
      </Grid>
    </div>
  );
};

export default Home;
