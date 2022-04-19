import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type GenderProviderProps = {
  children: ReactNode;
};

export const genderContext = createContext<
  [string | null, Dispatch<SetStateAction<string | null>>]
>([null, () => {}]);

export function GenderProvider({ children }: GenderProviderProps) {
  const [gender, setGender] = useState<string | null>(null);

  useEffect(() => {
    if (localStorage.getItem("gender") != null) {
      setGender(localStorage.getItem("gender"));
    }
  }, []);

  return (
    <genderContext.Provider value={[gender, setGender]}>
      {children}
    </genderContext.Provider>
  );
}
