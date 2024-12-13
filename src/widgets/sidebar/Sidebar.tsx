import Link from "next/link";
import {routesLinks} from "@shared/lib/routes-links/routes-links";
import {SvgBaseLogo} from "@shared/ui/icons/base";
import {BaseLink} from "@features/base-link";
import {FC, PropsWithChildren} from "react";

export const Sidebar: FC<PropsWithChildren> = ({children}) => {
  return <aside className="flex flex-col fixed bg-white border-r-aside left-0 top-0 w-250px h-full p-6 max-1060px:hidden">
    <Link className="self-center" href={routesLinks.home}>
      <SvgBaseLogo className="iconCurrentFillPath text-color-secondary" width={175} height={22}/>
    </Link>
    <div className="w-full h-full">{children}</div>
    <BaseLink className="mt-auto" to="phone:+442038932915">+44 20 3893 2915</BaseLink>
    <BaseLink to="/">FAQs & Help is here</BaseLink>
    <p>Weekdays 9am-6pm (UK)</p>
  </aside>;
}