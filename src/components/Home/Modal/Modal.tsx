import { useContext, useRef, useState } from "react";
import ReactModal from "react-modal";
import { ageContext } from "../../../hooks/ageHook";
import { fbpContext } from "../../../hooks/fbpHook";
import { genderContext } from "../../../hooks/genderHook";
import { heightContext } from "../../../hooks/heightHook";
import { weightContext } from "../../../hooks/weightHook";
import { ModalComponent } from "./ModalStyles";

ReactModal.setAppElement("#root");

export function Modal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const [age, setAge] = useContext(ageContext);
  const [gender, setGender] = useContext(genderContext);
  const [weight, setWeight] = useContext(weightContext);
  const [height, setHeight] = useContext(heightContext);
  const { neckFbp, waistFbp, hipFbp } = useContext(fbpContext);
  const [neck, setNeck] = neckFbp;
  const [waist, setWaist] = waistFbp;
  const [hip, setHip] = hipFbp;

  const ageRef = useRef<HTMLLabelElement>(null);
  const genderRef = useRef<HTMLLabelElement>(null);
  const weightRef = useRef<HTMLLabelElement>(null);
  const heightRef = useRef<HTMLLabelElement>(null);

  return (
    <ModalComponent
      className="modal-content"
      overlayClassName="modal-overlay"
      isOpen={isModalOpen}
      contentLabel="Please enter your data in the fields below"
    >
      <h1>Please enter your data in the fields below:</h1>

      <form>
        <div className="modal-input age-input">
          <label ref={ageRef}>Age*</label>
          <input
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
            type="number"
          />
        </div>

        <div className="gender-input">
          <label ref={genderRef}>Gender*</label>
          <div className="gender-container-btns">
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

        <div className="modal-input weight-input">
          <label ref={weightRef}>Weight (kg)*</label>
          <input
            value={weight}
            onChange={(event) => {
              setWeight(event.target.value);
            }}
            type="number"
          />
        </div>

        <div className="modal-input height-input">
          <label ref={heightRef}>Height (cm)*</label>
          <input
            value={height}
            onChange={(event) => {
              setHeight(event.target.value);
            }}
            type="number"
          />
        </div>

        <div className="fbp-container">
          <div className="fbp-input neck-input">
            <label>Neck (cm)</label>
            <input
              value={neck}
              onChange={(event) => {
                setNeck(event.target.value);
              }}
              type="number"
            />
          </div>

          <div className="fbp-input waist-input">
            <label>Waist (cm)</label>
            <input
              value={waist}
              onChange={(event) => {
                setWaist(event.target.value);
              }}
              type="number"
            />
          </div>

          <div className="fbp-input hip-input">
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
          if (age !== "" && gender !== null && weight !== "" && height !== "") {
            setIsModalOpen(false);
            console.log(age, gender, weight, height, neck, waist, hip);
          } else {
            if (
              ageRef.current !== null &&
              genderRef.current !== null &&
              weightRef.current !== null &&
              heightRef.current !== null
            ) {
              ageRef.current.style.color = "red";
              genderRef.current.style.color = "red";
              weightRef.current.style.color = "red";
              heightRef.current.style.color = "red";
            }
          }
        }}
        className="save-modal-data-btn"
      >
        Save
      </button>
    </ModalComponent>
  );
}
