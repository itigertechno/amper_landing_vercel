'use client'

import HeroBg from '@/images/hero_bg.webp'
import Image from 'next/image'
import { Button } from './Button'
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export function Hero() {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div className="mx-auto max-w-2xl">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-contrast-600/10 hover:ring-contrast-900/20">
            Announcing our next round of funding.{' '}
            <a href="#" className="font-semibold text-primary-900">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Register your company online for only £14.99
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Company registration
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button variant="solid" color="primary">
              Register
            </Button>
            <a href="#" className="text-sm/6 font-semibold text-contrast-600">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
