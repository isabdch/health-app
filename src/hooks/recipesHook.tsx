import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type RecipesProviderProps = {
  children: ReactNode;
};

type RecipesType = {
  id: number;
  image: string;
  imageType: string;
  title: string;
};

export type RecipesResultType = {
  results: RecipesType[];
  offset: number;
  number: number;
  totalResults: number;
};

export const recipesContext = createContext<
  [
    {
      results: RecipesType[];
      offset: number;
      number: number;
      totalResults: number;
    },
    Dispatch<SetStateAction<RecipesResultType>>
  ]
>([
  {
    results: [],
    offset: 0,
    number: 0,
    totalResults: 0,
  },
  () => {},
]);

export function RecipesProvider({ children }: RecipesProviderProps) {
  const [recipes, setRecipes] = useState<RecipesResultType>({
    results: [],
    offset: 0,
    number: 0,
    totalResults: 0,
  });

  return (
    <recipesContext.Provider value={[recipes, setRecipes]}>
      {children}
    </recipesContext.Provider>
  );
}
