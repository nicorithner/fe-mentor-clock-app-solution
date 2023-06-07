import { createContext, useContext } from "react";

export type DisplayState = {
  displayExtraInfo: boolean;
  setDisplayExtraInfo: (c: boolean) => void;
};
export const DisplayInfoContext = createContext<DisplayState>({
  displayExtraInfo: false,
  setDisplayExtraInfo: () => {},
});
export const useDisplayInfoContext = () => useContext(DisplayInfoContext);
