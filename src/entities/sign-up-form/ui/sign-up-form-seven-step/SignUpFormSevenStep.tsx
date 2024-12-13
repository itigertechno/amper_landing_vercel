"use client";

import {Field, Label, Radio, RadioGroup} from "@headlessui/react";
import {Button} from "@src/_kit/Button";
import {FormEvent, useCallback, useState} from "react";
import {useSignUpContext} from "@entities/sign-up-form/model/SignUpContext";
import {TextField} from "@src/_kit/Fields";
import {CardWrapper} from "@shared/ui/card-wrapper";

export const SignUpFormSevenStep = () => {
  const {form, setForm, setStep, step} = useSignUpContext();
  const [active, setActive] = useState<string>();
  const [show, set] = useState(false);
  const [address, setAddress] = useState<string>();

  const onSubmit = useCallback((e: FormEvent) => e.preventDefault(), []);
  const next = useCallback(() => setStep(step + 1), [setStep, step]);
  const setTradingNameCallback = useCallback((el: FormEvent<HTMLInputElement>) => setForm({trading_name: el.currentTarget.value}), [setForm]);
  // const setTradingAddressCallback = useCallback(el => setForm({trading_address: el}), [setForm]);

  return <form onSubmit={onSubmit}>
    <legend className="text-25px text-color-standard font-semibold mb-6">Enter your personal address</legend>
    <TextField
      value={form.trading_name}
      onChange={setTradingNameCallback}
      label="Trading Name"
      name="email"
      type="email"
      autoComplete="email"
      required
    />
    <RadioGroup value={active} onChange={setActive} aria-label="Lived time" className="mt-3">
      <Field onClick={() => set(false)} key="personal_address" className="flex items-center gap-2 cursor-pointer mb-1">
        <Radio
          value={form.personal_address}
          className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-[var(--color-primary)]"
        >
          <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
        </Radio>
        <Label>Use personal address <span className="block text-color-tertiary text-13px">{form.personal_address}</span></Label>
      </Field>
      <Field onClick={() => set(true)} key="new_address" className="flex items-center gap-2 cursor-pointer mb-1">
        <Radio
          value="create"
          className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-[var(--color-primary)]"
        >
          <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
        </Radio>
        <Label>Add a new address</Label>
      </Field>

      {
        show && <CardWrapper className="mt-2">
          <TextField
            value={address}
            onChange={(ev) => setAddress(ev.currentTarget.value)}
            label="Postcode"
            name="postcode"
            type="postcode"
            autoComplete="postal-code"
            required
          />
        </CardWrapper>
      }
    </RadioGroup>
    <Button type="button" onClick={next} variant="solid" color="blue" className="mt-[22px]">Next</Button>
  </form>
}