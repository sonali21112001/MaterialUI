import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Heading } from "../Heading";
// import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
// import { styled } from "@mui/material/styles";
// import Fab from "@mui/material/Fab";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FormControlLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import InputAdornment from "@mui/material/InputAdornment";
import {CreditScore as CreditScoreIcon} from "@mui/icons-material";
import {AdUnits as AdUnitsIcon} from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotesIcon from "@mui/icons-material/Notes";
import PersonIcon from "@mui/icons-material/Person";
import Stack from '@mui/material/Stack';



const paperstyle = {
  padding: 20,
  height: "80vh",
  width: 400,
  margin: "25px auto",
};

const Avatarstyle = { backgroundColor: "#98208b", fontsize: "60px" };

const AddContact = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: "50px" }}>
        <Typography>
          <Heading />
        </Typography>
        <Grid>
          <form>
            <Paper elevation={11} style={paperstyle}>
              <Grid align="center">
                <Avatar style={Avatarstyle}>
                  <ImportContactsIcon />
                </Avatar>
              </Grid>
               <Grid
               style={{margin: "0px auto 30px"}}></Grid>
              <TextField
                placeholder="First Name*"
                variant="standard"
                name=""
                // onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
               <Grid
               style={{margin: "0px auto 30px"}}></Grid>
              <TextField
                placeholder="Last Name*"
                variant="standard"
                name=""
                // onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
               <Grid
               style={{margin: "0px auto 30px"}}></Grid>
              <TextField
                placeholder="Terminal Id*"
                variant="standard"
                name=""
                // onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreditScoreIcon />
                    </InputAdornment>
                  ),
                }}
              />
               <Grid
               style={{margin: "0px auto 30px"}}></Grid>
              <TextField
                placeholder="UnitName*"
                variant="standard"
                name=""
                // onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AdUnitsIcon />
                    </InputAdornment>
                  ),
                }}
              />
               <Grid
               style={{margin: "0px auto 30px"}}></Grid>
              <TextField
                placeholder="Area*"
                variant="standard"
                name=""
                // onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
              />
               <Grid
               style={{margin: "0px auto 30px"}}></Grid>
              <TextField
                placeholder="Notes*"
                variant="standard"
                name=""
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <NotesIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Grid
               style={{margin: "0px auto 40px"}}></Grid> 
              <Stack  spacing={6} direction="row">
              <Button variant="outlined">cancel</Button>
              <Button variant="outlined">submit</Button>
              </Stack>
      
            </Paper>
          </form>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default AddContact;
