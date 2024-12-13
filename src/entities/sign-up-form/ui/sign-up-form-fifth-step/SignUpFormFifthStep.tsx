"use client";

import {TextField} from "@src/_kit/Fields";
import {Button} from "@src/_kit/Button";
import {useSignUpContext} from "@entities/sign-up-form/model/SignUpContext";
import {ChangeEvent, FormEvent, useCallback, useMemo} from "react";

export const SignUpFormFifthStep = () => {
  const {form, setForm, setStep, step} = useSignUpContext();
  const onChange = useCallback((ev: ChangeEvent) => {
    // @ts-ignore
    setForm({personal_address: ev.currentTarget.value});
  }, [setForm]);
  const next = useCallback(() => setStep(step + 1), [setStep, step]);
  const isDisabled = useMemo(() => form.personal_address.length <= 0, [form.personal_address]);
  const onSubmit = useCallback((e: FormEvent) => e.preventDefault(), []);

  return <form onSubmit={onSubmit}>
    <legend className="text-25px text-color-standard font-semibold mb-6">Enter your personal address</legend>
    <TextField
      placeholder="Postcode"
      name="postcode"
      type="text"
      value={form.personal_address}
      onChange={onChange}
      required
    />
    <Button type="button" disabled={isDisabled} onClick={next} variant="solid" color="blue" className="mt-[22px]">Next</Button>
  </form>
}