import { Button } from "@/components";
import { ReactElement } from "react";

import { useNavigate } from "react-router-dom";

const Error = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <div>
      THis is error page, to go back click on this button
      <Button onClick={() => navigate("/")}>Go back to home page</Button>
    </div>
  );
};

export default Error;
