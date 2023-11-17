import getActionMain from "./getActionMain";
import {Text,VStack,HStack,Stack,} from "@chakra-ui/react";
import { useState, useEffect} from "react";
import { VaScriptAction } from "../../types/types";
import { Direction } from "../../types/types";
import { ActionMap } from "../../types/types";
import { ActionMapping } from "../../types/types";
import ActionList from "./ActionList";
import ActionButton from "./ActionButton";
import buttonsData from "./buttonsData";
import ActionButtonWrapper from "./ActionButtonWrapper";

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

  const { direction_digits } = buttonsData;

  const [showPopup, setShowPopup] = useState(false);
  const [fileContent, setFileContent] = useState(""); 
   // Function to open the popup
   const openPopup = () => {setShowPopup(true);};
  // Function to close the popup
  const closePopup = () => {setShowPopup(false);};


	//const [actionsText, setActionsText] = useState<string>("actionsText_init");
	//const [actionLines, setActionsLines] = useState<string[]>([]);

  function getAction(direction: Direction): void {
    getActionMain(direction, 
        currentAction, setCurrentAction as React.Dispatch<React.SetStateAction<string>>,
        previousAction, setPreviousAction as React.Dispatch<React.SetStateAction<string>>,
        directionAction, setDirectionAction as React.Dispatch<React.SetStateAction<string>>,
        operandOne, setOperandOne,
        operandTwo, setOperandTwo,
        result, setResult,
        warningMsg, setWarningMsg,
        fileContent, setFileContent as React.Dispatch<React.SetStateAction<string>>
    );
  }


  // State to track the last button click timestamp
  const [lastButtonClickTimestamp, setLastButtonClickTimestamp] = useState(0);

  // Function to handle button click
  const handleButtonClick = (direction: Direction) => {
    setLastButtonClickTimestamp(Date.now()); // Update the timestamp on button click
    getAction(direction);
  };

  // Function to perform actions after a period of inactivity (3 seconds)
  const performAfterInactivity = () => {
    console.log("===> performAfterInactivity");
    getAction('Direction_timeout3');
  };

  // Effect to run the performAfterInactivity function periodically
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    // Set a timeout to trigger the inactivity check
    if(direction_digits.indexOf(directionAction) !== -1){
      timeoutId = setTimeout(performAfterInactivity, 3000);
    }else{
      timeoutId = setTimeout(performAfterInactivity, 100000000);
    }
    
    return () => {
      // Cleanup on component unmount
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastButtonClickTimestamp]);

  const handleMouseOver = (inputData: Direction): void => {
      setNextDirectionAction(inputData);
      };
  
	const handleMouseLeave = (): void => {
		setNextDirectionAction("nextDirection_init");
	  };

    const generateActionButtonWrapper = (colorB: string, label: string, direction: Direction) => (
      <ActionButtonWrapper
        colorB={colorB}
        label={label}
        direction={direction}
        onClickHandler={handleButtonClick}
        onMouseOverHandler={handleMouseOver}
        onMouseLeaveHandler={handleMouseLeave}
      />
    );

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
              {generateActionButtonWrapper("blue", "[ 1 ]", "Direction_one")}
              {generateActionButtonWrapper("blue", "[ 2 ]", "Direction_two")}
              {generateActionButtonWrapper("blue", "[ 3 ]", "Direction_three")}
            </HStack>

            <HStack spacing={4}>
              {generateActionButtonWrapper("blue", "[ 4 ]", "Direction_four")}
              {generateActionButtonWrapper("blue", "[ 5 ]", "Direction_five")}
              {generateActionButtonWrapper("blue", "[ 6 ]", "Direction_six")}
            </HStack>

            <HStack spacing={4}>
              {generateActionButtonWrapper("blue", "[ 7 ]", "Direction_seven")}
              {generateActionButtonWrapper("blue", "[ 8 ]", "Direction_eight")}
              {generateActionButtonWrapper("blue", "[ 9 ]", "Direction_nine")}
            </HStack>

            <HStack spacing={4}>
              {generateActionButtonWrapper("blue", "[ 0 ]", "Direction_zero")}
              {generateActionButtonWrapper("gray", "[ + ]", "Direction_plus")}
              {generateActionButtonWrapper("gray", "[ = ]", "Direction_equal")}
            </HStack>

            <HStack spacing={4}>
              {generateActionButtonWrapper("gray", "[ CA ]", "Direction_clear")}
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
        {/* <div className="">
          <Text as="i" fontSize="12px" color="blue">
            <ActionList actionData={actionLines} nextDirectionAction={nextDirectionAction} />
          </Text>
        </div> */}
      </Stack>
    </VStack>
  );
}


export default CalcBase10;
