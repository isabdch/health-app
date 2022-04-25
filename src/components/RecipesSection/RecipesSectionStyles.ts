import { styled } from "../../stitches.config";

export const RecipesSectionMain = styled("main", {
  width: "100%",
  height: "100vh",
  background: "url(/assets/image.svg) no-repeat right top",
  backgroundSize: "60%",
  display: "grid",
  gridTemplateAreas: "'mainSection mainSection leftSection'",
  alignItems: "center",
  position: "sticky",
  overflowY: "auto",
  top: 0,

  ".search-recipes-container": {
    gridArea: "mainSection",
    flexUtil: {
      fFlow: "column",
      fAlignItems: "center",
    },
    gap: "20px",
    color: "$sinopia",
    transition: ".2s",

    ".search-title": {
      width: "100%",
      paddingTop: "5vh",
      paddingLeft: "7vw",
      fontFamily: "'Comfortaa', cursive",
      fontSize: "2em",
    },

    form: {
      width: "100%",
      paddingLeft: "7vw",
      flexUtil: {
        fFlow: "row",
        fJustifyContent: "flex-start",
      },

      input: {
        width: "30vw",
        padding: "15px",
        minWidth: "300px",
        color: "$terraCota",
        border: "2px solid $terraCota",
        borderRight: "none",
        borderTopLeftRadius: "9999px",
        borderBottomLeftRadius: "9999px",
        outline: "none",
        backgroundColor: "white",
        fontSize: "1.1em",
      },

      button: {
        padding: "15px 30px",
        backgroundColor: "$terraCota",
        color: "$ivory",
        border: "2px solid $terraCota",
        borderLeft: "none",
        borderTopRightRadius: "9999px",
        borderBottomRightRadius: "9999px",
        fontSize: "1em",
        transition: ".2s",

        "&:hover": {
          opacity: "0.9",
        },
      },
    },

    ".recipes-section": {
      width: "100%",
      flexUtil: {
        fFlow: "row wrap",
        fAlignItems: "center",
        fJustifyContent: "center",
      },
      gap: "5px",

      div: {
        width: "23vw",
        height: "23vw",
        margin: "30px",
        padding: "15px",
        transition: ".2s",
        color: "$sinopia",
        flexUtil: {
          fFlow: "column",
          fAlignItems: "center",
          fJustifyContent: "flex-start",
        },
        gap: "10px",

        "&:hover": {
          opacity: "0.9",
        },

        h1: {
          textAlign: "center",
          fontFamily: "'Comfortaa', cursive",
          backgroundColor: "$ivory",
          borderRadius: "20px",
        },

        hr: {
          border: "2px solid",
          width: "50%",
          borderRadius: "9999px",
        },

        img: {
          width: "18vw",
          height: "18vw",
          border: "4px solid $sinopia",
          borderRadius: "50%",
        },

        "@min1440px": {
          padding: "1vw",
        },
      },
    },

    "@min1440px": {
      gap: "1vw",
    },
  },

  "@min1440px": {
    fontSize: "1vw",
  },
});
