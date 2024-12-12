import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'

export const FooterCopy = () => {
    return (
        <footer className="bg-contrast-900">
            <Container className="mb-6 mt-10 grid grid-cols-2 flex-col max-680px:flex">
                <div>
                    <Link href="/">
                        <Image
                            src="/pictures/logo.svg"
                            width={142}
                            height={17.84}
                            alt="Ampere logotype"
                        />
                    </Link>

                    <address className="my-8 text-sm not-italic">
                        <ul className="text-normal text-white">
                            <li>NOVO WORLD LTD</li>
                            <li>42 Upper Berkeley Street,</li>
                            <li>London, England,</li>
                            <li>W1H 5QL</li>
                            <li>Company No. 13894648</li>
                        </ul>
                    </address>
                    <nav className="mb-4 text-base text-white max-680px:text-[14px]">
                        <ul className="flex flex-wrap gap-8 gap-y-4">
                            <li>
                                <Link
                                    href="mailto:support@ampere.co.uk"
                                    target="_blank"
                                    className="flex items-center gap-2 hover:text-[#378af8]"
                                >
                                    <svg className="fill-current" width={24} height={24}>
                                        <use href="/pictures/mail.svg?v=020824#mail-base"></use>
                                    </svg>
                                    support@ampere.co.uk
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://wa.me/message/W4KOVMK3RW73B1"
                                    target="_blank"
                                    className="flex items-center gap-2 hover:text-[#378af8]"
                                >
                                    <svg className="fill-current" width={24} height={24}>
                                        <use href="/pictures/whatsapp.svg?v=020824#whatsapp-base"></use>
                                    </svg>
                                    WhatsApp
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="tel:0044-2033-223340"
                                    target="_blank"
                                    className="flex items-center gap-2 hover:text-[#378af8]"
                                >
                                    <svg className="fill-current" width={24} height={24}>
                                        <use href="/pictures/phone.svg?v=020824#phone-base"></use>
                                    </svg>
                                    +44 2033 223340
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-start justify-start justify-self-end max-md:flex-wrap max-md:justify-end">
                    <nav className="mr-6">
                        <ul className="max-680px:flex items-center gap-4 max-680px:my-4">
                            <li>
                                <Link
                                    className="flex h-10 w-[140px] items-center justify-center rounded-[4px] border border-solid border-white"
                                    target="_blank"
                                    href="https://apps.apple.com/gb/app/ampere-online-business-banking/id1641508835"
                                >
                                    <svg
                                        className="fill-current text-white"
                                        width={114.86}
                                        height={38}
                                    >
                                        <use href="pictures/app-apple.svg?v=020824#app-apple"></use>
                                    </svg>
                                </Link>
                            </li>
                            <li className="mt-4 max-680px:mt-0">
                                <Link
                                    className="flex h-10 w-[140px] items-center justify-center rounded-[4px] border border-solid border-white"
                                    target="_blank"
                                    href="https://play.google.com/store/apps/details?id=ampere.business.banking"
                                >
                                    <svg
                                        className="fill-current text-white"
                                        width={114.86}
                                        height={38}
                                    >
                                        <use href="/pictures/app-android.svg?v=020824#app-android"></use>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Image
                        className="max-680px:hidden"
                        src="/pictures/qr-code-white.webp"
                        width={145}
                        height={145}
                        alt=""
                    />
                </div>
            </Container>
            <Container className="mb-4">
                <nav>
                    <ul className="flex w-full flex-wrap items-center justify-center gap-4 text-base text-white max-680px:text-[14px]">
                        <li>
                            <Link
                                href="mailto:support@ampere.co.uk"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-[#378af8]"
                            >
                                Complaint Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="mailto:support@ampere.co.uk"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-[#378af8]"
                            >
                                Terms of Use
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="mailto:support@ampere.co.uk"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-[#378af8]"
                            >
                                Privacy policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="mailto:support@ampere.co.uk"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-[#378af8]"
                            >
                                Cookie policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="mailto:support@ampere.co.uk"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-[#378af8]"
                            >
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Container>
            <hr className="mb-5 h-[1px] w-full border-none bg-[#43566b]" />
            <Container className="flex items-center gap-8 pb-10 max-680px:flex-col-reverse">
                <div className="flex flex-col gap-2 text-[12px] leading-[18px] text-white">
                    <p>
                        AMPERE is the registered trading name of NOVO WORLD LTD which is the
                        developer and distributor of AMPERE applications. AMPR FINANCE LTD
                        is the subsidiary of NOVO WORLD LTD providing the services.
                        Financial services are provided by AMPR FINANCE LTD which is the EMD
                        Distributor of Payrnet Limited an authorised Electronic Money
                        Institution under firm reference number 900594 with the UK Financial
                        Conduct Authority (FCA), registered in England with registration No
                        09883437 and registered office at Montacute Yards, Shoreditch High
                        Street, London, E1 6HU, UK.
                    </p>
                    <p>
                        The Financial Services Compensation Scheme does not cover electronic
                        money products. No other compensation scheme exists to cover losses
                        from your electronic money account. Your funds will be held in one
                        or more segregated bank accounts with a regulated third party credit
                        institution, in accordance with the provisions of the Electronic
                        Money Regulations 2011.
                    </p>
                    <p>© 2024 Novo World Ltd. All Right Reserved.</p>
                </div>
                <div className="flex items-center gap-5">
                    <Link
                        className="text-white hover:text-[#378af8]"
                        href="https://www.facebook.com/amperebanking"
                        target="_blank"
                    >
                        <svg className="fill-current" width={32} height={32}>
                            <use href="/pictures/fb-square.svg?v=020824#fb-square"></use>
                        </svg>
                    </Link>
                    <Link
                        className="text-white hover:text-[#378af8]"
                        href="https://www.linkedin.com/company/amperebanking/"
                        target="_blank"
                    >
                        <svg className="fill-current" width={32} height={32}>
                            <use href="/pictures/in-square.svg?v=020824#in-square"></use>
                        </svg>
                    </Link>
                    <Link
                        className="text-white hover:text-[#378af8]"
                        href="https://twitter.com/ampere_banking"
                        target="_blank"
                    >
                        <svg className="fill-current" width={32} height={32}>
                            <use href="/pictures/x-square.svg?v=020824#x-square"></use>
                        </svg>
                    </Link>
                    <Link
                        className="text-white hover:text-[#378af8]"
                        href="https://wa.me/message/W4KOVMK3RW73B1"
                        target="_blank"
                    >
                        <svg className="fill-current" width={32} height={32}>
                            <use href="/pictures/wa-square.svg?v=020824#wa-square"></use>
                        </svg>
                    </Link>
                </div>
            </Container>
        </footer>
    )
}
