import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import {
  AppStoreButton,
  ButtonsContainer,
  GooglePlayButton,
} from "react-mobile-app-button";
import Mobiles from "../../assets/Mobiles.png";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { postDialog } from "../../api/services";
import { useState } from "react";
import { Card } from "antd";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Booking = () => {
  const [labelWidth, setLabelWidth] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  //Search Params String
  const [searchParams, setSearchParams] = useState(window.location.search);
  const onSubmit = async (data) => {
    console.log(data, "dataa");
    data.formType = "FreeTrial";

    const response = await postDialog(data, searchParams);

    if (response?.resStr == "success") {
      navigate("/thankyou");
    } else {
      navigate("/error");
    }
  };

  return (
    <form id="getStarted" onSubmit={handleSubmit(onSubmit)}>
      <div className="BookContainer">
        <Grid container className="gridContainer">
          <Grid item xs={12} sm={8} md={8}>
            <Container className="booking_container">
              <Typography className="form_heading">
                <span className="text-black">BOOK YOUR</span>
                <br /> FIRST SESSION
              </Typography>
              <Card>
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={12} md={6}>
                    <TextField
                      id="name"
                      placeholder="First Name"
                      required
                      sx={{
                        border: "1px solid #49AD50",
                        borderRadius: "10px",
                        backgroundColor: "#F0F0F0",
                        width: "100%",
                        input: {
                          "&::placeholder": {
                            color: "#0E0F13",
                            opacity: 1,
                          },
                        },
                      }}
                      {...register("firstName")}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12} md={6}>
                    <TextField
                      id="name"
                      placeholder="Last Name"
                      required
                      sx={{
                        border: "1px solid #49AD50",
                        borderRadius: "10px",
                        backgroundColor: "#F0F0F0",
                        width: "100%",
                        input: {
                          "&::placeholder": {
                            color: "#0E0F13",
                            opacity: 1,
                          },
                        },
                      }}
                      {...register("lastName")}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12} md={6}>
                    <TextField
                      id="mobileNo"
                      required
                      placeholder="Mobile"
                      sx={{
                        border: "1px solid #49AD50",
                        borderRadius: "10px",
                        backgroundColor: "#F0F0F0",
                        width: "100%",
                        input: {
                          "&::placeholder": {
                            color: "#0E0F13",
                            opacity: 1,
                          },
                        },
                      }}
                      {...register("number")}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12} md={6}>
                    <TextField
                      id="email"
                      placeholder="Email id"
                      sx={{
                        border: "1px solid #49AD50",
                        borderRadius: "10px",
                        backgroundColor: "#F0F0F0",
                        width: "100%",
                        input: {
                          "&::placeholder": {
                            color: "#0E0F13",
                            opacity: 1,
                          },
                        },
                      }}
                      {...register("email")}
                    />
                  </Grid>

                  <Grid item sm={6} xs={12} md={6}>
                    <Select
                      displayEmpty={true}
                      sx={{
                        border: "1px solid #49AD50",
                        borderRadius: "10px",
                        backgroundColor: "#F0F0F0",
                        width: "100%",
                      }}
                      {...register("timeSlot")}
                    >
                      <MenuItem disabled>
                        Preferred Time Slot for Callback
                      </MenuItem>
                      <MenuItem value={"Morning"}>Morning</MenuItem>
                      <MenuItem value={"Afternoon"}>Afternoon</MenuItem>
                      <MenuItem value={"Evening"}>Evening</MenuItem>
                      <MenuItem value={"Night"}>Night</MenuItem>
                    </Select>
                  </Grid>
                  <Grid
                    justifyContent="center"
                    container
                    item
                    sm={6}
                    xs={12}
                    md={6}
                  >
                    {/* <Select
                      displayEmpty={true}
                      // className="textFieldMobile"
                      sx={{
                        border: "1px solid #49AD50",
                        borderRadius: "10px",
                        width: "100%",
                      }}
                      {...register("workOutType")}
                    >
                      <MenuItem disabled>Types of plan</MenuItem>
                      <MenuItem value={"Personal"}>Personal</MenuItem>
                      <MenuItem value={"Yoga"}>Yoga</MenuItem>
                      <MenuItem value={"Diet"}>Diet</MenuItem>
                    </Select> */}
                    <Button type="submit" className="bookSubmit">
                      Submit
                    </Button>
                  </Grid>
                  {/* <Grid
                    item
                    sm={12}
                    xs={12}
                    md={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button type="submit" className="bookSubmit">
                      Submit
                    </Button>
                  </Grid> */}
                </Grid>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default Booking;
