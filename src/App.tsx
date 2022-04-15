import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FoodSection } from "./components/FoodSection/FoodSection";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Page404 } from "./components/Page404/Page404";
import { globalStyles } from "./styles/globalStyles";

export default function App() {
  globalStyles();

  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="food" element={<FoodSection />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}