import React from "react";
import "./styles.css";
import bgImage from "../../../assets/GetStartedBG.svg";
import Mobiles from "../../../assets/Mobiles.svg";
import MobileStoreButton from "react-mobile-store-button";
import { Button, Grid, TextField, Typography } from "@mui/material";
import {
  GooglePlayButton,
  AppStoreButton,
  ButtonsContainer,
} from "react-mobile-app-button";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';


const GetStarted = () => {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=com.fitbasixco.fitbasix&hl=en&gl=US&pli=1";
  const iOSUrl = "https://apps.apple.com/tt/app/fitbasix/id1618003884";

  return (
    <div className="GetStarted--Container">
      <Grid container>
        <Grid item md={6} xs={12} className="GridLeft--Conatiner">
          <Typography sx={{ fontWeight: "600", fontSize: "25px" }}>
            Get Started with <span style={{ color: "#49AD50" }}>Fitbasix</span>
          </Typography>
          <div className="TextFieldContainer">
            <TextField
              placeholder="Enter Name"
              InputProps={{
                startAdornment: <PersonOutlineOutlinedIcon />,
              }}
              sx={{
                background: "rgba(255, 255, 255, 0.32)",
                borderRadius: "10px",

                width: "100%",
              }}
            />
            <TextField
              placeholder="Email id"
              InputProps={{
                startAdornment: <MailOutlinedIcon />,
              }}
              sx={{
                background: "rgba(255, 255, 255, 0.32)",
                borderRadius: "10px",
                marginTop: "1rem",
                width: "100%",
              }}
            />
            <TextField
              placeholder="Enter Mobile no."
              InputProps={{
                startAdornment: <PhoneIphoneRoundedIcon />,
              }}
              sx={{
                background: "rgba(255, 255, 255, 0.32)",
                borderRadius: "10px",
                marginTop: "1rem",
                width: "100%",
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#49AD50",
                width: "100%",
                borderRadius: "10px",
                marginTop: "1rem",
              }}
            >
              Get a FREE TRIAL!
            </Button>
          </div>
        </Grid>
        <Grid item md={6}>
          <Grid container>
            <Grid item md={6} xs={12} className="GridImage--Conatiner">
              {" "}
              <img src={Mobiles} className="MobileImage" />
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid container>
                <Grid item md={12} xs={12} className="GridButtons--Conatiner">
                  {" "}
                  <ButtonsContainer direction="column">
                    <AppStoreButton url={iOSUrl} theme={"dark"} />
                    <GooglePlayButton url={APKUrl} theme={"dark"} />
                  </ButtonsContainer>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default GetStarted;
