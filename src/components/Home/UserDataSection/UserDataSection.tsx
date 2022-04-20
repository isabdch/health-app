import { useContext } from "react";
import { ageContext } from "../../../hooks/ageHook";
import { fbpContext } from "../../../hooks/fbpHook";
import { genderContext } from "../../../hooks/genderHook";
import { heightContext } from "../../../hooks/heightHook";
import { weightContext } from "../../../hooks/weightHook";
import { UserDataSectionComponent } from "./UserDataSectionStyles";

export function UserDataSection() {
  const [age, setAge] = useContext(ageContext);
  const [gender, setGender] = useContext(genderContext);
  const [weight, setWeight] = useContext(weightContext);
  const [height, setHeight] = useContext(heightContext);
  const { neckFbp, waistFbp, hipFbp } = useContext(fbpContext);
  const [neck, setNeck] = neckFbp;
  const [waist, setWaist] = waistFbp;
  const [hip, setHip] = hipFbp;

  return (
    <UserDataSectionComponent>
      <div className="container">
        <h1>User data</h1>

        <form>
          <div className="user-section-modal-input user-section-age-input">
            <label>Age</label>
            <input
              value={age}
              onChange={(event) => {
                setAge(event.target.value);
              }}
              type="number"
            />
          </div>

          <div className="user-section-gender-input">
            <label>Gender</label>
            <div className="user-section-gender-container-btns">
              <button
                className={gender === "female" ? "checked" : ""}
                onClick={(event) => {
                  event.preventDefault();
                  setGender("female");
                }}
              >
                <i className="fa-regular fa-venus"></i>
              </button>
              <button
                className={gender === "male" ? "checked" : ""}
                onClick={(event) => {
                  event.preventDefault();
                  setGender("male");
                }}
              >
                <i className="fa-regular fa-mars"></i>
              </button>
            </div>
          </div>

          <div className="user-section-modal-input user-section-weight-input">
            <label>Weight (kg)</label>
            <input
              value={weight}
              onChange={(event) => {
                setWeight(event.target.value);
              }}
              type="number"
            />
          </div>

          <div className="user-section-modal-input user-section-height-input">
            <label>Height (cm)</label>
            <input
              value={height}
              onChange={(event) => {
                setHeight(event.target.value);
              }}
              type="number"
            />
          </div>

          <div className="user-section-fbp-container">
            <div className="user-section-fbp-input user-section-neck-input">
              <label>Neck (cm)</label>
              <input
                value={neck}
                onChange={(event) => {
                  setNeck(event.target.value);
                }}
                type="number"
              />
            </div>

            <div className="user-section-fbp-input user-section-waist-input">
              <label>Waist (cm)</label>
              <input
                value={waist}
                onChange={(event) => {
                  setWaist(event.target.value);
                }}
                type="number"
              />
            </div>

            <div className="user-section-fbp-input user-section-hip-input">
              <label>Hip (cm)</label>
              <input
                value={hip}
                onChange={(event) => {
                  setHip(event.target.value);
                }}
                type="number"
              />
            </div>
          </div>
        </form>

        <div className="save-and-clear-btns">
          <button
            disabled={
              age === ""
                ? true
                : gender === null
                ? true
                : weight === ""
                ? true
                : height === ""
                ? true
                : false
            }
            onClick={() => {
              if (
                age !== "" &&
                gender !== null &&
                weight !== "" &&
                height !== ""
              ) {
                localStorage.setItem("modalAppearance", JSON.stringify(true));
                localStorage.setItem("age", age);
                localStorage.setItem("gender", gender);
                localStorage.setItem("weight", weight);
                localStorage.setItem("height", height);
                localStorage.setItem("neck", neck);
                localStorage.setItem("waist", waist);
                localStorage.setItem("hip", hip);
              }
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("age");
              setAge("");
              localStorage.removeItem("gender");
              setGender("");
              localStorage.removeItem("weight");
              setWeight("");
              localStorage.removeItem("height");
              setHeight("");
              localStorage.removeItem("neck");
              setNeck("");
              localStorage.removeItem("waist");
              setWaist("");
              localStorage.removeItem("hip");
              setHip("");
              localStorage.removeItem("modalAppearance");
            }}
          >
            Clear all
          </button>
        </div>
      </div>
    </UserDataSectionComponent>
  );
}
