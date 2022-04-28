import { styled } from "../../../stitches.config";

export const UserDataSectionComponent = styled("section", {
  gridArea: "userDataSection",
  padding: "1vw 2vw",
  alignSelf: "center",
  flexUtil: {
    fFlow: "row",
    fAlignItems: "flex-start",
    fJustifyContent: "flex-end",
  },
  height: "100%",

  ".user-data-container": {
    width: "200px",
    height: "max-content",
    backgroundColor: "$celadon",
    color: "$cgBlue",
    border: "4px solid $keppel",
    borderRadius: "20px",
    padding: "1vw 3vw",
    flexUtil: {
      fFlow: "column",
      fAlignItems: "center",
      fJustifyContent: "space-between",
    },
    gap: "2vh",

    ".user-data-content": {
      margin: "auto",
      width: "30%",
      flexUtil: {
        fFlow: "column",
        fAlignItems: "center",
        fJustifyContent: "center",
      },
      gap: "2vh",

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
        fontSize: "1vw",
      },
    },

    "@min1440px": {
      width: "max-content",
    },

    "@max768px": {
      padding: "10px",
    },
  },

  "@min1440px": {
    fontSize: "1.2vw",
  },

  "@max768px": {
    padding: "15px",
  },

  "@max425px": {
    flexUtil: {
      fFlow: "row",
      fAlignItems: "flex-start",
      fJustifyContent: "center",
    },
  },
});
