import React from "react";
import { Button } from "@chakra-ui/react";
import { Direction } from "../../types/types";

interface ActionButtonWrapperProps {
  colorB: string;
  label: string;
  direction: Direction;
  onClickHandler: (direction: Direction) => void;
  onMouseOverHandler: (direction: Direction) => void;
  onMouseLeaveHandler: () => void;
}

function ActionButtonWrapper({
  colorB,
  label,
  direction,
  onClickHandler,
  onMouseOverHandler,
  onMouseLeaveHandler,
}: ActionButtonWrapperProps) {
  const handleClick = () => {
    onClickHandler(direction);
  };

  const handleMouseOver = () => {
    onMouseOverHandler(direction);
  };

  const handleMouseLeave = () => {
    onMouseLeaveHandler();
  };

  return (
    <Button
      variant="solid"
      colorScheme={colorB}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </Button>
  );
}

export default ActionButtonWrapper;
