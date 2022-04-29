import { useContext } from "react";
import ReactModal from "react-modal";
import { modalContext } from "../../../hooks/modalHook";
import { ageContext } from "../../../hooks/ageHook";
import { genderContext } from "../../../hooks/genderHook";
import { heightContext } from "../../../hooks/heightHook";
import { weightContext } from "../../../hooks/weightHook";
import { ModalComponent } from "./ModalStyles";

ReactModal.setAppElement("#root");

export function Modal() {
  const [modal, setModal] = useContext(modalContext);
  const [age, setAge] = useContext(ageContext);
  const [gender, setGender] = useContext(genderContext);
  const [weight, setWeight] = useContext(weightContext);
  const [height, setHeight] = useContext(heightContext);

  return (
    <ModalComponent
      className="modal-content"
      overlayClassName="modal-overlay"
      isOpen={modal}
      contentLabel="Please enter your data in the fields below"
    >
      <h1>Please enter your data in the fields below:</h1>

      <form>
        <div className="modal-input age-input">
          <label>Age*</label>
          <input
            autoFocus
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
            type="number"
          />
        </div>

        <div className="gender-input">
          <label>Gender*</label>
          <div className="gender-container-btns">
            <button
              className={gender === "Female" ? "checked" : ""}
              onClick={(event) => {
                event.preventDefault();
                setGender("Female");
              }}
            >
              <i className="fa-regular fa-venus"></i>
            </button>
            <button
              className={gender === "Male" ? "checked" : ""}
              onClick={(event) => {
                event.preventDefault();
                setGender("Male");
              }}
            >
              <i className="fa-regular fa-mars"></i>
            </button>
          </div>
        </div>

        <div className="modal-input weight-input">
          <label>Weight (kg)*</label>
          <input
            value={weight}
            onChange={(event) => {
              setWeight(event.target.value);
            }}
            type="number"
          />
        </div>

        <div className="modal-input height-input">
          <label>Height (cm)*</label>
          <input
            value={height}
            onChange={(event) => {
              setHeight(event.target.value);
            }}
            type="number"
          />
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
            setModal(false);
            localStorage.setItem("modal", "Open");
            localStorage.setItem("age", age);
            localStorage.setItem("gender", gender);
            localStorage.setItem("weight", weight);
            localStorage.setItem("height", height);
            window.location.reload();
          }
        }}
        className="save-modal-data-btn"
      >
        Save
      </button>
    </ModalComponent>
  );
}
