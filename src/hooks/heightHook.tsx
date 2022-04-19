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
  [number | string, Dispatch<SetStateAction<number | string>>]
>(["", () => {}]);

export function HeightProvider({ children }: HeightProviderProps) {
  const [height, setHeight] = useState<number | string>("");

  useEffect(() => {}, []);

  return (
    <heightContext.Provider value={[height, setHeight]}>
      {children}
    </heightContext.Provider>
  );
}
