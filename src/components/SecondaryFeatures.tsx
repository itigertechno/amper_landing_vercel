import {
  ArrowPathIcon,
  CheckIcon,
  ClockIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Its a good value',
    description:
      'Pay £14.99 instead of the usual £50, and we’ll take care of the rest. We also don’t charge monthly fees on your free business account.',
    href: '#',
    icon: CheckIcon,
  },
  {
    name: 'Its fast',
    description:
      'Registering your limited company takes minutes, and you could receive your certificate of incorporation within a day.',
    href: '#',
    icon: ClockIcon,
  },
  {
    name: 'Its secure',
    description:
      'We’re a Companies House authorised formation agent and FSCS-protected, so you’re in safe hands. ',
    href: '#',
    icon: LockClosedIcon,
  },
]

export function SecondaryFeatures() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-primary-900">
            Deploy faster
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-contrast-900 sm:text-5xl lg:text-balance">
            Why use Ampere&apos;s company formation service?
          </p>
          <p className="mt-6 text-lg/8 text-contrast-600">
            Ampere is here to support you in starting your own limited company. We
            believe the world would be a better place if more people gave it a
            shot – that’s why we’ve made company formations easier than ever.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-contrast-900">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-primary-900"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm/6 font-semibold text-primary-900"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
