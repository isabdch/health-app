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
      bgColor: "#F9FCED",
      fitnessIconColor: "#3D405B",
      foodIconColor: "#E07A5F",
    },
    shadows: {},
  },
  media: {
    max1080px: "(max-width: 1080px)",
    max720px: "(max-width: 720px)",
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
