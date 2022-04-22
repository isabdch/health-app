import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type BmiProviderProps = {
  children: ReactNode;
};

export const bmiContext = createContext<
  [number, Dispatch<SetStateAction<number>>]
>([0, () => {}]);

export function BmiProvider({ children }: BmiProviderProps) {
  const [bmi, setBmi] = useState<number>(0);

  return (
    <bmiContext.Provider value={[bmi, setBmi]}>{children}</bmiContext.Provider>
  );
}
