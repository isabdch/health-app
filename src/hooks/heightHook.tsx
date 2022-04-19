import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type HeightProviderProps = {
  children: ReactNode;
};

export const heightContext = createContext<
  [number, Dispatch<SetStateAction<number>>]
>([0, () => {}]);

export function HeightProvider({ children }: HeightProviderProps) {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {}, []);

  return (
    <heightContext.Provider value={[height, setHeight]}>
      {children}
    </heightContext.Provider>
  );
}
