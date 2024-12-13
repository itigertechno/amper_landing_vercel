import {MainContainer} from "@shared/ui/main-container";
import {ScreenGoBack} from "@features/screen-go-back";
import {SignUpForm} from "@entities/sign-up-form";
import {SignUpProvider} from "@entities/sign-up-form/model/SignUpContext";

export const SoloTrader = () => {
  return <MainContainer className="flex flex-col items-center">
    <ScreenGoBack/>
    <SignUpProvider>
      <SignUpForm/>
    </SignUpProvider>
  </MainContainer>;
}