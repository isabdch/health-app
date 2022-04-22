import { useContext } from "react";
import { modalContext } from "../../../hooks/modalHook";
import { ageContext } from "../../../hooks/ageHook";
import { genderContext } from "../../../hooks/genderHook";
import { weightContext } from "../../../hooks/weightHook";
import { heightContext } from "../../../hooks/heightHook";
import { fbpContext } from "../../../hooks/fbpHook";
import { UserDataSectionComponent } from "./UserDataSectionStyles";

export function UserDataSection() {
  const [modal, setModal] = useContext(modalContext);
  const [age] = useContext(ageContext);
  const [gender] = useContext(genderContext);
  const [weight] = useContext(weightContext);
  const [height] = useContext(heightContext);
  const { neckFbp, waistFbp, hipFbp } = useContext(fbpContext);
  const [neck] = neckFbp;
  const [waist] = waistFbp;
  const [hip] = hipFbp;

  return (
    <UserDataSectionComponent>
      <div className="user-data-container">
        <div className="user-data-content">
          <div className="user-data user-age">
            Age: <span>{age !== "" ? age + "y" : "--"}</span>
          </div>
          <div className="user-data user-gender">
            Gender: <span>{gender !== null ? gender : "--"}</span>
          </div>
          <div className="user-data user-weight">
            Weight: <span>{weight !== "" ? weight + "kg" : "--"}</span>
          </div>
          <div className="user-data user-height">
            Height: <span>{height !== "" ? height + "cm" : "--"}</span>
          </div>
          <div className="user-data user-neck">
            Neck: <span>{neck !== "" ? neck + "cm" : "--"}</span>
          </div>
          <div className="user-data user-waist">
            Waist: <span>{waist !== "" ? waist + "cm" : "--"}</span>
          </div>
          <div className="user-data user-hip">
            Hip: <span>{hip !== "" ? hip + "cm" : "--"}</span>
          </div>
        </div>

        <button
          className="update-user-data-btn"
          onClick={() => {
            setModal(true);
          }}
        >
          Update
        </button>
      </div>
    </UserDataSectionComponent>
  );
}
