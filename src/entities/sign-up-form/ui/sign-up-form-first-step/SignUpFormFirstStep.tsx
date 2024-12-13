"use client";

import {TextField} from "@src/_kit/Fields";
import {NotificationWrapper} from "@shared/ui/notification-wrapper/NotificationWrapper";
import {BaseLink} from "@features/base-link";
import {Button} from "@src/_kit/Button";
import {useSignUpContext} from "@entities/sign-up-form/model/SignUpContext";
import {FormEvent, useCallback} from "react";

export const SignUpFormFirstStep = () => {
  const {step, setStep, form, setForm} = useSignUpContext();
  const setStepCallback = useCallback(() => setStep(step + 1), [setStep, step]);
  const onSubmit = useCallback((e: FormEvent) => e.preventDefault(), []);

  return <form onSubmit={onSubmit}>
    <legend className="text-25px text-color-standard font-semibold mb-6">Let’s start with some contact info</legend>
    <TextField
      label="Email address"
      name="email"
      type="email"
      autoComplete="email"
      required
    />
    <TextField
      className="mt-[22px]"
      label="Phone number"
      name="email"
      type="email"
      autoComplete="email"
      required
    />
    <NotificationWrapper className="mt-[22px]">
      <p>
        We’ve partnered with ClearBank Limited to provide FSCS-protected bank accounts. Please see our <BaseLink
        to="/">eligibility
        criteria</BaseLink> for types of businesses we cannot currently support.
      </p>
    </NotificationWrapper>
    <p className="text-[#6f7281] my-6">
      You can learn how we treat your personal data by reading our <BaseLink to="/">Privacy Notice</BaseLink>
    </p>
    <Button onClick={setStepCallback} variant="solid" color="blue">Next</Button>
  </form>;
}