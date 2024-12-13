import React from "react";
import Link from "next/link";
import {SvgBaseLogo} from "@shared/ui/icons/base";
import {Button} from "@src/_kit/Button";
import Image from "next/image";

export const Header = () => {
    return <header className="bg-contrast-900 h-[50px] px-6">
        <nav className="relative z-50 h-full flex items-center justify-between">
            <div className="flex items-center md:gap-x-12">
                <Link href="#" aria-label="Home">
                    <SvgBaseLogo className="w-auto max-400px:w-[111.36px] max-400px:[24px]" width={175} height={22}/>
                </Link>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8 !text-white">
                <div className="hidden md:block"></div>
                <Button color="white" className="!rounded-[7px] text-13px" variant="outline">Login</Button>
                <Button color="blue" className="!rounded-[7px] text-14px font-semibold" variant="solid">Open account</Button>
                <div className="flex items-center gap-1 max-680px:hidden">
                    <Link
                        className="text-white hover:text-[#378af8] w-6"
                        href="https://www.facebook.com/amperebanking"
                        target="_blank"
                    >
                        <Image className="size-4" src="/pictures/in-header.svg" width={24} height={24} alt=""/>
                    </Link>
                    <Link
                        className="text-white hover:text-[#378af8] w-6"
                        href="https://www.linkedin.com/company/amperebanking/"
                        target="_blank"
                    >
                        <Image className="size-4" src="/pictures/x-header.svg" width={24} height={24} alt=""/>
                    </Link>
                    <Link
                        className="text-white hover:text-[#378af8] w-6"
                        href="https://twitter.com/ampere_banking"
                        target="_blank"
                    >
                        <Image className="size-4" src="/pictures/fb-header.svg" width={24} height={24} alt=""/>
                    </Link>
                </div>
            </div>
        </nav>
    </header>
}