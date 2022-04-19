import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type FbpProviderProps = {
  children: ReactNode;
};

type ProviderValue = {
  neckFbp: [number | string, Dispatch<SetStateAction<number | string>>];
  waistFbp: [number | string, Dispatch<SetStateAction<number | string>>];
  hipFbp: [number | string, Dispatch<SetStateAction<number | string>>];
};

export const fbpContext = createContext<ProviderValue>({
  neckFbp: ["", () => {}],
  waistFbp: ["", () => {}],
  hipFbp: ["", () => {}],
});

export function FbpProvider({ children }: FbpProviderProps) {
  const [neck, setNeck] = useState<number | string>("");
  const [waist, setWaist] = useState<number | string>("");
  const [hip, setHip] = useState<number | string>("");

  useEffect(() => {}, []);

  return (
    <fbpContext.Provider
      value={{
        neckFbp: [neck, setNeck],
        waistFbp: [waist, setWaist],
        hipFbp: [hip, setHip],
      }}
    >
      {children}
    </fbpContext.Provider>
  );
}
