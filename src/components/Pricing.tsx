import Img from '@/images/hero_bg.webp'
import Image from 'next/image'

const stats = [
  { id: 1, name: 'Company Registration', value: '£14.99' },
  { id: 2, name: 'Business Bank Account', value: 'Free' },
  { id: 3, name: 'Business Savings Account', value: 'Free' },
  {
    id: 4,
    name: 'Tide Accounting',
    value: '3 months free then £22.99/month',
  },
  {
    id: 5,
    name: 'Tide Premium Plans',
    value: '3 months free then £22.99/month',
  },
  {
    id: 6,
    name: 'Virtual Office Address',
    value: '3 months free then £22.99/month',
  },
]

export function Pricing() {
  return (
    <div className="relative bg-secondary-800">
      <Image
        alt=""
        src={Img}
        className="h-56 w-full object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base/8 font-semibold text-primary-900">
              Our track record
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Everything you get when you incorporate your business with Tide
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 xl:mt-16">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="border-secondary-900/10 flex flex-col gap-y-3 border-l pl-6"
                >
                  <dt className="text-sm/6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
