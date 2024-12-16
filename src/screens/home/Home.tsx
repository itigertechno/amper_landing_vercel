import { HomeContent } from '@screens/home-content';
import { IntroductionSlider } from '@screens/home/introduction-slider';
import { Footer } from '@widgets/footer';

export const Home = () => {
	return (
		<div className='flex flex-col gap-16 mb-16'>
			<IntroductionSlider />
			<HomeContent />
		</div>
	);
};
