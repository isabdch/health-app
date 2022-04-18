import { useState } from "react";
import ReactModal from "react-modal";
import { ModalComponent } from "./ModalStyles";

ReactModal.setAppElement("#root");

export function Modal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <ModalComponent
      className="modal-content"
      overlayClassName="modal-overlay"
      isOpen={isModalOpen}
    >
      <h1>Please enter your data in the fields below:</h1>

      <form>
        <div className="modal-input age-input">
          <label>Age</label>
          <input type="number" name="" id="" />
        </div>

        <div className="gender-input">
          <label>Gender</label>
          <div className="gender-container-btns">
            <button>
              <i className="fa-regular fa-venus"></i>
            </button>
            <button>
              <i className="fa-regular fa-mars"></i>
            </button>
          </div>
        </div>

        <div className="modal-input weight-input">
          <label>Weight</label>
          <input type="number" name="" id="" />
        </div>

        <div className="modal-input height-input">
          <label>Height</label>
          <input type="number" name="" id="" />
        </div>

        <div className="fbp-container">
          <div className="fbp-input neck-input">
            <label>Neck</label>
            <input type="number" name="" id="" />
          </div>

          <div className="fbp-input waist-input">
            <label>Waist</label>
            <input type="number" name="" id="" />
          </div>

          <div className="fbp-input hip-input">
            <label>Hip</label>
            <input type="number" name="" id="" />
          </div>
        </div>
      </form>

      <button className="save-modal-data-btn">Save</button>
    </ModalComponent>
  );
}
