import { Modal } from "./Modal/Modal";
import { BmiSection } from "./BmiSection/BmiSection";
import { UserDataSection } from "./UserDataSection/UserDataSection";
import { ExtraInfoSection } from "./ExtraInfoSection/ExtraInfoSection";
import { HomeMain } from "./HomeStyles";

export function Home() {
  return (
    <HomeMain>
      <Modal />
      <BmiSection />
      <UserDataSection />
      <ExtraInfoSection />
    </HomeMain>
  );
}
