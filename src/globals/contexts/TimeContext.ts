import { createContext, useContext } from "react";

export type TimeDisplayState = {
  displayExtraInfo: boolean;
  setDisplayExtraInfo: (c: boolean) => void;
};
export const TimeContext = createContext<TimeDisplayState>({
  displayExtraInfo: false,
  setDisplayExtraInfo: () => {},
});
export const useTimeContext = () => useContext(TimeContext);
