import {Button} from "@src/_kit/Button";
import {useSignUpContext} from "@entities/sign-up-form/model/SignUpContext";
import {FormEvent, useCallback, useMemo} from "react";
import {CardWrapper} from "@shared/ui/card-wrapper";
import {BaseLink} from "@features/base-link";
import {Field, Label, Radio, RadioGroup} from "@headlessui/react";

const plans = ['More than three months', 'Less than tree months'];

export const SignUpFormSixStep = () => {
  const {form, setForm, setStep, step} = useSignUpContext();

  const next = useCallback(() => setStep(step + 1), [setStep, step]);
  const isDisabled = useMemo(() => form.personal_address.length <= 0, [form.personal_address]);
  const onSubmit = useCallback((e: FormEvent) => e.preventDefault(), []);
  const setLivedTime = useCallback((newVal: string) => setForm({lived_time: newVal}), [setForm]);

  return <form onSubmit={onSubmit}>
    <legend className="text-25px text-color-standard font-semibold mb-6">Enter your personal address</legend>
    <CardWrapper>
      <p className="text-14px mb-4">
        1, Midwood Close <br/>
        London <br/>
        {form.personal_address}
      </p>
      <BaseLink to="">Edit</BaseLink> <BaseLink to="">Delete</BaseLink>
    </CardWrapper>
    <RadioGroup value={form.lived_time} onChange={setLivedTime} aria-label="Lived time" className="mt-3">
      {plans.map((plan) => (
        <Field key={plan} className="flex items-center gap-2 cursor-pointer mb-1">
          <Radio
            value={plan}
            className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-[var(--color-primary)]"
          >
            <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
          </Radio>
          <Label>{plan}</Label>
        </Field>
      ))}
    </RadioGroup>
    <Button type="button" disabled={isDisabled} onClick={next} variant="solid" color="blue" className="mt-[22px]">Next</Button>
  </form>
}