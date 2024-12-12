import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does Tide register my business directly with Companies House?',
      answer:
        'Yes. We’re an authorized formation agent of Companies House, and we’re securely integrated with them, so you can trust us to register your limited company.',
    },
    {
      question:
        'How long does it take to register a limited company through Tide?',
      answer:
        'It depends. In many cases, Companies House will incorporate your company within 1 business day. The majority of businesses are incorporated within 48 hours. Please note that Companies House does not work on weekends so if you send an application on a Friday, it will take longer.',
    },
    {
      question:
        'Can I register a UK company myself without the help of a solicitor or an accountant?',
      answer:
        ' Yes, you can! With our simple registration process, all you need is the correct information and we’ll register your new company with Companies House for you.',
    },
  ],
  [
    {
      question: 'Do I have to have LTD at the end of my company name?',
      answer:
        'Companies House requires limited companies to have either Limited or LTD at the end of the company name. If you don`t include LTD or Limited in your search, we will automatically add LTD. There is no difference between the name endings Limited or Ltd, except for how they look.',
    },
    {
      question: 'Do I need to sign any documents?',
      answer:
        'Not on paper – it’s all done online with a digital signature to make things simple. No printing or scanning required!',
    },
    {
      question:
        'What are my responsibilities after setting up a limited company?',
      answer:
        'You’ll have yearly responsibilities such as your tax return and annual return plus ongoing tasks like keeping records of the company and keeping a register of PSC’s (People with significant control). Full details can be found on the gov.uk website.',
    },
  ],
  [
    {
      question: 'What is the difference between LTD and Limited?',
      answer:
        'There is no difference between the name endings ‘Limited’ or ‘Ltd’, except for how they look. Companies House requires limited companies to have either Limited or Ltd at the end of the company name. By default we select Ltd, but you can also choose the ‘Limited’ option if you prefer.',
    },
    {
      question: 'Do I need a business bank account for my business?',
      answer:
        'If you operate as a Limited Company, you are legally obliged to have a separate business account for your business. You cannot use a personal bank account. ',
    },
    {
      question:
        'What happens if my application for incorporation gets rejected by Companies House?',
      answer:
        'If your company incorporation is rejected by Companies House we will issue a refund for the amount you paid directly to your directly to your original method of payment immediately after receiving the rejection communication from Companies House.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
