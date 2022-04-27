import { styled } from "../../stitches.config";

export const RecipeSectionContainer = styled("section", {
  width: "100%",
  height: "100%",
  // background: "url(/assets/image.svg) no-repeat right bottom",
  // backgroundSize: "40%",
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
          },

          ".general-info": {
            height: "50%",
          },
        },

        ".recipe-section-2": {
          width: "50%",
          height: "100%",
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
          },

          ".nutritional-info": {
            height: "50%",
          },
        },
      },
    },

    ".recipe-img": {
      width: "40%",
      height: "60%",
      textAlign: "center",

      img: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      },
    },
  },

  ".similar-recipes-section": {
    gridArea: "similarRecipesSection",
  },
});
