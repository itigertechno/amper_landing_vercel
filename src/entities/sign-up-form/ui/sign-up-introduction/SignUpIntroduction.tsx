"use client";

import {CardWrapper} from "@shared/ui/card-wrapper";
import {useSignUpContext} from "@entities/sign-up-form/model/SignUpContext";
import {useCallback} from "react";
import {Button} from "@src/_kit/Button";
import {BaseLink} from "@features/base-link";

export const SignUpIntroduction = () => {
  const {setStep, step} = useSignUpContext();
  const next = useCallback(() => setStep(step + 1), [setStep, step]);

  return <section className="flex flex-col">
    <CardWrapper>
      <h2 className="text-color-standard font-semibold text-25px text-center">Congratulations 🎉</h2>
      <div className=" text-center my-4">
        <span className="bg-primary p-2 rounded-[4px] text-white font-semibold text-2xl">dsfad LTD</span>
      </div>
      <p className="text-17.5px text-center text-color-standard font-medium">
        Is available to register
      </p>
      <BaseLink to="" className="text-center block mt-3">Search again</BaseLink>
    </CardWrapper>
    <Button type="button" onClick={next} variant="solid" color="blue" className="mt-[22px] w-fit self-center">Next</Button>
  </section>;
}
