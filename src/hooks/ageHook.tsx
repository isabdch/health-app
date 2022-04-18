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
  [number, Dispatch<SetStateAction<number>>]
>([0, () => {}]);

export function AgeProvider({ children }: AgeProviderProps) {
  const [age, setAge] = useState<number>(0);

  useEffect(() => {}, []);

  return (
    <ageContext.Provider value={[age, setAge]}>{children}</ageContext.Provider>
  );
}
