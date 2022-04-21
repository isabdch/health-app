import { styled } from "../../../stitches.config";

export const BmiSectionComponent = styled("section", {
  gridArea: "bmiSection",
  padding: "1vw",

  "@max768px": {
    padding: "15px",
  },
});
