import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type WeightProviderProps = {
  children: ReactNode;
};

export const weightContext = createContext<
  [string, Dispatch<SetStateAction<string>>]
>(["", () => {}]);

export function WeightProvider({ children }: WeightProviderProps) {
  const [weight, setWeight] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("weight") != null) {
      setWeight(localStorage.getItem("weight")!);
    }
  }, []);

  return (
    <weightContext.Provider value={[weight, setWeight]}>
      {children}
    </weightContext.Provider>
  );
}
