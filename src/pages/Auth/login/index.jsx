import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import logoimg from "../../../assets/images/logo.png";
import "./login.css";
import mainimg from "../../../assets/images/side-img.png";
import fullimg from "../../../assets/images/voi 1.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
const Loginindex = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <>
      <div className="corner-img">
        <img src={mainimg} alt="corner-img" />
      </div>
      <div className="logoplacing">
        <img src={logoimg} alt="logo" />
      </div>

      <Grid container direction="row">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <p className="">Lorem ipsum dolor sit amet, con</p>
            <img src={fullimg} alt="mainimg" />
          </Grid>

          <Grid direction="column">
            <Card sx={{ minWidth: 500 }}>
              <CardContent>
                <Grid container direction={"column"} spacing={2}>
                  <Grid>
                    <Typography
                      variant="h6"
                      className="fontweight"
                      component="div"
                    >
                      Sign in
                    </Typography>
                  </Grid>
                  <Grid>
                    <TextField
                      id="password"
                      className="textfield"
                      label="Enter Email or Phonenumber"
                      type="password"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: false,
                      }}
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      id="password"
                      className="textfield"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: false,
                      }}
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </IconButton>
                        ),
                      }}
                    />
                  </Grid>
                  <Typography
                    variant="caption"
                    display="block"
                    textAlign="right"
                    gutterBottom
                    style={{ padding: "0 12px" }}
                  >
                    Recover Password ?
                  </Typography>
                  <Grid>
                    <Button
                      variant="contained"
                      size="large"
                      className="btnwidth"
                    >
                      Sign in
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Typography className="footer">Colan Infotech © 2024</Typography>
      </Grid>
    </>
  );
};
export default Loginindex;
