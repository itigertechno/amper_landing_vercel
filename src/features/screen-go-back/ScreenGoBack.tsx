"use client";

import {SvgBaseGoBack} from "@shared/ui/icons/base";
import {useRouter} from 'next/navigation';

export const ScreenGoBack = () => {
  const {back} = useRouter();

  return <div className="w-full h-[88px] flex items-center py-4 max-1060px:h-[44px]">
    <button onClick={() => back()}>
      <SvgBaseGoBack className="iconCurrentFillPath color-gray-svg" width={24} height={24}/>
    </button>
  </div>;
}