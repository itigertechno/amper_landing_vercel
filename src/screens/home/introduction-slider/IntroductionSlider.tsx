'use client';

// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import c from './style.module.scss';
import Image from 'next/image';
import { Button } from '@src/_kit/Button';
import { Input } from '@headlessui/react';
import clsx from 'clsx';

export const IntroductionSlider = () => {
	return (
		<section>
			<Splide
				className='relative'
				hasTrack={false}
				options={{
					classes: {
						page: 'splide__pagination__page slider-pagination__page',
					},
					type: 'loop',
					autoplay: true,
					interval: 5000,
					breakpoints: {
						768: {
							arrows: false,
						},
					},
				}}
			>
				<div className='absolute left-0 top-0 w-full h-full introduction-gradient' />
				<div
					className={clsx(
						c.form,
						'w-full absolute z-10 h-full top-0 bottom-0 right-0 left-0 m-auto',
					)}
				>
					<form className='w-fit max-768px:flex max-768px:flex-col max-768px:justify-between max-768px:h-full max-768px:py-16'>
						<legend className='text-[36px] leading-[1.4] text-white mb-4 font-semibold max-475px:text-[24px]'>
							Loans and Mortgages For Business
						</legend>
						<fieldset className='flex gap-4 max-768px:w-full max-768px:flex-col'>
							<label className='bg-[white] justify-between h-[50px] flex items-center rounded-[7px] px-1'>
								<Input
									className='w-[320px] max-475px:w-full rounded-[7px] !outline-none !border-none !ring-0'
									width='320px'
									placeholder='Enter your email'
								/>
								<Button
									color='blue'
									className='!rounded-[7px] text-16px font-semibold'
									variant='solid'
									type='button'
								>
									LTD
								</Button>
							</label>
							<Button
								color='blue'
								className='!rounded-[7px] text-16px font-semibold'
								variant='solid'
							>
								Sign up
							</Button>
						</fieldset>
					</form>
				</div>
				<SplideTrack>
					<SplideSlide>
						<article className={c.article}>
							<picture>
								<source
									srcSet='/pictures/home-introduction/all-in-one/1600_500.webp?ver=1&amp;fv=051124'
									media='(min-width: 1281px) and (max-width: 1600px)'
									width='1600'
									height='500'
								/>
								<source
									srcSet='/pictures/home-introduction/all-in-one/1600_500.webp?ver=1&amp;fv=051124'
									media='(min-width: 769px) and (max-width: 1280px)'
									width='1600'
									height='800'
								/>
								<source
									srcSet='/pictures/home-introduction/all-in-one/800_1200.webp?ver=1&amp;fv=051124'
									media='(max-width: 768px)'
									width='800'
									height='1200'
								/>
								<Image
									src='/pictures/home-introduction/all-in-one/1900_600.webp?ver=1&amp;fv=051124'
									alt='All-in-One business current account'
									className={c.bg}
									loading='lazy'
									decoding='async'
									height='600'
									width='1920'
									draggable='false'
								/>
							</picture>
						</article>
					</SplideSlide>
					<SplideSlide>
						<article className={c.article}>
							<picture>
								<source
									srcSet='/pictures/home-introduction/all-in-one/1600_500.webp?ver=1&amp;fv=051124'
									media='(min-width: 1281px) and (max-width: 1600px)'
									width='1600'
									height='500'
								/>
								<source
									srcSet='/pictures/home-introduction/all-in-one/1600_500.webp?ver=1&amp;fv=051124'
									media='(min-width: 769px) and (max-width: 1280px)'
									width='1600'
									height='800'
								/>
								<source
									srcSet='/pictures/home-introduction/all-in-one/800_1200.webp?ver=1&amp;fv=051124'
									media='(max-width: 768px)'
									width='800'
									height='1200'
								/>
								<Image
									src='/pictures/home-introduction/all-in-one/1900_600.webp?ver=1&amp;fv=051124'
									alt='All-in-One business current account'
									className={c.bg}
									loading='lazy'
									decoding='async'
									height='600'
									width='1920'
									draggable='false'
								/>
							</picture>
						</article>
					</SplideSlide>
					<SplideSlide>
						<article className={c.article}>
							<picture>
								<source
									srcSet='/pictures/home-introduction/all-in-one/1600_500.webp?ver=1&amp;fv=051124'
									media='(min-width: 1281px) and (max-width: 1600px)'
									width='1600'
									height='500'
								/>
								<source
									srcSet='/pictures/home-introduction/all-in-one/1600_500.webp?ver=1&amp;fv=051124'
									media='(min-width: 769px) and (max-width: 1280px)'
									width='1600'
									height='800'
								/>
								<source
									srcSet='/pictures/home-introduction/all-in-one/800_1200.webp?ver=1&amp;fv=051124'
									media='(max-width: 768px)'
									width='800'
									height='1200'
								/>
								<Image
									src='/pictures/home-introduction/all-in-one/1900_600.webp?ver=1&amp;fv=051124'
									alt='All-in-One business current account'
									className={c.bg}
									loading='lazy'
									decoding='async'
									height='600'
									width='1920'
									draggable='false'
								/>
							</picture>
						</article>
					</SplideSlide>
					<SplideSlide>
						<article className={c.article}>
							<picture>
								<source
									srcSet='/pictures/home-introduction/invoicing/800_1200.webp?ver=1&amp;fv=051124'
									media='(min-width: 1281px) and (max-width: 1600px)'
									width='1600'
									height='500'
								/>
								<source
									srcSet='/pictures/home-introduction/invoicing/1600_800.webp?ver=1&amp;fv=051124'
									media='(min-width: 769px) and (max-width: 1280px)'
									width='1600'
									height='800'
								/>
								<source
									srcSet='/pictures/home-introduction/invoicing/800_1200.webp?ver=1&amp;fv=051124'
									media='(max-width: 768px)'
									width='800'
									height='1200'
								/>
								<Image
									src='/pictures/home-introduction/invoicing/1920_600.webp?ver=1&amp;fv=051124'
									alt='Create invoices on the go'
									className={c.bg}
									loading='lazy'
									decoding='async'
									height='600'
									width='1920'
									draggable='false'
								/>
							</picture>
						</article>
					</SplideSlide>
				</SplideTrack>
			</Splide>
		</section>
	);
};
