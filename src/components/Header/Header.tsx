import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderComponent } from "./HeaderStyles";
import { LogoImg } from "../../assets/LogoImg";

export function Header() {
  const [checkedBtn, setCheckedBtn] = useState<string>("fitness-section-btn");

  useEffect(() => {
    if (localStorage.getItem("checkedBtn") != null) {
      setCheckedBtn(localStorage.getItem("checkedBtn")!);
    }
  }, []);

  return (
    <HeaderComponent>
      <div className="logo">
        <LogoImg />
        <h1>Healthy</h1>
      </div>

      <div className="buttons">
        <Link to="/">
          <button
            className={
              checkedBtn === "fitness-section-btn"
                ? "fitness-section-btn checked"
                : "fitness-section-btn"
            }
            onClick={() => {
              setCheckedBtn("fitness-section-btn");
              localStorage.setItem("checkedBtn", "fitness-section-btn");
            }}
          >
            <i className="fa-solid fa-heart-pulse"></i>
          </button>
        </Link>

        <Link to="/food">
          <button
            className={
              checkedBtn === "food-section-btn"
                ? "food-section-btn checked"
                : "food-section-btn"
            }
            onClick={() => {
              setCheckedBtn("food-section-btn");
              localStorage.setItem("checkedBtn", "food-section-btn");
            }}
          >
            <i className="fa-duotone fa-carrot"></i>
          </button>
        </Link>
      </div>
    </HeaderComponent>
  );
}
