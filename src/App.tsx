import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Page404 } from "./components/Page404/Page404";
import { Recipe } from "./components/Recipe/Recipe";
import { RecipesSection } from "./components/RecipesSection/RecipesSection";
import { AgeProvider } from "./hooks/ageHook";
import { BmiProvider } from "./hooks/bmiHook";
import { FbpProvider } from "./hooks/fbpHook";
import { GenderProvider } from "./hooks/genderHook";
import { HeightProvider } from "./hooks/heightHook";
import { ModalProvider } from "./hooks/modalHook";
import { WeightProvider } from "./hooks/weightHook";
import { globalStyles } from "./styles/globalStyles";

export default function App() {
  globalStyles();

  return (
    <HelmetProvider>
      <ModalProvider>
        <AgeProvider>
          <GenderProvider>
            <WeightProvider>
              <HeightProvider>
                <BmiProvider>
                  <FbpProvider>
                    <BrowserRouter>
                      <Header />
                      <Routes>
                        <Route path="health-app">
                          <Route index element={<Home />} />
                          <Route path="home" element={<Home />} />
                          <Route path="recipes">
                            <Route index element={<RecipesSection />} />
                            <Route path=":recipe" element={<Recipe />} />
                          </Route>
                          <Route path="*" element={<Page404 />} />
                        </Route>
                      </Routes>
                    </BrowserRouter>
                  </FbpProvider>
                </BmiProvider>
              </HeightProvider>
            </WeightProvider>
          </GenderProvider>
        </AgeProvider>
      </ModalProvider>
    </HelmetProvider>
  );
}
