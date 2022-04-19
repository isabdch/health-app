import { useContext, useState } from "react";
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
  const [pickGender, setPickGender] = useState<string | null>(null);

  const [age, setAge] = useContext(ageContext);
  const [gender, setGender] = useContext(genderContext);
  const [weight, setWeight] = useContext(weightContext);
  const [height, setHeight] = useContext(heightContext);
  const { neckFbp, waistFbp, hipFbp } = useContext(fbpContext);
  const [neck, setNeck] = neckFbp;
  const [waist, setWaist] = waistFbp;
  const [hip, setHip] = hipFbp;

  return (
    <ModalComponent
      className="modal-content"
      overlayClassName="modal-overlay"
      isOpen={isModalOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Please enter your data in the fields below"
    >
      <h1>Please enter your data in the fields below:</h1>

      <form>
        <div className="modal-input age-input">
          <label>Age*</label>
          <input type="number" />
        </div>

        <div className="gender-input">
          <label>Gender*</label>
          <div className="gender-container-btns">
            <button
              className="checked"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <i className="fa-regular fa-venus"></i>
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <i className="fa-regular fa-mars"></i>
            </button>
          </div>
        </div>

        <div className="modal-input weight-input">
          <label>Weight (kg)*</label>
          <input type="number" />
        </div>

        <div className="modal-input height-input">
          <label>Height (cm)*</label>
          <input type="number" />
        </div>

        <div className="fbp-container">
          <div className="fbp-input neck-input">
            <label>Neck (cm)</label>
            <input type="number" />
          </div>

          <div className="fbp-input waist-input">
            <label>Waist (cm)</label>
            <input type="number" />
          </div>

          <div className="fbp-input hip-input">
            <label>Hip (cm)</label>
            <input type="number" />
          </div>
        </div>
      </form>

      <button
        onClick={() => {
          setIsModalOpen(false);
        }}
        className="save-modal-data-btn"
      >
        Save
      </button>
    </ModalComponent>
  );
}
