import {CardWrapper} from "@shared/ui/card-wrapper";
import {BaseLink} from "@features/base-link";
// @ts-ignore
import {Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {SvgBaseGoBack} from "@shared/ui/icons/base";
import {useSignUpContext} from "@entities/sign-up-form/model/SignUpContext";
import {useCallback} from "react";
import {Button} from "@src/_kit/Button";

export const SignUpSlider = () => {
  const {step, setStep, form, setForm} = useSignUpContext();
  const next = useCallback(() => setStep(step + 1), [setStep, step]);

  return <section>
    <h2 className="text-25px text-color-standard font-semibold">Before you get started</h2>
    <p className="text-14px text-color-tertiary mb-6">
      Here`s how we`ll submit your company information with Companies
      House
    </p>
    <Splide options={{
      classes: {
        page: 'splide__pagination__page !size-4 !transform-none !m-0',
      },
    }} hasTrack={false}>
      <SplideTrack>
        <SplideSlide className="p-10 max-1060px:p-2">
          <CardWrapper>
            <h3 className="text-17.5px text-color-standard font-semibold">We`ve partnered with ClearBank Limited to provide
              bank accounts</h3>
            <p className="text-color-standard mt-4">
              Most applications are approved within minutes, however in some instances you might need to undergo additional
              checks which may delay or prevent approval
            </p>
            <p className="text-color-standard mt-4">
              Most applications are approved within minutes, however in some instances you might need to undergo additional
              checks which may delay or prevent approval
            </p>
            <p className="text-color-standard mt-4">
              Most applications are approved within minutes, however in some instances you might need to undergo additional
              checks which may delay <BaseLink to="">or prevent approval</BaseLink>
            </p>
          </CardWrapper>
        </SplideSlide>
        <SplideSlide className="p-10 max-1060px:p-2">
          <CardWrapper>
            <h3 className="text-17.5px text-color-standard font-semibold">We`ve partnered with ClearBank Limited to provide
              bank accounts</h3>
            <p className="text-color-standard mt-4">
              Most applications are approved within minutes, however in some instances you might need to undergo additional
              checks which may delay or prevent approval
            </p>
            <p className="text-color-standard mt-4">
              Most applications are approved within minutes, however in some instances you might need to undergo additional
              checks which may delay or prevent approval
            </p>
            <p className="text-color-standard mt-4">
              Most applications are approved within minutes, however in some instances you might need to undergo additional
              checks which may delay <BaseLink to="">or prevent approval</BaseLink>
            </p>
          </CardWrapper>
        </SplideSlide>
        <SplideSlide className="p-10 max-1060px:p-2">
          <CardWrapper>
            <h3 className="text-17.5px text-color-standard font-semibold">We`ve partnered with ClearBank Limited to provide
              bank accounts</h3>
            <p className="text-color-standard mt-4">
              Most applications are approved within minutes, however in some instances you might need to undergo additional
              checks which may delay or prevent approval
            </p>
            <p className="text-color-standard mt-4">
              Most applications are approved within minutes, however in some instances you might need to undergo additional
              checks which may delay or prevent approval
            </p>
            <p className="text-color-standard mt-4">
              Most applications are approved within minutes, however in some instances you might need to undergo additional
              checks which may delay <BaseLink to="">or prevent approval</BaseLink>
            </p>
          </CardWrapper>
        </SplideSlide>
        <SplideSlide className="p-10 max-1060px:p-2">
          <CardWrapper>
            <h3 className="text-17.5px text-color-standard font-semibold">We`ve partnered with ClearBank Limited to provide
              bank accounts</h3>
            <p className="text-color-standard mt-4">
              Most applications are approved within minutes, however in some instances you might need to undergo additional
              checks which may delay or prevent approval
            </p>
            <p className="text-color-standard mt-4">
              Most applications are approved within minutes, however in some instances you might need to undergo additional
              checks which may delay or prevent approval
            </p>
            <p className="text-color-standard mt-4">
              Most applications are approved within minutes, however in some instances you might need to undergo additional
              checks which may delay <BaseLink to="">or prevent approval</BaseLink>
            </p>
          </CardWrapper>
        </SplideSlide>
      </SplideTrack>

      <div className="splide__arrows flex justify-between h-full max-1060px:mt-4">
        <button className="splide__arrow splide__arrow--prev !static !m-0 !transform-none !bg-primary !size-12 transition-all"><SvgBaseGoBack className='iconCurrentStrokePath text-white !rotate-0'/></button>
        <div className="splide__pagination !transform-none flex items-center gap-2 !static"/>
        <button className="splide__arrow splide__arrow--next !static !m-0 !transform-none !bg-primary !size-12 transition-all"><SvgBaseGoBack className='iconCurrentStrokePath text-white !rotate-180'/></button>
      </div>
    </Splide>
    <div className="w-full flex flex-col">
      <Button type="button" onClick={next} variant="solid" color="blue" className="mt-[22px] w-fit self-center">Next</Button>
    </div>
  </section>;
}