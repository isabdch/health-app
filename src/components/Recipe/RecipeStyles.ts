import { styled } from "../../stitches.config";

export const RecipeSectionContainer = styled("section", {
  width: "100%",
  height: "100%",
  textAlign: "center",

  ".recipe-information-container": {
    height: "100%",
    gridArea: "recipeInfoSection",
    flexUtil: {
      fFlow: "row",
      fAlignItems: "start",
    },
    color: "$sinopia",
    gap: "20px",

    ".recipe-information-content": {
      width: "60%",
      height: "100%",
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
        width: "100%",
        height: "100%",
        flexUtil: {
          fFlow: "row",
        },

        ".recipe-section-1": {
          width: "50%",
          height: "100%",
          padding: "5px",
          flexUtil: {
            fFlow: "column-reverse",
          },
          gap: "20px",

          ".ingredients": {
            height: "50%",
            flexUtil: {
              fFlow: "column",
              fAlignItems: "flex-start",
              fJustifyContent: "center",
            },
            gap: "5px",

            ul: {
              textAlign: "left",
            },
          },

          ".general-info": {
            height: "50%",
            flexUtil: {
              fFlow: "column",
              fAlignItems: "flex-start",
              fJustifyContent: "center",
            },
            gap: "5px",

            ul: {
              textAlign: "left",
            },
          },

          "@max768px": {
            width: "100%",
          },
        },

        ".recipe-section-2": {
          width: "50%",
          height: "100%",
          padding: "5px",
          flexUtil: {
            fFlow: "column-reverse",
          },
          gap: "20px",

          ".instructions": {
            height: "50%",
            flexUtil: {
              fFlow: "column",
              fAlignItems: "flex-start",
              fJustifyContent: "center",
            },
            gap: "5px",

            p: {
              textAlign: "left",
            },
          },

          ".nutritional-info": {
            height: "50%",
            flexUtil: {
              fFlow: "column",
              fAlignItems: "flex-start",
              fJustifyContent: "center",
            },
            gap: "5px",

            ul: {
              textAlign: "left",
            },
          },

          "@max768px": {
            width: "100%",
          },
        },

        "@max768px": {
          flexUtil: {
            fFlow: "column",
          },
          gap: "50px",
        },
      },

      "@max1024px": {
        width: "100%",
      },
    },

    ".recipe-img": {
      width: "40%",
      height: "100%",

      img: {
        border: "4px solid",
        borderRadius: "15px",
        width: "100%",
        backgroundColor: "white",
      },

      "@max1024px": {
        width: "60%",
      },

      "@max768px": {
        width: "80%",
      },

      "@max550px": {
        width: "100%",
      },
    },

    "@max1024px": {
      flexUtil: {
        fFlow: "column-reverse",
        fAlignItems: "center",
      },
      gap: "20px",
    },
  },

  "@min1440px": {
    fontSize: "1vw",
  },

  "@max1024px": {
    gridTemplateAreas: "'recipeInfoSection' 'similarRecipesSection'",
  },
});
