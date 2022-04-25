import { Link, useLocation } from "react-router-dom";
import { HeaderComponent } from "./HeaderStyles";
import { LogoImg } from "../../assets/LogoImg";

export function Header() {
  const location = useLocation();

  return (
    <HeaderComponent>
      <div className="logo">
        <LogoImg />
        <h1>healthy</h1>
      </div>

      <div className="buttons">
        <Link to="/">
          <button
            className={
              location.pathname === "/"
                ? "fitness-section-btn checked"
                : "fitness-section-btn"
            }
          >
            <i className="fa-solid fa-heart-pulse"></i>
          </button>
        </Link>

        <Link to="/recipes/search">
          <button
            className={
              location.pathname === "/recipes/search"
                ? "food-section-btn checked"
                : "food-section-btn"
            }
          >
            <i className="fa-duotone fa-carrot"></i>
          </button>
        </Link>
      </div>
    </HeaderComponent>
  );
}
