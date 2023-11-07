import vaScript from "../../public/vaop/va-scripts/vaScriptBase10_v1.json";
import getAction from "./getAction";
import {Text,VStack,HStack,Stack,} from "@chakra-ui/react";
import { useState, useEffect} from "react";
import { VaScriptAction } from "../../types/types";
import { Direction } from "../../types/types";
import { ActionMap } from "../../types/types";
import { ActionMapping } from "../../types/types";
import ActionList from "./ActionList";
import ActionButton from "./ActionButton";

import FileContentPopup from "./FileContentPopup";


function CalcBase10() {

  const [currentAction, setCurrentAction] = useState<VaScriptAction>("Action_init");
	const [previousAction, setPreviousAction] = useState<VaScriptAction>("Action_init");
	const [directionAction, setDirectionAction] = useState<Direction>("Direction_init");
	const [nextDirectionAction, setNextDirectionAction] = useState<Direction>("nextDirection_init");
	const [operandOne, setOperandOne] = useState<string>("");
	const [operandTwo, setOperandTwo] = useState<string>("");
	const [result, setResult] = useState<string>("");
	const [warningMsg, setWarningMsg] = useState<string>("");
	const [actionsText, setActionsText] = useState<string>("actionsText_init");
	const [actionLines, setActionsLines] = useState<string[]>([]);
  const { getActionsBlockFromScriptByAction } = require('./calcUtils');

	const handleButtonClick = (inputData: Direction): void => {
		
  const next = getAction(direction, ...);


	  };

  const handleMouseOver = (inputData: Direction): void => {
      setNextDirectionAction(inputData);
      };
  
	const handleMouseLeave = (): void => {
		setNextDirectionAction("nextDirection_init");
	  };


  return (
    // @ts-ignore
    <VStack p={2}>
      <Text fontSize="35px" color="gray">
        va-calculator (base 10) 
      </Text>
      <div className="">
          <Text as="i" fontSize="12px" color="blue">
                <div>
                  <button onClick={openPopup}> 
                    <strong>{currentAction}</strong>&nbsp;&nbsp;is completed
                  </button>
                    {showPopup && (
                      <FileContentPopup content={fileContent} onClose={closePopup} />
                    )}
                </div>
          </Text>
        </div>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <div>
          <Text fontSize="25px" color="gray">
            [{operandOne}] + [{operandTwo}] = [{result}]
          </Text>
          <Text fontSize="25px" color="black">
            &nbsp;
          </Text>
          <Text as="i" fontSize="16px" color="red">
            {warningMsg}
          </Text>

          <Text fontSize="25px" color="red">
            &nbsp;
          </Text>
          <VStack spacing={3} align="start">
            <HStack spacing={4}>
              <ActionButton
                colorB="blue"
                label="[ 1 ]"
                direction="Direction_one"
                onClick={(direction: Direction) => handleButtonClick(direction)}
                //onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="blue"
                label="[ 2 ]"
                direction="Direction_two"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="blue"
                label="[ 3 ]"
                direction="Direction_three"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
            </HStack>

            <HStack spacing={4}>
              <ActionButton
                colorB="blue"
                label="[ 4 ]"
                direction="Direction_four"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="blue"
                label="[ 5 ]"
                direction="Direction_five"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="blue"
                label="[ 6 ]"
                direction="Direction_six"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
            </HStack>

            <HStack spacing={4}>
              <ActionButton
                colorB="blue"
                label="[ 7 ]"
                direction="Direction_seven"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="blue"
                label="[ 8 ]"
                direction="Direction_eight"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="blue"
                label="[ 9 ]"
                direction="Direction_nine"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
            </HStack>

            <HStack spacing={4}>
              <ActionButton
                variantB="outline"
                colorB="teal"
                label="[ 0 ]"
                direction="Direction_zero"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="gray"
                label="[ + ]"
                direction="Direction_plus"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="gray"
                label="[ = ]"
                direction="Direction_equal"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
            </HStack>

            <HStack spacing={4}>
              <ActionButton
                colorB="gray"
                label="[ CA ]"
                direction="Direction_clear"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
            </HStack>
          </VStack>

          {/* <p>
        <img src="v-agent_32x32.png" alt="v-agent" width="32" height="32" /> &nbsp;  Powered by VAOP  
        </p> */}
          {/* <p>
            <small>previousAction:</small>[{previousAction}] ==&gt;{" "}
            <small>directionAction:</small>[{directionAction}] ==&gt;{" "}
            <small>currentAction:</small>[{currentAction}]
          </p> */}
        </div>
        <div className="">
          <Text as="i" fontSize="12px" color="blue">
            <ActionList actionData={actionLines} nextDirectionAction={nextDirectionAction} />
          </Text>
        </div>
      </Stack>
    </VStack>
  );
}


export default CalcBase10;