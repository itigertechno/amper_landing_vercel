import {PropsWithChildren} from "react";
import clsx from "clsx";

interface IMainContainerProps extends PropsWithChildren {
  className?: string;
}

export const MainContainer = ({className, children}: IMainContainerProps) => {
  return <main className={clsx(className, "bg-color-main-background ml-250px pl-8 max-1060px:ml-auto max-1060px:px-4")}>{children}</main>;
}