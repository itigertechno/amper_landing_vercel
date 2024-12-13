"use client";
import {FC, PropsWithChildren, useCallback, useEffect} from "react";
import {createPortal} from "react-dom";

interface IPortalProps extends PropsWithChildren {
  index?: number;
}

export const Portal: FC<IPortalProps> = ({index = 100, children}) => {
  const createRef = useCallback(() => {
    if (!document) {
      return {} as HTMLDivElement;
    }

    const id = `q-portal-${index}`;
    const existed = document.querySelector(`#${id}`);

    if (existed) {
      return existed;
    }
    const div = document.createElement('div');
    div.classList.add(id);
    div.setAttribute('id', id);
    document.body.appendChild(div);
    return div;
  }, [index]);

  useEffect(() => {
    if (index!==100) return;
    document.body.setAttribute("data-locked", "true");

    return () => {
      document.body.removeAttribute("data-locked");
    };
  }, [index])

  return createPortal(children, createRef());
}