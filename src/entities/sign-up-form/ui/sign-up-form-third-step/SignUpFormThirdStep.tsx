import {Datepicker} from "@features/datepicker";
import {Button} from "@src/_kit/Button";
import {useSignUpContext} from "@entities/sign-up-form/model/SignUpContext";
import {useCallback} from "react";

export const SignUpFormThirdStep = () => {
  const {step, setStep, form, setForm} = useSignUpContext();
  const setStepCallback = useCallback(() => setStep(step + 1), [setStep, step]);

  return <form>
    <legend className="text-25px text-color-standard font-semibold mb-6">Enter your date of birth</legend>
    <Datepicker/>
    <Button onClick={setStepCallback} variant="solid" color="blue" className="mt-[22px]">Next</Button>
  </form>;
}