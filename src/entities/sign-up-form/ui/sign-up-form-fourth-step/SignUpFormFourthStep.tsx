import {Button} from "@src/_kit/Button";
import {TextField} from "@src/_kit/Fields";
import {useSignUpContext} from "@entities/sign-up-form/model/SignUpContext";
import {FormEvent, useCallback} from "react";

export const SignUpFormFourthStep = () => {
  const {step, setStep, form, setForm} = useSignUpContext();
  const setStepCallback = useCallback(() => setStep(step + 1), [setStep, step]);
  const onSubmit = useCallback((e: FormEvent) => e.preventDefault(), []);

  return <form onSubmit={onSubmit}>
    <legend className="text-25px text-color-standard font-semibold mb-6">Enter your nationality</legend>
    <TextField
      placeholder="Nationality"
      name="nationality"
      type="text"
      required
    />
    <Button onClick={setStepCallback} variant="solid" color="blue" className="mt-[22px]">Next</Button>
  </form>;
}