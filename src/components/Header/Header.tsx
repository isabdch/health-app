import { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderComponent } from "./HeaderStyles";
import { LogoImg } from "../../assets/LogoImg";

export function Header() {
  const [checkedBtn, setCheckedBtn] = useState<string>("fitness-section-btn");

  return (
    <HeaderComponent>
      <div className="logo">
        <LogoImg />
        <h1>Healthy</h1>
      </div>

      <div className="buttons">
        <button
          className={
            checkedBtn === "fitness-section-btn"
              ? "fitness-section-btn checked"
              : "fitness-section-btn"
          }
          onClick={() => {
            setCheckedBtn("fitness-section-btn");
          }}
        >
          <Link to="/">
            <i className="fa-solid fa-heart-pulse"></i>
          </Link>
        </button>

        <button
          className={
            checkedBtn === "food-section-btn"
              ? "food-section-btn checked"
              : "food-section-btn"
          }
          onClick={() => {
            setCheckedBtn("food-section-btn");
          }}
        >
          <Link to="/food">
            <i className="fa-duotone fa-carrot"></i>
          </Link>
        </button>
      </div>
    </HeaderComponent>
  );
}
