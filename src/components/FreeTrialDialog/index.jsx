import CloseIcon from "@mui/icons-material/Close";
import { Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postDialog } from "../../api/services";
import "./styles.css";
import { useState } from "react";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ mr: 2, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function FreeTrialDialog({
  open,
  setOpen,

  title,
}) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  //Search Params String
  const [searchParams, setSearchParams] = useState(window.location.search);

  const onSubmit = async (data) => {
    data.formType = "FreeTrial";

    const response = await postDialog(data, searchParams);

    if (response?.resStr == "success") {
      navigate("/thankyou");
      setOpen(false);
    } else {
      navigate("/error");
    }
  };
  const handleClose = (e, reason) => {
    if (reason && reason == "backdropClick") return;

    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {title}
        </BootstrapDialogTitle>
        <form id="getFreeTrail" onSubmit={handleSubmit(onSubmit)}>
          <DialogContent dividers>
            {" "}
            <Grid container>
              <Grid item md={12}>
                <Grid container spacing={3}>
                  <Grid item md={12} xs={9}>
                    <TextField
                      id="name"
                      className="textFieldMobile"
                      label="Name"
                      variant="outlined"
                      style={{ width: "80%", borderRadius: "40px" }}
                      required
                      {...register("name")}
                    />
                  </Grid>

                  <Grid item md={12} xs={9}>
                    <TextField
                      className="textFieldMobile"
                      id="mobileNo"
                      label="Mobile no."
                      required
                      variant="outlined"
                      style={{ width: "80%", borderRadius: "40px" }}
                      {...register("number")}
                    />
                  </Grid>

                  <Grid item md={12} xs={9}>
                    <TextField
                      id="email"
                      type="email"
                      className="textFieldMobile"
                      label="Email-Id"
                      style={{ width: "80%", borderRadius: "40px" }}
                      variant="outlined"
                      {...register("email")}
                    />
                  </Grid>

                  <Grid item md={12} xs={11}>
                    <TextField
                      label={`Types of plan`}
                      select
                      // size={small}
                      style={{ width: "80%", borderRadius: "40px" }}
                      size="large"
                      fullWidth
                      {...register("workOutType")}
                    >
                      <MenuItem value={"Personal"}>Personal</MenuItem>
                      <MenuItem value={"Yoga"}>Yoga</MenuItem>
                      <MenuItem value={"Diet"}>Diet</MenuItem>
                    </TextField>
                    {/* <InputLabel>Types of plan</InputLabel>
                    <Select
                      displayEmpty={true}
                      className="textFieldMobile"
                      label="workOutType"
                      style={{
                        width: "80%",
                        color: "#111",
                        backgroundColor: "#fff",
                       
                      }}
                      {...register("workOutType")}
                    >
                      <MenuItem disabled>Types of plan</MenuItem>
                      <MenuItem value={"Personal"}>Personal</MenuItem>
                      <MenuItem value={"Yoga"}>Yoga</MenuItem>
                      <MenuItem value={"Diet"}>Diet</MenuItem>
                    </Select> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              type="submit"
              sx={{
                backgroundColor: "#49AD50",
                color: "#fff",
                marginRight: "1rem",
                width: "160px",
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}
