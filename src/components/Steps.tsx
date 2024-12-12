const content = [
  'Check whether your company name is available',
  'Enter your business and personal details',
  'Receive your limited company certificate of incorporation',
  'Get your free business bank account at the same time',
  'You can choose to register your domain name and set up a Virtual Office Address along the way!',
]

export default function Steps() {
  return (
    <div className="bg-contrast-900 pb-20 pt-20">
      <h3 className="mb-8 text-center text-3xl font-semibold text-white">
        Company registration in five simple steps
      </h3>
      <div className="grid grid-cols-1 gap-4 px-14 sm:grid-cols-3">
        {content.map((item, i) => (
          <div
            key={i}
            className="relative flex items-start space-x-3 rounded-lg border border-contrast-600 bg-contrast-600/10 px-6 py-5 text-white/70"
          >
            <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-primary-900">
              {i + 1}
            </div>
            <div className="min-w-0 flex-1">{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
