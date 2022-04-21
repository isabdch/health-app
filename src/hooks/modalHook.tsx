import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type ModalProviderProps = {
  children: ReactNode;
};

export const modalContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("modal") != null) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, []);

  return (
    <modalContext.Provider value={[modal, setModal]}>
      {children}
    </modalContext.Provider>
  );
}
