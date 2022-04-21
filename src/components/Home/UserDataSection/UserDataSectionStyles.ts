import { styled } from "../../../stitches.config";

export const UserDataSectionComponent = styled("section", {
  gridArea: "userDataSection",
  padding: "1vw",
  flexUtil: {
    fFlow: "row",
    fAlignItems: "flex-start",
    fJustifyContent: "flex-end",
  },

  ".user-data-container": {
    width: "100%",
    height: "100%",
    backgroundColor: "$celadon",
    color: "$cgBlue",
    // border: "4px solid $keppel",
    borderRadius: "20px",
    padding: "1vw",
    flexUtil: {
      fFlow: "column",
      fAlignItems: "center",
      fJustifyContent: "space-between",
    },

    h1: {
      fontFamily: "'Comfortaa', cursive",
    },

    ".user-data-content": {
      width: "30%",
      flexUtil: {
        fFlow: "column",
        fAlignItems: "center",
        fJustifyContent: "center",
      },
      gap: "10px",

      ".user-data": {
        textAlign: "center",

        span: {
          color: "$keppel",
        },
      },
    },

    ".update-user-data-btn": {
      backgroundColor: "$keppel",
      color: "$ivory",
      padding: "10px 36px",
      borderRadius: "8px",
      transition: ".2s",
      outline: "none",

      "&:hover": {
        opacity: "0.85",
      },

      "&:focus": {
        boxShadow: "0 0 0 1px $keppel",
      },

      "@min1440px": {
        padding: "0.7vw 2.5vw",
      },
    },

    "@max768px": {
      padding: "10px",
    },
  },

  "@min1440px": {
    borderRadius: "1vw",
  },

  "@max768px": {
    padding: "15px",
  },
});
