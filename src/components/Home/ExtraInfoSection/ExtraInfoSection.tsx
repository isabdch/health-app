import { useContext, useEffect, useState } from "react";
import { WaterBottleImg } from "../../../svgs/WaterBottleImg";
import { ageContext } from "../../../hooks/ageHook";
import { genderContext } from "../../../hooks/genderHook";
import { weightContext } from "../../../hooks/weightHook";
import { bmiContext } from "../../../hooks/bmiHook";
import { ExtraInfoSectionComponent } from "./ExtraInfoSectionStyles";

export function ExtraInfoSection() {
  const [age] = useContext(ageContext);
  const [gender] = useContext(genderContext);
  const [weight] = useContext(weightContext);
  const [bmi] = useContext(bmiContext);

  const [waterAmount, setWaterAmount] = useState<number>(0);
  const [fbp, setFbp] = useState<number>(0);
  const [fbpDescription, setFbpDescription] = useState<string>("");

  useEffect(() => {
    function calcWaterAmount(userWieght: number) {
      const userWaterAmount = userWieght * 35;

      setWaterAmount(userWaterAmount);
    }

    function calcFbp(userBmi: number, userAge: number, userGender: number) {
      const userFbp = 1.2 * userBmi + 0.23 * userAge - 10.8 * userGender - 5.4;

      setFbp(Number(userFbp.toFixed(2)));
    }

    if (gender === "Female") {
      calcFbp(Number(bmi), Number(age), 0);

      if (fbp < 14) {
        setFbpDescription("essential fat.");
      } else if (fbp >= 14 && fbp <= 20) {
        setFbpDescription("athletes.");
      } else if (fbp >= 20.5 && fbp <= 24) {
        setFbpDescription("fitness.");
      } else if (fbp >= 24.5 && fbp <= 31) {
        setFbpDescription("acceptable.");
      } else if (fbp > 31) {
        setFbpDescription("overweight.");
      }
    } else if (gender === "Male") {
      calcFbp(Number(bmi), Number(age), 1);

      if (fbp < 6) {
        setFbpDescription("essential fat.");
      } else if (fbp >= 6 && fbp <= 13) {
        setFbpDescription("athletes.");
      } else if (fbp >= 13.5 && fbp <= 17) {
        setFbpDescription("fitness.");
      } else if (fbp >= 17.5 && fbp <= 25) {
        setFbpDescription("acceptable.");
      } else if (fbp > 25) {
        setFbpDescription("overweight.");
      }
    }

    calcWaterAmount(Number(weight));
  }, [weight, gender, age, bmi, fbp]);

  return (
    <ExtraInfoSectionComponent>
      <div className="extra-info-container">
        <div className="water-info">
          <h2>According to your weight, you must drink</h2>
          <h1>{waterAmount}ml</h1>
          <h2>of water a day. Stay hydrated!</h2>
          <WaterBottleImg />
        </div>
        <div className="fbp-info">
          <h2>Your body fat percentage is</h2>
          <h1>{isNaN(fbp) || fbp === Infinity ? 0 : fbp}%</h1>
          <div className="fbp-info-description">
            Your BFP is classified as <strong>{fbpDescription}</strong>
          </div>
          <div className="fbp-info-tips">
            <strong>Tip:</strong> take a look at the recipes section! There you
            will find many delicious and healthy meal ideas.
          </div>
        </div>
      </div>
    </ExtraInfoSectionComponent>
  );
}
