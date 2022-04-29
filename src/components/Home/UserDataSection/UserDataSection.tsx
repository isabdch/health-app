import { useContext } from "react";
import { modalContext } from "../../../hooks/modalHook";
import { ageContext } from "../../../hooks/ageHook";
import { genderContext } from "../../../hooks/genderHook";
import { weightContext } from "../../../hooks/weightHook";
import { heightContext } from "../../../hooks/heightHook";
import { UserDataSectionComponent } from "./UserDataSectionStyles";

export function UserDataSection() {
  const [, setModal] = useContext(modalContext);
  const [age] = useContext(ageContext);
  const [gender] = useContext(genderContext);
  const [weight] = useContext(weightContext);
  const [height] = useContext(heightContext);

  return (
    <UserDataSectionComponent>
      <div className="user-data-container">
        <div className="user-data-content">
          <div className="user-data user-age">
            Age: <span>{age !== "" ? age : "--"}</span>
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
