"use client";
import Button from "@mui/material/Button";

const SecondaryButton = (props) => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderColor: "#dc2626",
        color: "#dc2626",
        "&:hover": {
          backgroundColor: "#cc0000",
          borderColor: "darkred",
        },
      }}
      className="px-5 py-2 rounded-md font-medium"
    >
      {props.name}
    </Button>
  );
};

export default SecondaryButton;
