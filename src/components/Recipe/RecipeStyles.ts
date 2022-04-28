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
      background: `$sinopia url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e07a5f' fill-opacity='0.25'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat`,
      color: "$ivory",
      fontSize: "0.9em",

      img: {
        boxShadow: "1px 1px 10px $kobe",
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
          boxShadow: "none",
          borderRadius: "0px",
          width: "100%",
        },
      },
    },
  },

  "@min1440px": {
    fontSize: "1vw",
  },
});
