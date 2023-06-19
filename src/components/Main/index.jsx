import React from "react";
import { Link } from "react-router-dom";
// import {Container,Grid,Button,Link,} from '@mui/material'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import {
  ContactPhone as ContactPhoneIcon,
  StarPurple500,
  StarPurple500Sharp,
} from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { Cloud as CloudIcon } from "@mui/icons-material";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import InfoIcon from "@mui/icons-material/Info";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import FormsIcon from "@mui/icons-material/InsertDriveFile";
import Avatar from "@mui/material/Avatar";
import { blue, green, red, purple, yellow, grey } from "@mui/material/colors";
import "./index.css";
import { useSelector } from "react-redux";
import { ThemeSelector } from "./ThemeSelector";
import { SnackbarProvider, useSnackbar } from "notistack";
import { snackbar } from "./../AppBar/snackbar";

const Main = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <Container>
      <ThemeSelector></ThemeSelector>
      <SnackbarProvider
        maxSnack={5}
        transitionDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <snackbar />
      </SnackbarProvider>
      <Grid
        container
        rowSpacing={4}
        // paddingTop={{ xs: 8 }}
        margin="0"
        columnSpacing={{ xs: 1, sm: 1, md: 2 }}
        justifyItems="center"
        textAlign="center"
      >
        <Grid xs={6}>
          <Button>
            <Link
              id="contactApp"
              to="Contact"
              style={{ textDecoration: "none" }}
            >
              <IconButton aria-label="Contact">
                {" "}
                <Avatar
                  sx={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "22px",
                    bgcolor: purple[800],
                  }}
                  variant="rounded"
                >
                  <ContactPhoneIcon
                    sx={{ fontSize: "40px", whiteSpace: "pre-wrap" }}
                  />
                </Avatar>{" "}
              </IconButton>{" "}
            </Link>
          </Button>
          <InputLabel>Contact</InputLabel>
        </Grid>
        <Grid xs={6}>
          <Button>
            <Link to="SMS" style={{ textDecoration: "none" }}>
              <IconButton aria-label="SMS">
                {" "}
                <Avatar
                  sx={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "22px",
                    bgcolor: green[700],
                  }}
                  variant="rounded 2"
                >
                  <EmailIcon sx={{ fontSize: "40px", bgcolor: green[700] }} />{" "}
                </Avatar>
              </IconButton>
            </Link>
          </Button>
          <InputLabel>SMS</InputLabel>
        </Grid>
        <Grid xs={6}>
          <Button>
            <IconButton aria-label="Navigation">
              {" "}
              <Avatar
                sx={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "22px",
                  bgcolor: red[700],
                }}
                variant=""
              >
                <PlaceIcon sx={{ fontSize: "45px" }} />{" "}
              </Avatar>
            </IconButton>
          </Button>
          <InputLabel>Navigation</InputLabel>
        </Grid>
        <Grid xs={6}>
          <Button>
            <IconButton aria-label="Weather">
              {" "}
              <Avatar
                sx={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "22px",
                  fontSize: "70px",
                  bgcolor: blue[400],
                }}
                variant="rounded"
              >
                <CloudIcon sx={{ fontSize: "45px" }} />{" "}
              </Avatar>
            </IconButton>
          </Button>
          <InputLabel>Weather</InputLabel>
        </Grid>
        <Grid xs={6}>
          <Button>
            <IconButton aria-label="Avalanche">
              {" "}
              <Avatar
                sx={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "22px",
                  fontSize: "70px",
                  bgcolor: green[200],
                }}
                variant="rounded"
              >
                <SevereColdIcon sx={{ fontSize: "45px" }} />{" "}
              </Avatar>
            </IconButton>
          </Button>
          <InputLabel>Avalanche</InputLabel>
        </Grid>
        <Grid xs={6}>
          <Button>
            <IconButton aria-label="Information">
              {" "}
              <Avatar
                sx={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "22px",
                  fontSize: "70px",
                  bgcolor: yellow[900],
                }}
                variant="rounded"
              >
                <InfoIcon sx={{ fontSize: "45px" }} />{" "}
              </Avatar>
            </IconButton>
            {""}
          </Button>
          <InputLabel>Information</InputLabel>
        </Grid>
        <Grid xs={6}>
          <Button>
            <IconButton aria-label="Help">
              {" "}
              <Avatar
                sx={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "22px",
                  fontSize: "70px",
                  bgcolor: blue[900],
                }}
                variant="rounded"
              >
                <HelpCenterIcon sx={{ fontSize: "45px" }} />{" "}
              </Avatar>
            </IconButton>
          </Button>
          <InputLabel>Help</InputLabel>
        </Grid>
        <Grid xs={6}>
          <Button>
            <IconButton aria-label="Settings">
              {" "}
              <Avatar
                sx={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "22px",
                  fontSize: "70px",
                  bgcolor: grey[700],
                }}
                variant="rounded"
              >
                <SettingsIcon sx={{ fontSize: "45px" }} />{" "}
              </Avatar>
            </IconButton>
          </Button>
          <InputLabel>Settings</InputLabel>
        </Grid>
        <Grid xs={6}>
          <Button>
            <IconButton aria-label="Settings">
              {" "}
              <Avatar
                sx={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "22px",
                  fontSize: "70px",
                  bgcolor: green[500],
                }}
                variant="rounded"
              >
                <FormsIcon sx={{ fontSize: "45px" }} />{" "}
              </Avatar>
            </IconButton>
          </Button>
          <InputLabel>Forms</InputLabel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
