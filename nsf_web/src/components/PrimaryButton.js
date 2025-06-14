"use client";
import Button from "@mui/material/Button";

const PrimaryButton = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#dc2626",
        color: "white",
        "&:hover": {
          backgroundColor: "#cc0000",
        },
      }}
      className="px-5 py-2 rounded-md font-medium"
    >
      {props?.name || "Donate Now"}
    </Button>
  );
};

export default PrimaryButton;
