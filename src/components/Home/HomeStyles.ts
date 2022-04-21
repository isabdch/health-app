import { styled } from "../../stitches.config";

export const HomeMain = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  gridTemplateAreas:
    "'bmiSection userDataSection' 'extraInfoSection extraInfoSection'",

  "@max768px": {
    gridTemplateAreas: "'bmiSection' 'extraInfoSection' 'userDataSection'",
  },
});
