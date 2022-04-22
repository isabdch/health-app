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
    background: `$ivory url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='404' height='404' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23F2F5E6' stroke-width='2.1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23EAEDDE'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E") repeat fixed top`,
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
      fJustifyContent: "center",
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
    background: `$greenSheen url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2343b5ad' fill-opacity='0.49'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat fixed top`,
    color: "$lapisLazulli",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "20px",
    border: "4px solid",
    outline: "none",
    padding: "20px",

    flexUtil: {
      fFlow: "column",
      fAlignItems: "center",
      fJustifyContent: "space-between",
    },
    gap: "20px",

    "@min1440px": {
      gap: "1vw",
      borderRadius: "1vw",
    },

    "@max768px": {
      gap: "10px",
    },
  },
});
