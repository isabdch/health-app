import { styled } from "../../../stitches.config";

export const ExtraInfoSectionComponent = styled("section", {
  gridArea: "extraInfoSection",
  padding: "1vw 2vw",
  paddingLeft: "1vw",
  paddingTop: 0,
  alignSelf: "end",

  ".extra-info-container": {
    height: "max-content",
    flexUtil: {
      fFlow: "row",
    },
    gap: "15px",

    ".water-info": {
      width: "100%",
      background: `transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1065%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c119 C 57.6%2c151.2 172.8%2c279.6 288%2c280 C 403.2%2c280.4 460.8%2c128.6 576%2c121 C 691.2%2c113.4 748.8%2c245 864%2c242 C 979.2%2c239 1036.8%2c102 1152%2c106 C 1267.2%2c110 1382.4%2c230.8 1440%2c262L1440 560L0 560z' fill='rgba(26%2c 117%2c 159%2c 0.22)'%3e%3c/path%3e%3cpath d='M 0%2c434 C 48%2c415 144%2c323 240%2c339 C 336%2c355 384%2c515.2 480%2c514 C 576%2c512.8 624%2c339.6 720%2c333 C 816%2c326.4 864%2c477 960%2c481 C 1056%2c485 1104%2c340.2 1200%2c353 C 1296%2c365.8 1392%2c506.6 1440%2c545L1440 560L0 560z' fill='rgba(52%2c 160%2c 164%2c 0.17)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1065'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e") no-repeat`,
      backgroundSize: "cover",
      color: "$lapisLazulli",
      borderRadius: "20px",
      position: "relative",
      padding: "15px",
      flexUtil: {
        fFlow: "column",
        fAlignItems: "center",
        fJustifyContent: "space-between",
      },
      gap: "15px",
      textAlign: "center",

      "h1, h2": {
        fontFamily: "'Comfortaa', cursive",
      },

      h1: {
        fontSize: "2.5em",
      },

      svg: {
        position: "absolute",
        right: "-2%",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: "-1",
      },

      "@min1440px": {
        borderRadius: "1vw",
        padding: "1vw",
        gap: "1vw",
      },

      "@max1024px": {
        svg: {
          display: "none",
        },
      },

      "@max768px": {
        fontSize: "0.8em",
      },
    },

    ".fbp-info": {
      width: "100%",
      background: `$greenSheen url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2343b5ad' fill-opacity='0.49'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat`,
      color: "$ivory",
      borderLeft: "0",
      borderRadius: "20px",
      padding: "15px",
      flexUtil: {
        fFlow: "column",
        fAlignItems: "center",
        fJustifyContent: "space-between",
      },
      gap: "15px",
      textAlign: "center",

      "h1, h2": {
        fontFamily: "'Comfortaa', cursive",
      },

      h1: {
        fontSize: "2.5em",
      },

      div: {
        fontSize: "1.1em",
      },

      "@min1440px": {
        borderRadius: "1vw",
        padding: "1vw",
        gap: "1vw",
      },

      "@max768px": {
        fontSize: "0.8em",
      },
    },

    "@max768px": {
      flexUtil: {
        fFlow: "column",
      },
    },
  },

  "@min1440px": {
    gap: "1vw",
    fontSize: "1vw",
  },

  "@max768px": {
    padding: "0px 15px",
  },
});
