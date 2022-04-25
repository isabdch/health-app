import { Modal } from "./Modal/Modal";
import { BmiSection } from "./BmiSection/BmiSection";
import { UserDataSection } from "./UserDataSection/UserDataSection";
import { ExtraInfoSection } from "./ExtraInfoSection/ExtraInfoSection";
import { HomeMain } from "./HomeStyles";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    document.title = "healthy | home";
  }, []);

  return (
    <HomeMain>
      <Modal />
      <BmiSection />
      <UserDataSection />
      <ExtraInfoSection />
    </HomeMain>
  );
}
