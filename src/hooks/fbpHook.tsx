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
  neckFbp: [number, Dispatch<SetStateAction<number>>];
  waistFbp: [number, Dispatch<SetStateAction<number>>];
  hipFbp: [number, Dispatch<SetStateAction<number>>];
};

export const fbpContext = createContext<ProviderValue>({
  neckFbp: [0, () => {}],
  waistFbp: [0, () => {}],
  hipFbp: [0, () => {}],
});

export function FbpProvider({ children }: FbpProviderProps) {
  const [neck, setNeck] = useState<number>(0);
  const [waist, setWaist] = useState<number>(0);
  const [hip, setHip] = useState<number>(0);

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
