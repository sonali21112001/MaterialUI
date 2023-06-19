import React from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const snackbar = () => {
  const handleClose = () => {
    enqueueSnackbar("That was easy!");
  };

  return (
    <div>
      <SnackbarProvider />
      <button
        onClick={handleClose}     
      >
        *
      </button>
    </div>
  );
};

export default snackbar;
