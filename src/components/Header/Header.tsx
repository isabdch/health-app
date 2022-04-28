import { Link, useLocation } from "react-router-dom";
import { HeaderComponent } from "./HeaderStyles";
import { LogoImg } from "../../svgs/LogoImg";

export function Header() {
  const location = useLocation();

  return (
    <HeaderComponent>
      <div className="logo">
        <LogoImg />
        <h1
          className={
            location.pathname.slice(0, 8) === "/recipes"
              ? "recipes-section-title"
              : ""
          }
        >
          healthy
        </h1>
      </div>

      <div className="buttons">
        <Link to="/health-app/home">
          <button
            className={
              location.pathname === "/health-app/home" ||
              (location.pathname.length >= 11 && location.pathname.length <= 12)
                ? "fitness-section-btn checked"
                : "fitness-section-btn"
            }
          >
            <i className="fa-solid fa-heart-pulse"></i>
          </button>
        </Link>

        <Link to="/health-app/recipes/">
          <button
            className={
              location.pathname === "/health-app/recipes/"
                ? "food-section-btn checked"
                : "food-section-btn"
            }
          >
            <i className="fa-duotone fa-carrot"></i>
          </button>
        </Link>
      </div>

      <a
        className="credits"
        href="https://github.com/isabdch"
        target="_blank"
        rel="noreferrer"
      >
        by isabdch
      </a>
    </HeaderComponent>
  );
}
