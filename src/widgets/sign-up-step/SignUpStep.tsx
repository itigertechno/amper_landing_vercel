import c from "./style.module.scss";
import clsx from "clsx";

export const SignUpStep = () => {
  return <div className='h-full flex flex-col justify-center py-7'>
    <ul className={clsx(c.list, "mt-auto")}>
      <li className={c.active}>Personal details</li>
      <li>Business details</li>
      <li>Review</li>
    </ul>
    <button className="w-fit font-semibold h-8 flex items-center bg-[#eff1ff] text-center mdc-button__label tide-button-sm mt-auto text-[#4050fb] text-14px py-2 px-4 rounded-[20px] border-aside">👋&nbsp;&nbsp;Add referral code</button>
  </div>;
}