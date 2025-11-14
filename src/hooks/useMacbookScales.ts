import { useMemo } from "react";
import { MACBOOK_SCALES } from "../constants";

export const useMacbookScales = (isMobile: boolean) => {
  return useMemo(
    () => ({
      macbook14Scale: isMobile
        ? MACBOOK_SCALES.MOBILE.INCH_14
        : MACBOOK_SCALES.DESKTOP.INCH_14,
      macbook16Scale: isMobile
        ? MACBOOK_SCALES.MOBILE.INCH_16
        : MACBOOK_SCALES.DESKTOP.INCH_16,
    }),
    [isMobile]
  );
};
