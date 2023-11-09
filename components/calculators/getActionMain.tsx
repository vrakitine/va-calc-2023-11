import vaScript from "../../public/vaop/va-scripts/vaScriptBase10_v1.json";
import { actionFunctions } from "./actionFunctions";
import {Text,VStack,HStack,Stack,} from "@chakra-ui/react";
import { useState, useEffect} from "react";
import { VaScriptAction } from "../../types/types";
import { Direction } from "../../types/types";
import { ActionMap } from "../../types/types";
import { ActionMapping } from "../../types/types";
import ActionList from "./ActionList";
import ActionButton from "./ActionButton";


function getActionMain(
  direction: Direction,
  currentAction: string,
  setCurrentAction: React.Dispatch<React.SetStateAction<string>>,
  previousAction: string,
  setPreviousAction: React.Dispatch<React.SetStateAction<string>>,
  directionAction: string,
  setDirectionAction: React.Dispatch<React.SetStateAction<string>>,
  operandOne: string,
  setOperandOne: React.Dispatch<React.SetStateAction<string>>,
  operandTwo: string,
  setOperandTwo: React.Dispatch<React.SetStateAction<string>>,
  result: string,
  setResult: React.Dispatch<React.SetStateAction<string>>,
  warningMsg: string,
  setWarningMsg: React.Dispatch<React.SetStateAction<string>>
  ): void {
    console.log("Click!!!");
    console.log("[-getActionMain-]");
    console.log("[" + direction + "]");
    console.log("[" + currentAction + "]");
    
    setWarningMsg("");

    const nextAction = vaScript[currentAction][direction] as VaScriptAction;

    // var temp = getActionsBlockFromScriptByAction(nextAction);
    // const actionLines = temp.split("\n");
    // setActionsLines(actionLines);
    // setActionsText(temp);

    if (vaScript.hasOwnProperty(nextAction)) {
      console.log("currentAction in case:[" + nextAction + "]");

      actionFunctions[nextAction](operandOne, operandTwo, setOperandOne, setOperandTwo, setResult, setWarningMsg);

      
    } else {
      switch (nextAction) {
        default:
          console.log("Error: [" + nextAction + "]");
      }

      console.log("Stop --> [" + nextAction + "]");
    }

    setDirectionAction(direction);
    setPreviousAction(currentAction);
    setCurrentAction(nextAction);


    // Specify the path to the text file in the public folder currentAction
    // const filePath = './Actions/' + nextAction + '.tsx';

    // fetch(filePath)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch file content');
    //     }
    //     return response.text();
    //   })
    //   .then((text) => {
    //     setFileContent(text);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching file content:', error);
    //   });
  }

  export default getActionMain;

 