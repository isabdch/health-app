import { styled } from "../../stitches.config";

export const HeaderComponent = styled("header", {
  width: "auto",
  height: "100vh",
  position: "fixed",
  flexUtil: {
    fFlow: "column",
    fJustifyContent: "center",
    fAlignItems: "center",
  },

  button: {
    margin: "30px 20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "transparent",
    fontSize: "1.5rem",
    transition: ".2s",

    "&:hover": {
      filter: "contrast(20)",
    },

    "&.checked": {
      border: "2px solid",
    },
  },

  ".fitness-section-btn": {
    color: "$fitnessIconColor",
  },

  ".food-section-btn": {
    color: "$foodIconColor",
  },
});
