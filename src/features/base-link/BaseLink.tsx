import Link from "next/link";
import React, {FC, PropsWithChildren} from "react";
import {UrlObject} from "url";
import clsx from "clsx";

interface IBaseLinkProps extends PropsWithChildren {
  to: UrlObject | string;
  className?: string;
}

export const BaseLink: FC<IBaseLinkProps> = ({to, className, children}) =>
  <Link className={clsx(className, "hover:underline text-color-link-standard")} href={to}>{children}</Link>;