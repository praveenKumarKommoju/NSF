"use client";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

const PrimaryButton = (props) => {
  const { name, handleClick } = props;
  const router = useRouter();

  const onClick = () => {
    if (typeof handleClick === "function") {
      handleClick();
    } else {
      router.push("/donate");
    }
  };

  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: "#dc2626",
        color: "white",
        "&:hover": {
          backgroundColor: "#cc0000",
        },
      }}
      className="px-5 py-2 rounded-md font-medium"
    >
      {name || "Donate Now"}
    </Button>
  );
};

export default PrimaryButton;
