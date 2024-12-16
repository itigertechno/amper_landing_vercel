import { Check } from "@shared/ui/icon/Check"
import { SvgBaseCheck } from "@shared/ui/icons/base"
import { Button } from "@src/_kit/Button"
import { Container } from "@widgets/container"
import Image from "next/image"

export const HomeContent = () => {
    return (
        <section className="flex flex-col gap-24">
            <Container>
                <div className="flex gap-8 items-start justify-between h-auto">
                    <div className="flex-shrink-0 aspect-square">
                        <Image
                            src={"/pictures/home-introduction/invoicing/800_1200.webp"}
                            width={400}
                            height={400}
                            alt=""
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col gap-4 text-contrast-900">
                        <h3 className="font-semibold text-25px">Tide makes registering a limited company easy</h3>
                        <ul className="flex flex-col gap-3">
                            <li className="flex flex-col gap-1">
                                <p className="flex gap-2 text-17.5px">Register your company with Tide for £14.99
                                    <span className="line-through">£50</span>
                                </p>
                                <p className="text-13px text-contrast-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium debitis dolorum sequi! Rem, minus modi.</p>
                            </li>
                            <li className="flex flex-col gap-1">
                                <p className="flex gap-2 text-17.5px">Register your company with Tide for £14.99
                                    <span className="line-through">£50</span>
                                </p>
                                <p className="text-13px text-contrast-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium debitis dolorum sequi! Rem, minus modi.</p>
                            </li>
                            <li className="flex flex-col gap-1">
                                <p className="flex gap-2 text-17.5px">Register your company with Tide for £14.99
                                    <span className="line-through">£50</span>
                                </p>
                                <p className="text-13px text-contrast-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium debitis dolorum sequi! Rem, minus modi.</p>
                            </li>
                        </ul>
                        <Button color="blue" className="!rounded-[18px] text-14px font-semibold w-fit" variant="solid">Register your limited company</Button>
                    </div>
                </div>
            </Container>

            <div className=" bg-contrast-900 py-16 text-white">
                <Container className="flex flex-col gap-2 items-center">
                    <h3 className="font-semibold  text-25px">Company registrationin five simple steps</h3>
                    <p className="text-13px ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                    <div className="flex gap-1 mt-4 items-center">
                        <ul className="flex flex-col gap-4">
                            <li className="flex gap-4 items-center relative">
                                <p className="rounded-[50%] bg-secondary-800 text-contrast-900 px-2 ">1</p>
                                <span className="absolute -bottom-4 w-[2px] h-4 left-[10px] bg-secondary-800" />
                                <p>Check whether your company name is avalible</p>
                            </li>
                            <li className="flex gap-4 items-center relative">
                                <p className="rounded-[50%] bg-secondary-800 text-contrast-900 px-2 ">2</p>
                                <span className="absolute -bottom-4 w-[2px] h-4 left-[10px] bg-secondary-800" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, minus?</p>
                            </li>
                            <li className="flex gap-4 items-center relative">
                                <p className="rounded-[50%] bg-secondary-800 text-contrast-900 px-2 ">3</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </li>
                            <li className="flex gap-4 items-center relative">
                                <p className="rounded-[50%] bg-secondary-800 text-contrast-900 px-2 ">4</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </li>
                            <li className="flex gap-4 items-center relative">
                                <p className="rounded-[50%] bg-secondary-800 text-contrast-900 px-2 ">5</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </li>
                        </ul>
                        <div className="flex-shrink-0 aspect-square">
                            <Image
                                src={"/pictures/home-introduction/invoicing/800_1200.webp"}
                                width={400}
                                height={400}
                                alt=""
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>
                    <Button color="white" className="!rounded-[20px] text-13px bg-secondary-800 text-contrast-900 mt-4" variant="solid">Register your</Button>
                </Container>
            </div>
            <Container>
                <div className="flex flex-col gap-4 px-6">
                    <div className="flex flex-col gap-2 items-center">
                        <h3 className="font-semibold text-25px text-contrast-900">Why use Tide`s company formation service?</h3>
                        <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, iste! Provident, ducimus suscipit reiciendis officiis molestiae aut eaque harum optio corporis adipisci animi nobis. Voluptatem sequi voluptatibus id. Placeat vitae, fugiat enim ut a veniam.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col gap-4 items-center">
                            <span className="flex items-center justify-center size-12 rounded-[50%] bg-contrast-600 ">
                                <span className="size-6 block">
                                    <Check color="#182744" />
                                </span>
                            </span>
                            <h4 className="font-semibold text-17.5px">It`s goods value</h4>
                            <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aspernatur, aut reiciendis eum odio placeat necessitatibus quisquam assumenda, voluptas eligendi at non facere quaerat nostrum, error dicta magnam architecto voluptatem?</p>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <span className="flex items-center justify-center size-12 rounded-[50%] bg-contrast-600 ">
                                <span className="size-6 block">
                                    <Check color="#182744" />
                                </span>
                            </span>
                            <h4 className="font-semibold text-17.5px">It`s goods value</h4>
                            <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aspernatur, aut reiciendis eum odio placeat necessitatibus quisquam assumenda, voluptas eligendi at non facere quaerat nostrum, error dicta magnam architecto voluptatem?</p>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <span className="flex items-center justify-center size-12 rounded-[50%] bg-contrast-600 ">
                                <span className="size-6 block">
                                    <Check color="#182744" />
                                </span>
                            </span>
                            <h4 className="font-semibold text-17.5px">It`s goods value</h4>
                            <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aspernatur, aut reiciendis eum odio placeat necessitatibus quisquam assumenda, voluptas eligendi at non facere quaerat nostrum, error dicta magnam architecto voluptatem?</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="flex justify-between items-center gap-4">
                <div className="flex flex-col gap-4 text-contrast-900">
                    <h3 className="font-semibold text-25px">What you need to register your limited company</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="flxe flex-col gap-2">
                        <h5 className="font-bold text-17.5px">Unique company name</h5>
                        <p className="text-14px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni placeat repellat voluptas illo autem tempore? Excepturi quaerat officiis nam!</p>
                    </div>
                    <div className="flxe flex-col gap-2">
                        <h5 className="font-bold text-17.5px">Unique company name</h5>
                        <p className="text-14px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni placeat repellat voluptas illo autem tempore? Excepturi quaerat officiis nam!</p>
                    </div>
                    <div className="flxe flex-col gap-2">
                        <h5 className="font-bold text-17.5px">Unique company name</h5>
                        <p className="text-14px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni placeat repellat voluptas illo autem tempore? Excepturi quaerat officiis nam!</p>
                    </div>
                    <Button color="blue" className="!rounded-[18px] text-14px font-semibold w-fit" variant="solid">Register your limited company</Button>
                </div>
                <div className="flex-shrink-0 aspect-square">
                    <Image
                        src={"/pictures/home-introduction/invoicing/800_1200.webp"}
                        width={400}
                        height={400}
                        alt=""
                        className="object-contain w-full h-full"
                    />
                </div>
            </Container>
            <Container className="flex flex-col w-full text-contrast-900 ">
                <h3 className="font-semibold text-25px self-center mb-6">Company Registration FAQs</h3>
                <details className="relative w-full cursor-pointer py-2 border-y-2 flex flex-col gap-2 ">
                    <summary className="flex justify-between">
                        <h5 className="font-bold text-17.5px">What is the company formation process?</h5>
                        <span className="accordion" />
                    </summary>
                    <p >Lorem ipsum dolor sit amet.</p>
                </details>
                <details className="relative w-full cursor-pointer py-2 border-b-2">
                    <summary className="flex justify-between">
                        <h5 className="font-bold text-17.5px">What is the company formation process?</h5>
                        <span className="accordion" />
                    </summary>
                    <p>Lorem ipsum dolor sit amet.</p>
                </details>
                <details className="relative w-full cursor-pointer py-2 border-b-2">
                    <summary className="flex justify-between">
                        <h5 className="font-bold text-17.5px">What is the company formation process?</h5>
                        <span className="accordion" />
                    </summary>
                    <p>Lorem ipsum dolor sit amet.</p>
                </details>
                <details className="relative w-full cursor-pointer py-2 border-b-2">
                    <summary className="flex justify-between">
                        <h5 className="font-bold text-17.5px">What is the company formation process?</h5>
                        <span className="accordion" />
                    </summary>
                    <p>Lorem ipsum dolor sit amet.</p>
                </details>
                <details className="relative w-full cursor-pointer py-2 border-b-2">
                    <summary className="flex justify-between">
                        <h5 className="font-bold text-17.5px">What is the company formation process?</h5>
                        <span className="accordion" />
                    </summary>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore libero itaque pariatur dolorum assumenda facilis blanditiis, suscipit vitae dignissimos. Nisi, eius tempora consequuntur vero sit eligendi quae, autem inventore eos aperiam soluta consectetur. Nihil consectetur voluptatibus accusamus natus similique! Debitis sunt dignissimos ad sint non quam odit veniam est distinctio, ipsum harum molestias mollitia esse voluptate, obcaecati et veritatis corporis in corrupti. Quam numquam tempora et deleniti, quia dolor, dolore temporibus soluta, facilis harum adipisci. Ipsam consequatur, saepe mollitia adipisci, maxime dignissimos, ea aut ad eum blanditiis unde eius reiciendis soluta? Minus saepe iure ab, distinctio aliquam voluptas magni delectus?</p>
                </details>
                <details className="relative w-full cursor-pointer py-2 border-b-2">
                    <summary className="flex justify-between">
                        <h5 className="font-bold text-17.5px">What is the company formation process?</h5>
                        <span className="accordion" />
                    </summary>
                    <p>Lorem ipsum dolor sit amet.</p>
                </details>
                <details className="relative w-full cursor-pointer py-2 border-b-2">
                    <summary className="flex justify-between">
                        <h5 className="font-bold text-17.5px">What is the company formation process?</h5>
                        <span className="accordion" />
                    </summary>
                    <p>Lorem ipsum dolor sit amet.</p>
                </details>
           
            </Container>
        </section>
    )
}