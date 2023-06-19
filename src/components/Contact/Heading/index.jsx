import { Link, useNavigate } from "react-router-dom";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
// import styles from "../Assets/styles/weather.module.scss";
// import { ColorModeContext } from "../Theme/Provider";
import React from "react";

export const Heading = ({ heading, children, route }) => {
//   const { theme } = React.useContext(ColorModeContext);

  const navigate = useNavigate();
  return (
    <h4>
      <Link
        underline="none"
        // className={styles.backButton}
        // style={{
        //   color: theme?.palette?.text?.primary,
        // }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon />
        
      </Link>
      {heading} {children}
    </h4>
  );
};
