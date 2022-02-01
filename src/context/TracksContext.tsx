import React, { createContext } from "react";
import useTracks, { TracksProps } from "../customHooks/useTracks";

export const TracksContext = createContext<TracksProps>(null!);

const TracksProvider = ({ children }: { children: React.ReactNode }) => {
  const { track, isLoading } = useTracks();

  return (
    <TracksContext.Provider value={{ track, isLoading }}>
      {children}
    </TracksContext.Provider>
  )
}

export { TracksProvider };