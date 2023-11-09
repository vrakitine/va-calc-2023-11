import vaScript from "../../public/vaop/va-scripts/vaScriptBase10_v1.json";
import {Text,VStack,HStack,Stack,} from "@chakra-ui/react";
import { useState, useEffect} from "react";
import { VaScriptAction } from "../../types/types";
import { Direction } from "../../types/types";
import { ActionMap } from "../../types/types";
import { ActionMapping } from "../../types/types";
import ActionList from "./ActionList";
import ActionButton from "./ActionButton";
import Action_show_result from "../../public/Actions/Action_show_result";
import Action_clear from "../../public/Actions/Action_clear";
import Action_init from "../../public/Actions/Action_init";
import Action_operand_1_attach_zero from "../../public/Actions/Action_operand_1_attach_zero";
import Action_operand_1_attach_one from "../../public/Actions/Action_operand_1_attach_one";
import Action_operand_1_attach_two from "../../public/Actions/Action_operand_1_attach_two";
import Action_operand_1_attach_three from "../../public/Actions/Action_operand_1_attach_three";
import Action_operand_1_attach_four from "../../public/Actions/Action_operand_1_attach_four";
import Action_operand_1_attach_five from "../../public/Actions/Action_operand_1_attach_five";
import Action_operand_1_attach_six from "../../public/Actions/Action_operand_1_attach_six";
import Action_operand_1_attach_seven from "../../public/Actions/Action_operand_1_attach_seven";
import Action_operand_1_attach_eight from "../../public/Actions/Action_operand_1_attach_eight";
import Action_operand_1_attach_nine from "../../public/Actions/Action_operand_1_attach_nine";
import Action_waiting_for_operand_2_for_plus from "../../public/Actions/Action_waiting_for_operand_2_for_plus";
import Action_operand_2_attach_zero from "../../public/Actions/Action_operand_2_attach_zero";
import Action_operand_2_attach_one from "../../public/Actions/Action_operand_2_attach_one";
import Action_operand_2_attach_two from "../../public/Actions/Action_operand_2_attach_two";
import Action_operand_2_attach_three from "../../public/Actions/Action_operand_2_attach_three";
import Action_operand_2_attach_four from "../../public/Actions/Action_operand_2_attach_four";
import Action_operand_2_attach_five from "../../public/Actions/Action_operand_2_attach_five";
import Action_operand_2_attach_six from "../../public/Actions/Action_operand_2_attach_six";
import Action_operand_2_attach_seven from "../../public/Actions/Action_operand_2_attach_seven";
import Action_operand_2_attach_eight from "../../public/Actions/Action_operand_2_attach_eight";
import Action_operand_2_attach_nine from "../../public/Actions/Action_operand_2_attach_nine";
import Action_warning_10__Second_operand_is_missing from "../../public/Actions/Action_warning_10__Second_operand_is_missing";
import { callbackify } from "util";

// interface getActionProps {
//     direction: Direction;
//     currentAction: string;
//     setCurrentAction: React.Dispatch<React.SetStateAction<string>>;
//     previousAction: string;
//     setPreviousAction: React.Dispatch<React.SetStateAction<string>>;
//     directionAction: string;
//     setDirectionAction: React.Dispatch<React.SetStateAction<string>>;
//     operandOne: string;
//     setOperandOne: React.Dispatch<React.SetStateAction<string>>;
//     operandTwo: string;
//     setOperandTwo: React.Dispatch<React.SetStateAction<string>>;
//     result: string;
//     setResult: React.Dispatch<React.SetStateAction<string>>;
//     warningMsg: string;
//     setWarningMsg: React.Dispatch<React.SetStateAction<string>>;
// }



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
    

 
  const actionFunctions: Record<VaScriptAction, Function> = {
    Action_init,
    Action_operand_1_attach_zero,
    Action_operand_1_attach_one,
    Action_operand_1_attach_two,
    Action_operand_1_attach_three,
    Action_operand_1_attach_four,
    Action_operand_1_attach_five,
    Action_operand_1_attach_six,
    Action_operand_1_attach_seven,
    Action_operand_1_attach_eight,
    Action_operand_1_attach_nine,
    Action_waiting_for_operand_2_for_plus,
    Action_operand_2_attach_zero,
    Action_operand_2_attach_one,
    Action_operand_2_attach_two,
    Action_operand_2_attach_three,
    Action_operand_2_attach_four,
    Action_operand_2_attach_five,
    Action_operand_2_attach_six,
    Action_operand_2_attach_seven,
    Action_operand_2_attach_eight,
    Action_operand_2_attach_nine,
    Action_warning_10__Second_operand_is_missing,
    Action_clear,
    Action_show_result
  };

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

 