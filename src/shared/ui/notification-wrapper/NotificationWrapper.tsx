import {FC, PropsWithChildren} from "react";
import clsx from "clsx";
import {SvgBaseNotification} from "@shared/ui/icons/base";

interface INotificationWrapperProps extends PropsWithChildren {
  className?: string;
}

export const NotificationWrapper: FC<INotificationWrapperProps> = ({className, children}) => {
  return <div className={clsx(className, "p-4 flex gap-3 bg-notification-wrapper rounded-[8px] border-primary")}>
    <SvgBaseNotification className="min-w-6 iconCurrentFillPath text-[#1929d6]" width={24} height={24} />
    {children}
  </div>;
}