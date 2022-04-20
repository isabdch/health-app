import { UserDataSectionComponent } from "./UserDataSectionStyles";

export function UserDataSection() {
  return (
    <UserDataSectionComponent>
      <div className="container">
        <h1>User data</h1>

        <form>
          <div className="user-section-modal-input user-section-age-input">
            <label>Age</label>
            <input type="number" />
          </div>

          <div className="user-section-gender-input">
            <label>Gender</label>
            <div className="user-section-gender-container-btns">
              <button
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

          <div className="user-section-modal-input user-section-weight-input">
            <label>Weight (kg)</label>
            <input type="number" />
          </div>

          <div className="user-section-modal-input user-section-height-input">
            <label>Height (cm)</label>
            <input type="number" />
          </div>

          <div className="user-section-fbp-container">
            <div className="user-section-fbp-input user-section-neck-input">
              <label>Neck (cm)</label>
              <input type="number" />
            </div>

            <div className="user-section-fbp-input user-section-waist-input">
              <label>Waist (cm)</label>
              <input type="number" />
            </div>

            <div className="user-section-fbp-input user-section-hip-input">
              <label>Hip (cm)</label>
              <input type="number" />
            </div>
          </div>
        </form>

        <div className="save-and-clear-btns">
          <button>Update</button>
          <button>Clear all</button>
        </div>
      </div>
    </UserDataSectionComponent>
  );
}
