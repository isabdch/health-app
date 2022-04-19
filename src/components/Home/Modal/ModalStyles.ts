import ReactModal from "react-modal";
import { styled } from "../../../stitches.config";

export const ModalComponent = styled(ReactModal, {
  h1: {
    textAlign: "center",
    fontSize: "1.8em",
    width: "80%",
    fontFamily: "'Comfortaa', cursive",
  },

  form: {
    width: "90%",
    flexUtil: {
      fFlow: "column",
      fAlignItems: "center",
    },
    gap: "15px",

    div: {
      label: {
        fontSize: "0.85em",
      },

      input: {
        border: "none",
        backgroundColor: "inherit",
        padding: "inherit",
        outline: "none",
        fontSize: "1.2em",
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

    ".gender-input": {
      fontSize: "1.2em",
      flexUtil: {
        fAlignItems: "center",
        fFlow: "column",
      },
      gap: "5px",

      ".gender-container-btns": {
        flexUtil: {
          fFlow: "row",
        },
        gap: "15px",

        button: {
          width: "70px",
          height: "70px",
          padding: "5px",
          backgroundColor: "$ivory",
          color: "inherit",
          borderRadius: "10px",
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
            width: "5vw",
            height: "5vw",
          },

          "@max768px": {
            width: "65px",
            height: "65px",
          },
        },
      },
    },

    ".modal-input": {
      width: "100%",
      backgroundColor: "$ivory",
      padding: "5px",
      borderRadius: "10px",
      flexUtil: {
        fFlow: "column",
      },

      label: {
        marginLeft: "5px",
      },

      "&:focus-within": {
        boxShadow: "0 0 0 2px $lapisLazulli",
      },
    },

    ".fbp-container": {
      width: "100%",
      flexUtil: {
        fJustifyContent: "center",
        fFlow: "row",
      },
      gap: "15px",

      ".fbp-input": {
        backgroundColor: "$ivory",
        borderRadius: "10px",
        padding: "5px",
        flexUtil: {
          fAlignItems: "center",
          fFlow: "column",
        },

        "&:focus-within": {
          boxShadow: "0 0 0 2px $lapisLazulli",
        },

        input: {
          backgroundColor: "inherit",
          width: "70px",
          height: "50px",
          padding: "5px",
          textAlign: "center",

          "@min1440px": {
            width: "5vw",
            height: "3.5vw",
          },

          "@max768px": {
            width: "60px",
            height: "45px",
          },
        },
      },

      "@min1440px": {
        gap: "1vw",
      },

      "@max768px": {
        gap: "10px",
      },
    },

    "@min1440px": {
      gap: "1vw",
    },

    "@max1024px": {
      gap: "10px",
    },

    "@max320px": {
      width: "95%",
    },
  },

  ".save-modal-data-btn": {
    padding: "15px 56px",
    borderRadius: "10px",
    fontSize: "1.1em",
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
      padding: "1vw 3.5vw",
    },
  },

  "@min1440px": {
    fontSize: "1.1vw",
  },

  "@max768px": {
    fontSize: "0.8em",
  },
});
