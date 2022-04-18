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
    background: `$greenSheen url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2343b5ad' fill-opacity='0.49'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat fixed top`,
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
