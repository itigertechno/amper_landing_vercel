import { Home } from '@screens/home/Home';
import { Footer } from '@widgets/footer';
import { Header } from '@widgets/header';

export default function Page() {
	return (
		<section className='flex flex-col h-full'>
			<Header />

			<div className='flex-auto min-h-[100vh]'>
				<Home />
			</div>
			<div className='flex-initial'>
				<Footer />
			</div>
		</section>
	);
}
