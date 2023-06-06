import { createContext, useContext } from "react";

export type TimeDisplayState = {
  displayStateContext: boolean;
};
export const TimeContext = createContext<TimeDisplayState>({
  displayStateContext: false,
});
export const useTimeContext = () => useContext(TimeContext);
