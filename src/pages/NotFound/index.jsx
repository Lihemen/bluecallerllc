import React from "react";
import { useTitle } from "../../hooks/useTitle";

export const NotFound = () => {
  useTitle("404 Page Not Found");
  return <div>NotFound</div>;
};

