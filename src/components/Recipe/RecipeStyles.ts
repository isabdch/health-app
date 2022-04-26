import { styled } from "../../stitches.config";

export const RecipeSectionContainer = styled("section", {
  width: "100%",
  height: "100%",
  background: "url(/assets/image.svg) no-repeat right top",
  backgroundSize: "42%",
  display: "grid",
  gridTemplateAreas:
    "'recipeInfoSection' 'recipeInfoSection' 'similarRecipesSection'",

  ".recipe-information-container": {
    gridArea: "recipeInfoSection",
    flexUtil: {
      fFlow: "row",
    },
    color: "$sinopia",

    ".recipe-information-content": {
      width: "60%",
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
        height: "100%",
        flexUtil: {
          fFlow: "row",
          fAlignItems: "center",
        },

        ".recipe-section-1": {
          height: "100%",
          textAlign: "center",
          flexUtil: {
            fFlow: "column",
            fJustifyContent: "space-around",
          },
          gap: "20px",
        },

        ".recipe-section-2": {
          height: "100%",
          textAlign: "center",
          flexUtil: {
            fFlow: "column",
            fJustifyContent: "space-around",
          },
          gap: "20px",
        },
      },
    },

    ".recipe-img": {
      width: "40%",
      textAlign: "center",
    },
  },

  ".similar-recipes-section": {
    gridArea: "similarRecipesSection",
  },
});
