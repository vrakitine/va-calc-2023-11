import React from "react";
import { Button , ButtonProps } from "@chakra-ui/react";
import { Direction } from "../../types/types";

interface ActionButtonProps {
        variantB?: string;
        colorB: string;
        label: string;
        direction: Direction;
        onClick: (direction: Direction) => void;
        onMouseOver: (direction: Direction) => void;
        onMouseLeave: () => void;    
}

function ActionButton({
    variantB = "solid",
    colorB,
    label,
    direction,
    onClick,
    onMouseOver,
    onMouseLeave,
  }: ActionButtonProps ) {
    return (
        <Button
            variant={variantB}
            colorScheme={colorB}
            onClick={() => onClick(direction)}
            onMouseOver={() => onMouseOver(direction)} 
            onMouseLeave={() => onMouseLeave()} 
        >
            {label}
        </Button>
    );
  }

export default ActionButton;