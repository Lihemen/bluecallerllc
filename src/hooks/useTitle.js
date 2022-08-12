import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    const newTitle = title + " | " + prevTitle.split(" | ")[1];
    document.title = newTitle;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

