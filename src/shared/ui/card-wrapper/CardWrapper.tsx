import {memo, NamedExoticComponent, PropsWithChildren} from "react";
import clsx from "clsx";

interface ICardWrapperProps extends PropsWithChildren{
  className?: string;
}

export const CardWrapper: NamedExoticComponent<ICardWrapperProps> = memo(function Component({className, children}) {
  return <article className={clsx(className, "p-6 rounded-[20px] tide-box-shadow bg-white")}>{children}</article>;
})