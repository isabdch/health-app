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
  [number | string, Dispatch<SetStateAction<number | string>>]
>(["", () => {}]);

export function WeightProvider({ children }: WeightProviderProps) {
  const [weight, setWeight] = useState<number | string>("");

  useEffect(() => {}, []);

  return (
    <weightContext.Provider value={[weight, setWeight]}>
      {children}
    </weightContext.Provider>
  );
}
