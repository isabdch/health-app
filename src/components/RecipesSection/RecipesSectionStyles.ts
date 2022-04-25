import { styled } from "../../stitches.config";

export const RecipesSectionMain = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  gridTemplateAreas: "'leftSection mainSection mainSection rightSection'",

  ".recipes-suggestions": {
    border: "1px solid",
    height: "100%",
  },

  ".section-1": {
    gridArea: "leftSection",
  },

  ".section-2": {
    gridArea: "rightSection",
  },

  ".search-recipes-container": {
    gridArea: "mainSection",
    flexUtil: {
      fFlow: "column",
      fAlignItems: "center",
    },
    gap: "20px",
    paddingTop: "20px",

    ".recipes-section": {
      flexUtil: {
        fFlow: "column",
        fAlignItems: "center",
      },

      div: {
        width: "400px",
        backgroundColor: "$terraCota",
        color: "$ivory",
        margin: "20px 0px",
        padding: "15px",
        borderRadius: "20px",
        flexUtil: {
          fFlow: "column",
          fAlignItems: "center",
          fJustifyContent: "center",
        },

        h1: {
          textAlign: "center",
          fontFamily: "'Comfortaa', cursive",
          margin: "10px 0px",

          "@min1440px": {
            margin: "0.7vw 0px",
          },
        },

        img: {
          width: "300px",
          border: "4px solid",
          borderRadius: "10px",
        },

        "@min1440px": {
          padding: "1vw",
          borderRadius: "1vw",
        },
      },
    },

    "@min1440px": {
      gap: "1vw",
    },
  },
});
