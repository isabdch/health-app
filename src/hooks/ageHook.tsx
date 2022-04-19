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
  [string, Dispatch<SetStateAction<string>>]
>(["", () => {}]);

export function AgeProvider({ children }: AgeProviderProps) {
  const [age, setAge] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("age") != null) {
      setAge(localStorage.getItem("age")!);
    }
  }, []);

  return (
    <ageContext.Provider value={[age, setAge]}>{children}</ageContext.Provider>
  );
}
