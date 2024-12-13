import {TextField} from "@src/_kit/Fields";
import {NotificationWrapper} from "@shared/ui/notification-wrapper/NotificationWrapper";
import {BaseLink} from "@features/base-link";
import {Button} from "@src/_kit/Button";
import {FormEvent, useCallback} from "react";
import {useSignUpContext} from "@entities/sign-up-form/model/SignUpContext";

export const SignUpFormSecondStep = () => {
  const {step, setStep, form, setForm} = useSignUpContext();
  const setStepCallback = useCallback(() => setStep(step + 1), [setStep, step]);
  const onSubmit = useCallback((e: FormEvent) => e.preventDefault(), []);

  return <form onSubmit={onSubmit}>
    <legend className="text-25px text-color-standard font-semibold mb-6">Enter your name</legend>
    <TextField
      label="Email address"
      name="first_name"
      type="text"
      required
    />
    <TextField
      subtext="If shown on your passport, driving licence or national ID card"
      label="Middle name(s)"
      className="mt-[22px]"
      name="middle_name"
      type="text"
      required
    />
      <TextField
        label="Surname"
        className="mt-[22px]"
        name="surname"
        type="text"
        required
      />
    <Button onClick={setStepCallback} variant="solid" color="blue" className="mt-[22px]">Next</Button>
  </form>;
}