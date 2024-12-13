"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {TextField} from "@src/_kit/Fields";
import {useCallback, useState} from "react";

export const Datepicker = () => {
  const [date, set] = useState<Date | null>(new Date());
  const setCallback = useCallback((date: Date | null) => set(date), []);

  return <>
    <DatePicker
      selected={date}
      onChange={setCallback}
      className="w-full"
      customInput={<TextField
        label=""
        className="mt-[22px]"
        name="date-of-birth"
        type="text"
        required
      />}
    />
  </>;
}