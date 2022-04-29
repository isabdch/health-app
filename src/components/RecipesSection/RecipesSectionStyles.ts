import { styled } from "../../stitches.config";

export const RecipesSectionMain = styled("main", {
  width: "100%",
  height: "100vh",
  background: `url(${process.env.PUBLIC_URL}/assets/background.svg) no-repeat right top`,
  backgroundSize: "52%",
  display: "grid",
  gridTemplateAreas: "'mainSection' 'mainSection' 'suggestionsSection'",
  alignItems: "end",
  position: "sticky",
  overflowY: "auto",
  top: 0,
  gap: "30px",

  ".search-recipes-container": {
    gridArea: "mainSection",
    flexUtil: {
      fFlow: "column",
      fAlignItems: "center",
    },
    gap: "20px",
    paddingTop: "5vw",
    color: "$sinopia",
    transition: ".2s",

    ".search-section": {
      width: "100%",
      flexUtil: {
        fFlow: "column",
        fAlignItems: "flex-start",
      },
      gap: "10px",
      paddingLeft: "15px",

      ".search-title": {
        fontFamily: "'Comfortaa', cursive",
        fontSize: "2em",
      },

      p: {
        marginLeft: "2px",
        fontSize: "1.1em",
      },

      form: {
        width: "50%",
        flexUtil: {
          fFlow: "row",
          fJustifyContent: "flex-start",
        },

        input: {
          padding: "8px 15px",
          width: "100%",
          backgroundColor: "$ivory",
          color: "$sinopia",
          border: "2px solid $terraCota",
          borderRight: "none",
          borderTopLeftRadius: "9999px",
          borderBottomLeftRadius: "9999px",
          outline: "none",
          fontSize: "1.1em",
        },

        button: {
          padding: "8px 20px",
          backgroundColor: "$terraCota",
          color: "$ivory",
          border: "2px solid $terraCota",
          borderLeft: "none",
          borderTopRightRadius: "9999px",
          borderBottomRightRadius: "9999px",
          fontSize: "1.2em",
          transition: ".2s",

          "&:hover": {
            opacity: "0.9",
          },
        },

        "@max1024px": {
          width: "75%",
        },

        "@max425px": {
          width: "95%",
        },
      },

      "@max720px": {
        flexUtil: {
          fFlow: "column",
          fAlignItems: "center",
        },
        paddingLeft: "0px",
        textAlign: "center",
      },

      "@max768px": {
        fontSize: "0.8em",
        paddingTop: "2vh",
      },
    },

    ".recipes-section": {
      width: "100%",
      flexUtil: {
        fFlow: "row wrap",
        fAlignItems: "center",
        fJustifyContent: "flex-start",
      },

      div: {
        margin: "15px",
        width: "200px",
        height: "150px",
        borderRadius: "10px",
        position: "relative",
        boxShadow: "1px 1px 10px $beige",
        flexUtil: {
          fJustifyContent: "center",
          fAlignItems: "center",
        },
        overflow: "hidden",
        transition: ".2s",

        "&:hover": {
          opacity: 0.9,
        },

        img: {
          flexShrink: 0,
          minWidth: "100%",
          minHeight: "100%",
        },

        h1: {
          width: "100%",
          backgroundColor: "$ivory",
          fontFamily: "'Comfortaa', cursive",
          textAlign: "center",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          padding: "5px 0px",
          opacity: 0.9,
          fontSize: "1.2em",
        },

        "@min1440px": {
          width: "18vw",
          height: "12vw",
          paddingBottom: "1vw",
          borderRadius: "0.8vw",
        },
      },

      "@min1440px": {
        gap: "1vw",
      },

      "@max720px": {
        flexUtil: {
          fFlow: "row wrap",
          fAlignItems: "center",
          fJustifyContent: "center",
        },
      },
    },

    "@min1440px": {
      gap: "3vw",
    },
  },

  ".suggestions-section": {
    color: "$sinopia",
    gridArea: "suggestionsSection",
    width: "100%",
    flexUtil: {
      fFlow: "column",
      fAlignItems: "flex-start",
    },

    h2: {
      paddingLeft: "15px",
      fontFamily: "'Comfortaa', cursive",

      "@max720px": {
        paddingLeft: "0px",
      },
    },

    ".suggestions": {
      width: "100%",
      flexUtil: {
        fFlow: "row wrap",
        fAlignItems: "center",
        fJustifyContent: "flex-start",
      },

      div: {
        margin: "15px",
        width: "200px",
        height: "150px",
        borderRadius: "10px",
        position: "relative",
        boxShadow: "1px 1px 10px $beige",
        flexUtil: {
          fJustifyContent: "center",
          fAlignItems: "center",
        },
        overflow: "hidden",
        transition: ".2s",

        "&:hover": {
          opacity: 0.9,
        },

        img: {
          flexShrink: 0,
          minWidth: "100%",
          minHeight: "100%",
        },

        h1: {
          width: "100%",
          backgroundColor: "$ivory",
          fontFamily: "'Comfortaa', cursive",
          textAlign: "center",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          padding: "5px 0px",
          opacity: 0.9,
          fontSize: "1.2em",
        },

        "@min1440px": {
          width: "18vw",
          height: "12vw",
          paddingBottom: "1vw",
          borderRadius: "0.8vw",
        },
      },

      "@min1440px": {
        gap: "1vw",
      },

      "@max720px": {
        flexUtil: {
          fFlow: "row wrap",
          fAlignItems: "center",
          fJustifyContent: "center",
        },
      },
    },

    "@min1440px": {
      gap: "0.6vw",
    },

    "@max720px": {
      flexUtil: {
        fFlow: "column",
        fAlignItems: "center",
      },
      textAlign: "center",
      fontSize: "0.9em",
    },
  },

  "@min1440px": {
    fontSize: "1vw",
  },

  "@max768px": {
    backgroundSize: "60%",
    alignItems: "center",
  },

  "@max425px": {
    background: "none",
  },
});
