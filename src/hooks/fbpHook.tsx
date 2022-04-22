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
  neckFbp: [string, Dispatch<SetStateAction<string>>];
  waistFbp: [string, Dispatch<SetStateAction<string>>];
  hipFbp: [string, Dispatch<SetStateAction<string>>];
};

export const fbpContext = createContext<ProviderValue>({
  neckFbp: ["", () => {}],
  waistFbp: ["", () => {}],
  hipFbp: ["", () => {}],
});

export function FbpProvider({ children }: FbpProviderProps) {
  const [neck, setNeck] = useState<string>("");
  const [waist, setWaist] = useState<string>("");
  const [hip, setHip] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("neck") != null) {
      setNeck(localStorage.getItem("neck")!);
    }

    if (localStorage.getItem("waist") != null) {
      setWaist(localStorage.getItem("waist")!);
    }

    if (localStorage.getItem("hip") != null) {
      setHip(localStorage.getItem("hip")!);
    }
  }, []);

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
