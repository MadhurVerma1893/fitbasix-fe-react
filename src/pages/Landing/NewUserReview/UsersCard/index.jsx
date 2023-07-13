import { Grid, Typography } from "@mui/material";
import React from "react";
import "./styles.css";
import upInverted from "../../../../assets/upinverted.png";
import downInverted from "../../../../assets/downinverted.png";
const NewUsersCard = ({ data, dataIndex }) => {
  return (
    <div className="user-div">
      <div className="content-div">
        <div className="content-content">
          <div className="img-div">
            <img src={data[dataIndex].logo} alt="" style={{ width: "3rem" }} />
          </div>
          <div className="content-name">
            <p style={{ fontWeight: "bold" }}>{data[dataIndex].name}</p>
          </div>
          {/* <div className="col-div1">
            <img src={upInverted} alt="" style={{ width: "2rem" }} />
          </div>
          <div className="col-div2">
            <img src={downInverted} alt="" style={{ width: "2rem" }} />
          </div> */}
          <p className="content-para">
            {data[dataIndex].content.length > 140
              ? data[dataIndex].content.slice(0, 140) + "..."
              : data[dataIndex].content}
          </p>
        </div>
      </div>
    </div>
    // <div className="UsersCard--Container">

    //   <Grid container sx={{ position: "relative", padding: "3rem" }}>
    //     <div style={{ position: "absolute", top: "-1rem", left: "-1rem" }}>
    //       <img src={data[dataIndex].logo} alt="" style={{ width: "5rem" }} />
    //     </div>

    //     <Grid item xs={12} md={12}>
    //       <Grid container sx={{ paddingLeft: "0.5rem" }}>
    //         <Grid item xs={12} md={12} className="userCardStyle">
    //           <Typography sx={{ color: "#FFFFFF" }}>{data[dataIndex].content}</Typography>
    //         </Grid>
    //         <Grid item xs={12} md={12} sx={{ marginTop: "1rem" }}>
    //           <div>
    //             <Typography sx={{ color: "black" }}>{data[dataIndex].name}</Typography>
    //             <Typography sx={{ fontSize: "12px" }}> {data[dataIndex].service}</Typography>
    //           </div>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </div>
  );
};

export default NewUsersCard;
