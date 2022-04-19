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
  [string, Dispatch<SetStateAction<string>>]
>(["", () => {}]);

export function HeightProvider({ children }: HeightProviderProps) {
  const [height, setHeight] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("height") != null) {
      setHeight(localStorage.getItem("height")!);
    }
  }, []);

  return (
    <heightContext.Provider value={[height, setHeight]}>
      {children}
    </heightContext.Provider>
  );
}
