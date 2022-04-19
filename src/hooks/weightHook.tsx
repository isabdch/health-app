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
  [number, Dispatch<SetStateAction<number>>]
>([0, () => {}]);

export function WeightProvider({ children }: WeightProviderProps) {
  const [weight, setWeight] = useState<number>(0);

  useEffect(() => {}, []);

  return (
    <weightContext.Provider value={[weight, setWeight]}>
      {children}
    </weightContext.Provider>
  );
}
