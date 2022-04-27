import { styled } from "../../stitches.config";

export const RecipeSectionContainer = styled("section", {
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateAreas:
    "'recipeInfoSection' 'recipeInfoSection' 'similarRecipesSection'",

  ".recipe-information-container": {
    gridArea: "recipeInfoSection",
    flexUtil: {
      fFlow: "row",
      fAlignItems: "start",
    },
    color: "$sinopia",

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
          fAlignItems: "center",
          fJustifyContent: "space-between",
        },

        ".recipe-section-1": {
          width: "50%",
          height: "100%",
          padding: "5px",
          flexUtil: {
            fFlow: "column",
            fJustifyContent: "space-around",
          },
          gap: "20px",

          h2: {
            textAlign: "center",
          },

          ".ingredients": {
            height: "50%",
            flexUtil: {
              fFlow: "column",
              fAlignItems: "center",
            },
            gap: "5px",
          },

          ".general-info": {
            height: "50%",
            flexUtil: {
              fFlow: "column",
              fAlignItems: "center",
            },
            gap: "5px",
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
            fFlow: "column",
            fJustifyContent: "space-around",
          },
          gap: "20px",

          h2: {
            textAlign: "center",
          },

          ".instructions": {
            height: "50%",
            flexUtil: {
              fFlow: "column",
              fAlignItems: "center",
            },
            gap: "5px",
          },

          ".nutritional-info": {
            height: "50%",
            flexUtil: {
              fFlow: "column",
              fAlignItems: "center",
            },
            gap: "5px",
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
          textAlign: "center",
        },
      },

      "@max1024px": {
        width: "100%",
      },
    },

    ".recipe-img": {
      width: "40%",
      textAlign: "center",

      img: {
        width: "100%",
        height: "100%",
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

  ".similar-recipes-section": {
    gridArea: "similarRecipesSection",
  },

  "@min1440px": {
    fontSize: "1vw",
  },

  "@max1024px": {
    gridTemplateAreas: "'recipeInfoSection' 'similarRecipesSection'",
  },
});
