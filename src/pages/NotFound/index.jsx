import React from "react";
import { useTitle } from "../../hooks/useTitle";

import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  useTitle("404 Page Not Found");
  const navigate = useNavigate();
  return (
    <div className="not__found">
      <h1>
        4<span>0</span>4
      </h1>
      <h3>Oops Page not Found</h3>
      <p>It seems you are lost</p>
      <p>You have ventured where no man has dared venture before</p>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

