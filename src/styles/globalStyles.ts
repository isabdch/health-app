import { globalCss } from "../stitches.config";

export const globalStyles = globalCss({
  html: {
    "@max1080px": {
      fontSize: "93.75%",
    },

    "@max720px": {
      fontSize: "87.5%%",
    },
  },

  body: {
    width: "100vw",
    height: "100vh",
  },

  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    fontFamily: "'Inter', sans-serif",
  },

  "#root": {
    width: "100%",
    height: "100%",
    background: "$ivory",
    flexUtil: {
      fFlow: "row no-wrap",
      fAlignItems: "",
      fJustifyContent: "",
    },
  },

  button: {
    border: 0,
    cursor: "pointer",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  li: {
    listStyle: "none",
  },

  ".modal-overlay": {
    position: "fixed",
    inset: 0,
    backgroundColor: "$black66",
  },

  ".modal-content": {
    position: "absolute",
    inset: "50% 50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    height: "fit-content",
    maxWidth: "fit-content",
    background: "$greenSheen",
    color: "$lapisLazulli",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "20px",
    outline: "none",
    padding: "20px",

    flexUtil: {
      fFlow: "column",
      fAlignItems: "center",
      fJustifyContent: "space-between",
    },
    gap: "20px",
  },
});
