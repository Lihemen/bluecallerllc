import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (error) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, search]);
}
