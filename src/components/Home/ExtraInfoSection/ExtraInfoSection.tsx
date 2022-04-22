import { ExtraInfoSectionComponent } from "./ExtraInfoSectionStyles";
import { WaterBottleImg } from "../../../assets/WaterBottleImg";

export function ExtraInfoSection() {
  return (
    <ExtraInfoSectionComponent>
      <div className="extra-info-container">
        <div className="water-info">
          <h2>According to your weight, you must drink</h2>
          <h1>2000ml</h1>
          <h2>of water a day. Stay hydrated!</h2>
          <WaterBottleImg />
        </div>
        <div className="fbp-info">
          <h2>Your fat body percentage is</h2>
          <h1>FBP</h1>
          <div className="fbp-info-description">bla bla bla</div>
          <div className="fbp-info-tips">tips tips tips</div>
        </div>
      </div>
    </ExtraInfoSectionComponent>
  );
}
