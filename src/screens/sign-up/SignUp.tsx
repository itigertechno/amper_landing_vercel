import {SvgBaseCheck} from "@shared/ui/icons/base";
import {CardWrapper} from "@shared/ui/card-wrapper";
import {Button} from "@src/_kit/Button";
import Image from "next/image";
import {imgCardStanding} from "@shared/ui/pictures";
import {MainContainer} from "@shared/ui/main-container";

export const SignUp = () => {
  return <MainContainer className="flex justify-center items-center  max-1060px:pt-4 max-1060px:items-start">
    <section className="grid grid-cols-[50%_50%] max-1330px:flex gap-16 min-1260px:max-w-[62.5rem] items-end justify-center py-[80px] p-[2.5rem] w-full max-1060px:max-w-full max-1060px:p-0 max-1060px:justify-start">
      <div>
        <h2 className="text-25px text-color-standard font-semibold">Sign up your business with Tide</h2>
        <p className="text-mat-sidenav-content-text-color flex items-center gap-2 text-17.5px mt-2">
          <SvgBaseCheck className="iconCurrentStrokePath color-gray-svg" width={24} height={24} />
          Trusted by over 650,000 UK businesses 🎉
        </p>
        <p className="text-color-tertiary text-14px mt-4">
          You will need a mobile phone to verify your identity
        </p>
        <CardWrapper className="mt-[2.5rem] max-1060px:mt-8">
          <h3 className="text-color-standard font-semibold text-[1.25rem]">Registered company</h3>
          <p className="text-mat-sidenav-content-text-color mt-2">
            Your company is registered with UK Companies House. You must be a director of the company to open an account.
          </p>
          <Button href="/sign-up/sole-trader" color="blue" className="mt-6">Get account</Button>
        </CardWrapper>
        <CardWrapper className="mt-[2.5rem] max-1060px:mt-4">
          <h3 className="text-color-standard font-semibold text-[1.25rem]">Sole trader
          </h3>
          <p className="text-mat-sidenav-content-text-color mt-2">
            You&#39;re self employed or a freelancer and hold complete ownership of your business.
          </p>
          <Button href="/sign-up/sole-trader" color="blue" className="mt-6">Get account</Button>
        </CardWrapper>
      </div>
      <Image src={imgCardStanding} width={412} height={445} className="max-1330px:hidden" alt="card standing picture"/>
    </section>
  </MainContainer>;
}