import { useContext, useEffect, useState } from "react";
import { heightContext } from "../../../hooks/heightHook";
import { weightContext } from "../../../hooks/weightHook";
import { bmiContext } from "../../../hooks/bmiHook";
import { BmiSectionComponent } from "./BmiSectionStyles";

export function BmiSection() {
  const [weight] = useContext(weightContext);
  const [height] = useContext(heightContext);
  const [bmi, setBmi] = useContext(bmiContext);

  const [bmiDescription, setBmiDescription] = useState<string>("");
  const [bmiConsequences, setBmiConsequences] = useState<string>("");

  const [showWarning, setShowWarning] = useState<boolean>(false);

  useEffect(() => {
    function calcBmi(userWeight: number, userHeight: number) {
      const userHeightInMeter = userHeight / 100;

      const calcUserBmi = userWeight / (userHeightInMeter * userHeightInMeter);

      setBmi(Number(calcUserBmi.toFixed(2)));

      if (bmi <= 16.9) {
        setBmiDescription("severely underweight.");
        setBmiConsequences("hair loss, infertility, menstrual absence.");
      } else if (bmi >= 17 && bmi <= 18.4) {
        setBmiDescription("underweight.");
        setBmiConsequences("fatigue, stress, anxiety.");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setBmiDescription("normal.");
        setBmiConsequences("lower risk of heart and vascular diseases.");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setBmiDescription("overweight.");
        setBmiConsequences("fatigue, poor circulation, varicose veins.");
      } else if (bmi >= 30 && bmi <= 34.9) {
        setBmiDescription("class 1 obesity.");
        setBmiConsequences("diabetes, angina, heart attack, atherosclerosis.");
      } else if (bmi >= 35 && bmi <= 40) {
        setBmiDescription("class 2 obesity.");
        setBmiConsequences("sleep apnea, shortness of breath.");
      } else if (bmi > 40) {
        setBmiDescription("class 3 obesity.");
        setBmiConsequences(
          "reflux, moving difficulty, bedsores, diabetes, heart attack, CVA."
        );
      }
    }

    calcBmi(Number(weight), Number(height));
  }, [weight, height, bmi, setBmi]);

  return (
    <BmiSectionComponent>
      <h2>Your BMI is</h2>
      <h1>{isNaN(bmi) || bmi === Infinity ? 0 : bmi.toString()}</h1>
      <p className="bmi-description">
        This is considered <strong>{bmiDescription}</strong>
      </p>
      <p className="bmi-consequences">
        <strong>What can this cause:</strong> {bmiConsequences}
      </p>
      <div
        onClick={() => {
          setShowWarning(!showWarning);
        }}
        className={showWarning ? "bmi-warning" : "bmi-warning unchecked"}
      >
        <span>
          <i className="fa-solid fa-circle-info"></i>{" "}
          {showWarning ? null : "Warning"}
        </span>
        {showWarning
          ? "BMI is not used for muscle builders, long distance athletes, pregnant women, the elderly or young children. This is because BMI does not take into account whether the weight is carried as muscle or fat, just the number. Those with a higher muscle mass, such as athletes, may have a high BMI but not be at greater health risk. Those with a lower muscle mass, such as children who have not completed their growth or the elderly who may be losing some muscle mass may have a lower BMI. During pregnancy and lactation, a woman's body composition changes, so using         BMI is not appropriate."
          : null}
      </div>
    </BmiSectionComponent>
  );
}
