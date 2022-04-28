import { styled } from "../../../stitches.config";

export const BmiSectionComponent = styled("section", {
  gridArea: "bmiSection",
  color: "$lapisLazulli",
  padding: "1vw",
  alignSelf: "center",
  flexUtil: {
    fFlow: "column",
    fAlignItems: "flex-start",
    fJustifyContent: "center",
  },
  gap: "3vh",

  h2: {
    fontFamily: "'Comfortaa', cursive",
    borderLeft: "2px solid",
    padding: "10px",
  },

  h1: {
    textAlign: "center",
    fontFamily: "'Comfortaa', cursive",
    width: "50%",
    color: "$blueMunsell",
    fontSize: "5em",
    fontWeight: "400",
  },

  ".bmi-warning": {
    cursor: "pointer",
    padding: "1.2vw",
    backgroundColor: "$blueMunsell",
    color: "$ivory",
    borderRadius: "20px",
    textAlign: "justify",
    "-webkit-hyphens": "auto",
    "-moz-hyphens": "auto",
    "-ms-hyphens": "auto",
    hyphens: "auto",
    transition: "all .3s",

    span: {
      transition: ".3s",

      "&:hover": {
        opacity: "0.8",
      },
    },

    "&.unchecked": {
      backgroundColor: "transparent",
      color: "$blueMunsell",
      padding: "0",

      span: {
        marginRight: 0,
      },
    },

    "@min1440px": {
      borderRadius: "1vw",
    },

    "@max1024px": {
      width: "100%",
    },

    "@max768px": {
      width: "100%",
      padding: "15px",
      textAlign: "left",
      "-webkit-hyphens": "none",
      "-moz-hyphens": "none",
      "-ms-hyphens": "none",
      hyphens: "none",
    },
  },

  "@min1440px": {
    fontSize: "1.1vw",
  },

  "@max768px": {
    padding: "15px",
  },
});
