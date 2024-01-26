import React from "react";
import { ModeToggle } from "./DarkModeToggle";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="p-2">
      <ModeToggle />
    </div>
  );
};

export default Header;
