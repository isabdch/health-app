import { createStitches } from "@stitches/react";

type flexUtilType = {
  fJustifyContent: string;
  fAlignItems: string;
  fFlow: string;
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ivory: "#F9FCED",
      independence: "#3D405B",
      terraCota: "#E07A5F",
      black66: "#00000066",
      greenSheen: "#6FC3AB",
      lapisLazulli: "#1E6091",
    },
    shadows: {
      lapisLazulli: "#1E6091",
      ivory: "#F9FCED",
    },
  },
  media: {
    min1440px: "(min-width: 1440px)",
    max1080px: "(max-width: 1080px)",
    max1024px: "(max-width: 1024px)",
    max768px: "(max-width: 768px)",
    max720px: "(max-width: 720px)",
    max320px: "(max-width: 320px)",
  },
  utils: {
    flexUtil: ({ fJustifyContent, fAlignItems, fFlow }: flexUtilType) => ({
      display: "flex",
      justifyContent: fJustifyContent,
      alignItems: fAlignItems,
      flexFlow: fFlow,
    }),
  },
  prefix: "radix",
});
