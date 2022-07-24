import { useEffect } from "react";

export const useOnceEffect = (cb, deps) => {
  let ran = false;
  useEffect(() => {
    if (ran) return;
    cb();
    return () => (ran = true);
  }, deps);
};