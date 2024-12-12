import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-contrast-900 py-32"
    >
      <Container className="relative">
        <div className="mx-auto text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Try Admin Extra free for 3 months to streamline your banking and
            accounting
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Get 3 months of Admin Extra for free when you open an account with
            Ampere. Send unlimited invoices, track business performance, handle
            taxes, and do your banking - all from the Ampere app. T&Cs apply.
          </p>
          <Button color="primary" variant="solid" className="mt-10">
            Get 3 months free
          </Button>
        </div>
      </Container>
    </section>
  )
}
