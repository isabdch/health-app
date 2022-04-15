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
    background: "$bgColor",
  },

  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
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
});
