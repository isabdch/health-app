import { HeaderComponent } from "./HeaderStyles";

export function Header() {
  return (
    <HeaderComponent>
      <div className="logo">
          <h1>Fitness Zone</h1>
      </div>  
      <button className="fitness-section-btn">
        <i className="fa-duotone fa-dumbbell"></i>
      </button>
      <button className="food-section-btn">
        <i className="fa-duotone fa-carrot"></i>
      </button>
    </HeaderComponent>
  );
}
