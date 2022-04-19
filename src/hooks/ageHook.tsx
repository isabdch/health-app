import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type AgeProviderProps = {
  children: ReactNode;
};

export const ageContext = createContext<
  [number | string, Dispatch<SetStateAction<number | string>>]
>(["", () => {}]);

export function AgeProvider({ children }: AgeProviderProps) {
  const [age, setAge] = useState<number | string>("");

  useEffect(() => {}, []);

  return (
    <ageContext.Provider value={[age, setAge]}>{children}</ageContext.Provider>
  );
}
