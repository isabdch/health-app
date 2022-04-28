import { styled } from "../../stitches.config";

export const Page404Container = styled("section", {
  width: "100%",
  height: "100%",
  flexUtil: {
    fFlow: "column",
    fAlignItems: "center",
    fJustifyContent: "center",
  },

  h1: {
    fontFamily: "'Comfortaa', cursive",
    fontSize: "2em",
    color: "$lapisLazulli",
    textAlign: "center",
    padding: "10px",

    "@max768px": {
      fontSize: "1.5em",
    },
  },

  "h1:last-child": {
    fontWeight: "300",
  },

  "@min1440px": {
    fontSize: "1vw",
  },
});
