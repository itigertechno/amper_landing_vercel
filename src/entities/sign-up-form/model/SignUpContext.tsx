"use client";

import {createContext, Dispatch, PropsWithChildren, SetStateAction, useCallback, useContext, useState} from "react";

interface ISignUpContext {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  form: ISignUpForm;
  setForm: (newValue: any) => void;
}

interface ISignUpForm {
  email: string;
  phone: string;
  first_name: string;
  middle_name: string;
  surname: string;
  birthday: Date;
  nationality: string;
  personal_address: string;
  lived_time: string;
  trading_name: string;
  trading_address: string;
}

export const SignUpContext = createContext({} as ISignUpContext);

export const useSignUpContext = () => useContext(SignUpContext);

export const SignUpProvider = ({children}: PropsWithChildren) => {
  const [step, setStep] = useState<number>(-1);
  const [form, setForm] = useState<ISignUpForm>({
    email: "",
    phone: "",
    first_name: "",
    middle_name: "",
    surname: "",
    birthday: new Date(),
    nationality: "",
    personal_address: "",
    lived_time: "",
    trading_name: "",
    trading_address: ""
  });
  
  const setNewValueForm = useCallback((newVal: any) => {setForm({...form, ...newVal})}, [form]);
  return <SignUpContext.Provider value={{
    form,
    setForm: setNewValueForm,
    step,
    setStep
  }}>{children}</SignUpContext.Provider>
}