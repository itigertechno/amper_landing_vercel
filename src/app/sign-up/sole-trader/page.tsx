import {Sidebar} from "@widgets/sidebar";
import {SoloTrader} from "@screens/solo-trader";
import {SignUpStep} from "@widgets/sign-up-step";

export default function Page() {
  return <>
    <Sidebar>
      <SignUpStep/>
    </Sidebar>
    <SoloTrader/>
  </>;
}