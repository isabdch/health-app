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
    background: `$ivory url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23dddfd6' fill-opacity='0.29' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") repeat fixed bottom`,
  },

  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    fontFamily: "'Inter', sans-serif",
  },

  "#root": {
    position: "fixed",
    inset: 0,
    width: "100vw",
    height: "100vh",
    overflowY: "auto",
    flexUtil: {
      fFlow: "row",
      fAlignItems: "center",
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
    backgroundColor: "$blackb3",
    overflowY: "auto",
  },

  ".modal-content": {
    position: "absolute",
    inset: "50% 50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    height: "fit-content",
    maxWidth: "max-content",
    background: `$greenSheen url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2343b5ad' fill-opacity='0.49'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat`,
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

    "@min1440px": {
      padding: "1.2vw",
      gap: "1vw",
      borderRadius: "1vw",
    },

    "@max768px": {
      gap: "10px",
    },
  },
});
