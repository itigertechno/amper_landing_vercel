"use client";

import {SignUpFormFirstStep} from "@entities/sign-up-form/ui/sign-up-form-first-step";
import {SignUpFormSecondStep} from "@entities/sign-up-form/ui/sign-up-form-second-step";
import {SignUpFormThirdStep} from "@entities/sign-up-form/ui/sign-up-form-third-step";
import {SignUpFormFourthStep} from "@entities/sign-up-form/ui/sign-up-form-fourth-step";
import {SignUpFormFifthStep} from "@entities/sign-up-form/ui/sign-up-form-fifth-step";
import {useSignUpContext} from "@entities/sign-up-form/model/SignUpContext";
import {SignUpFormSixStep} from "@entities/sign-up-form/ui/sign-up-form-six-step";
import {SignUpFormSevenStep} from "@entities/sign-up-form/ui/sign-up-form-seven-step";
import {SignUpFormEightStep} from "@entities/sign-up-form/ui/sign-up-form-eight-step/SignUpFormEightStep";
import {SignUpIntroduction} from "@entities/sign-up-form/ui/sign-up-introduction";
import {SignUpSlider} from "@entities/sign-up-form/ui/sign-up-slider";

export const SignUpForm = () => {
  const {step, setStep, form, setForm} = useSignUpContext();

  return <section className="min-w-[31.25rem] max-w-[31.25rem] max-1060px:w-full max-1060px:min-w-full">
    {step === -1 && <SignUpSlider/>}
    {step === 0 && <SignUpIntroduction/>}
    {step === 1 && <SignUpFormFirstStep/>}
    {step === 2 && <SignUpFormSecondStep/>}
    {step === 3 && <SignUpFormThirdStep/>}
    {step === 4 && <SignUpFormFourthStep/>}
    {step === 5 && <SignUpFormFifthStep/>}
    {step === 6 && <SignUpFormSixStep/>}
    {step === 7 && <SignUpFormSevenStep/>}
    {step === 8 && <SignUpFormEightStep/>}

  </section>;
}