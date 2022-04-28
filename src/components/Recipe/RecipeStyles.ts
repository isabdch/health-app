import { styled } from "../../stitches.config";

export const RecipeSectionContainer = styled("section", {
  width: "100%",
  height: "100%",
  textAlign: "center",

  ".recipe-information-container": {
    color: "$sinopia",
    flexUtil: {
      fFlow: "column-reverse",
      fAlignItems: "center",
    },

    ".recipe-information-content": {
      flexUtil: {
        fFlow: "column",
        fAlignItems: "center",
      },

      "h1, h2": {
        paddingTop: "20px",
        fontFamily: "'Comfortaa', cursive",
      },

      h2: {
        fontSize: "1.2em",
      },

      ".recipe-info": {
        flexUtil: {
          fFlow: "column",
        },

        ".recipe-section-1": {
          padding: "5px",
          flexUtil: {
            fFlow: "column-reverse",
          },
          gap: "20px",

          ".ingredients": {
            flexUtil: {
              fFlow: "column",
              fAlignItems: "center",
              fJustifyContent: "flex-start",
            },
            gap: "5px",
          },

          ".general-info": {
            flexUtil: {
              fFlow: "column",
              fAlignItems: "center",
              fJustifyContent: "flex-start",
            },
            gap: "5px",
          },
        },

        ".recipe-section-2": {
          padding: "5px",
          flexUtil: {
            fFlow: "column",
          },
          gap: "20px",

          ".instructions": {
            flexUtil: {
              fFlow: "column",
              fAlignItems: "center",
              fJustifyContent: "flex-start",
            },
            gap: "5px",
          },

          ".nutritional-info": {
            flexUtil: {
              fFlow: "column",
              fAlignItems: "center",
              fJustifyContent: "flex-start",
            },
            gap: "5px",
          },
        },
      },
    },

    ".recipe-img": {
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      backgroundColor: "$sinopia",
      color: "$ivory",
      fontSize: "0.9em",

      img: {
        borderRadius: "inherit",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        width: "40%",
        backgroundColor: "white",

        "@max1024px": {
          width: "60%",
        },

        "@max768px": {
          width: "80%",
        },

        "@max550px": {
          width: "100%",
          borderRadius: "0px",
        },
      },
    },
  },

  "@min1440px": {
    fontSize: "1vw",
  },
});
