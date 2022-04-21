import { styled } from "../../../stitches.config";

export const BmiSectionComponent = styled("section", {
  gridArea: "bmiSection",
  color: "$lapisLazulli",
  padding: "1vw",
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
    width: "70%",
    padding: "1.2vw",
    backgroundColor: "$blueMunsell",
    color: "$ivory",
    borderRadius: "20px",
    textAlign: "justify",

    span: {
      marginRight: "10px",
    },

    "@min1440px": {
      borderRadius: "1vw",
    },

    "@max1024px": {
      width: "100%",
    },

    "@max768px": {
      padding: "15px",
      textAlign: "left",
    },
  },

  "@min1440px": {
    fontSize: "1.1vw",
  },

  "@max768px": {
    padding: "15px",
  },
});
