import {TextField} from "@src/_kit/Fields";
import {NotificationWrapper} from "@shared/ui/notification-wrapper/NotificationWrapper";
import {BaseLink} from "@features/base-link";
import {Button} from "@src/_kit/Button";
import {useSignUpContext} from "@entities/sign-up-form/model/SignUpContext";
import {FormEvent, useCallback} from "react";

export const SignUpFormEightStep = () => {
  const {step, setStep, form, setForm} = useSignUpContext();
  const setStepCallback = useCallback(() => setStep(step + 1), [setStep, step]);
  const onSubmit = useCallback((e: FormEvent) => e.preventDefault(), []);

  return <form onSubmit={onSubmit}>
    <legend className="text-25px text-color-standard font-semibold mb-6">Choose your business category</legend>
    <TextField
      subtext="Start typing to filter or press enter to view all options"
      label="Choose category"
      name="category"
      type="text"
      required
    />
    <Button onClick={setStepCallback} variant="solid" color="blue" className="mt-[22px]">Next</Button>
  </form>;
}