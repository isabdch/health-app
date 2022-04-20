import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type ModalProviderProps = {
  children: ReactNode;
};

export const modalContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <modalContext.Provider value={[isModalOpen, setIsModalOpen]}>
      {children}
    </modalContext.Provider>
  );
}
