// actionFunctions.ts

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
  
  import { VaScriptAction } from "../../types/types";
  
  export const actionFunctions: Record<VaScriptAction, Function> = {
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
  