import { styled } from "../../stitches.config";

export const HeaderComponent = styled("header", {
  width: "auto",
  height: "100vh",
  position: "sticky",
  top: 0,
  flexUtil: {
    fFlow: "column",
    fJustifyContent: "center",
    fAlignItems: "flex-start",
  },

  ".logo": {
    padding: "20px",
    flexUtil: {
      fFlow: "row",
      fJustifyContent: "center",
      fAlignItems: "center",
    },
    gap: "5px",

    h1: {
      textAlign: "center",
      fontSize: "1.8em",
      color: "$lapisLazulli",
      fontFamily: "'Comfortaa', cursive",

      "&.recipes-section-title": {
        color: "$sinopia",
      },

      "@max720px": {
        display: "none",
      },
    },

    "@max768px": {
      padding: "10px",
    },
  },

  ".buttons": {
    marginTop: "auto",
    marginBottom: "auto",
    flexUtil: {
      fFlow: "column",
    },

    button: {
      margin: "30px 10px",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      background: "transparent",
      fontSize: "1.5rem",
      transition: ".1s",
      alignSelf: "flex-start",
      outline: "none",

      "&:hover": {
        opacity: "0.85",
      },

      "@min1440px": {
        margin: "30px 20px",
        width: "3.5vw",
        height: "3.5vw",
        fontSize: "1.6vw",
      },

      "@max720px": {
        width: "40px",
        height: "40px",
        fontSize: "1.2rem",
      },
    },

    ".fitness-section-btn": {
      color: "$lapisLazulli",

      "&.checked": {
        border: "2px solid",
      },
    },

    ".food-section-btn": {
      color: "$terraCota",

      "&.checked": {
        border: "2px solid",
      },
    },
  },

  ".credits": {
    position: "absolute",
    bottom: 0,
    margin: "5px 10px",
    fontSize: "0.8em",
    color: "#bcbcbc",
    transition: ".2s",

    "&:hover": {
      transform: "scale(1.1)",
      filter: "brightness(0.8)",
    },

    "@max720px": {
      fontSize: "0.5em",
      margin: "5px",
    },
  },

  "@min1440px": {
    fontSize: "1vw",
  },
});
