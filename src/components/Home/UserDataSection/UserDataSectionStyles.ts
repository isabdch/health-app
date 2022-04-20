import { styled } from "../../../stitches.config";

export const UserDataSectionComponent = styled("section", {
  gridArea: "userDataSection",
  padding: "20px",
  fontSize: "0.8em",
  flexUtil: {
    fFlow: "row",
    fJustifyContent: "flex-end",
    fAlignItems: "flex-start",
  },

  ".container": {
    background: `$greenSheen url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2343b5ad' fill-opacity='0.49'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat fixed top`,
    color: "$lapisLazulli",
    width: "100%",
    height: "fit-content",
    border: "4px solid $lapisLazulli",
    borderRadius: "20px",
    padding: "20px",
    flexUtil: {
      fFlow: "column",
      fAlignItems: "center",
      fJustifyContent: "space-between",
    },
    gap: "10px",

    h1: {
      textAlign: "center",
      fontSize: "1.6em",
      width: "80%",
      fontFamily: "'Comfortaa', cursive",
    },

    form: {
      width: "100%",
      height: "100%",
      flexUtil: {
        fFlow: "column",
        fAlignItems: "center",
        fJustifyContent: "space-evenly",
      },
      gap: "10px",

      div: {
        label: {
          fontSize: "0.85em",
        },

        input: {
          border: "none",
          backgroundColor: "inherit",
          padding: "inherit",
          outline: "none",
          fontSize: "1em",
          color: "$lapisLazulli",
        },

        "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },

        "input[type=number]": {
          "-moz-appearance": "textfield",
        },
      },

      ".user-section-gender-input": {
        fontSize: "1.2em",
        flexUtil: {
          fAlignItems: "center",
          fFlow: "column",
        },
        gap: "5px",

        ".user-section-gender-container-btns": {
          flexUtil: {
            fFlow: "row",
          },
          gap: "10px",

          button: {
            width: "55px",
            height: "55px",
            padding: "5px",
            backgroundColor: "$ivory",
            color: "inherit",
            borderRadius: "5px",
            fontSize: "1.4em",
            transition: ".2s",
            outline: "none",

            i: {
              pointerEvents: "none",
            },

            "&.checked, &:focus": {
              boxShadow: "0 0 0 2px $lapisLazulli",
            },

            "&:hover": {
              opacity: "0.85",
            },

            "@min1440px": {
              width: "4vw",
              height: "4vw",
              borderRadius: "0.5vw",
            },
          },
        },
      },

      ".user-section-modal-input": {
        width: "95%",
        backgroundColor: "$ivory",
        padding: "3px",
        borderRadius: "5px",
        flexUtil: {
          fFlow: "column",
        },

        label: {
          marginLeft: "3px",
        },

        "&:focus-within": {
          boxShadow: "0 0 0 2px $lapisLazulli",
        },

        "@min1440px": {
          padding: "0.2vw",
          borderRadius: "0.5vw",

          label: {
            marginLeft: "0.2vw",
          },
        },
      },

      ".user-section-fbp-container": {
        width: "100%",
        flexUtil: {
          fJustifyContent: "center",
          fFlow: "row",
        },
        gap: "10px",

        ".user-section-fbp-input": {
          backgroundColor: "$ivory",
          borderRadius: "5px",
          padding: "3px",
          flexUtil: {
            fAlignItems: "center",
            fFlow: "column",
          },

          "&:focus-within": {
            boxShadow: "0 0 0 2px $lapisLazulli",
          },

          input: {
            backgroundColor: "inherit",
            width: "55px",
            height: "40px",
            padding: "3px",
            textAlign: "center",

            "@min1440px": {
              width: "3.8vw",
              height: "2.8vw",
            },
          },

          "@min1440px": {
            padding: "0.2vw",
            borderRadius: "0.5vw",

            input: {
              padding: "0.2vw",
            },
          },
        },

        "@min1440px": {
          gap: "0.7vw",
        },
      },

      "@min1440px": {
        gap: "0.7vw",
      },
    },

    ".save-and-clear-btns": {
      flexUtil: {
        fFlow: "row",
      },
      gap: "10px",

      button: {
        padding: "10px 35px",
        borderRadius: "5px",
        fontSize: "1em",
        backgroundColor: "$lapisLazulli",
        color: "$ivory",
        transition: ".2s",
        outline: "none",

        "&:hover": {
          opacity: "0.85",
        },

        "&:disabled": {
          opacity: "0.6",
          cursor: "not-allowed",
        },

        "&:focus": {
          boxShadow: "0 0 0 1px $lapisLazulli",
        },

        "@min1440px": {
          padding: "0.8vw 3vw",
          borderRadius: "0.5vw",
        },
      },
    },

    "@min1440px": {
      gap: "1vw",
      borderRadius: "1vw",
      fontSize: "1vw",
    },
  },
});
