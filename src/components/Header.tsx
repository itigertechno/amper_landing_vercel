'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink, NavLinkProps } from '@/components/NavLink'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MobileNavLink href="#features">Features</MobileNavLink>
        <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
        <MobileNavLink href="#pricing">Pricing</MobileNavLink>
        <hr className="m-2 border-slate-300/40" />
        <MobileNavLink href="/login">Sign in</MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  const links: NavLinkProps[] = [
    {
      title: 'Register a Company',
      offset: 0,
      links: [
        {
          title: 'Register with Ampere',
          items: [
            { title: 'Company Registration', href: '#' },
            { title: 'Company Name Check', href: '#' },
          ],
        },
        {
          title: 'Features',
          items: [{ title: 'Virtual office Address', href: '#' }],
        },
      ],
    },
    {
      title: 'Business Accounts',
      offset: -50,
      links: [
        {
          title: 'Accounts',
          items: [
            { title: 'Free Business Account', href: '#' },
            { title: 'Savings Account', href: '#' },
            { title: 'Smart Plan', href: '#' },
            { title: 'Pro plan', href: '#' },
            { title: 'Cashback plan', href: '#' },
          ],
        },
        {
          title: 'Features',
          items: [
            { title: 'Switch to Ampere', href: '#' },
            { title: 'International Payments', href: '#' },
            { title: 'Invoicing', href: '#' },
            { title: 'Accounting Integrations', href: '#' },
            { title: 'Virtual Cards', href: '#' },
            { title: 'Team Access', href: '#' },
            { title: 'See All Features', href: '#' },
          ],
        },
      ],
    },
    {
      title: 'Business Tools',
      offset: -70,
      links: [
        {
          title: 'Get Paid',
          items: [
            { title: 'Invoicing', href: '#' },
            { title: 'Tap to Pay on iPhone', href: '#' },
            { title: 'POS Card Reader', href: '#' },
            { title: 'Pro plan', href: '#' },
            { title: 'Payment Links', href: '#' },
          ],
        },
        {
          title: 'Accounting',
          items: [
            { title: 'Ampere Accounting', href: '#' },
            { title: 'Accounting Integrations', href: '#' },
          ],
        },
        {
          title: 'Expense Management',
          items: [{ title: 'Company Expense Cards', href: '#' }],
        },
      ],
    },
    {
      title: 'Borrow',
      offset: -100,
      links: [
        {
          title: 'Loans',
          items: [
            { title: 'Business loans', href: '#' },
            { title: 'Asset finance', href: '#' },
            { title: 'Merchant Cash Advance', href: '#' },
            { title: 'Start-up Loans', href: '#' },
            { title: 'Invoice Finance', href: '#' },
          ],
        },
        {
          title: 'Features',
          items: [{ title: 'Credit Score Insights', href: '#' }],
        },
      ],
    },
    {
      title: 'Support',
      offset: -100,
      links: [
        {
          title: 'Resource Hub',
          items: [
            { title: 'FAQs', href: '#' },
            { title: 'Help centre', href: '#' },
            { title: 'Small Business Tips', href: '#' },
            { title: 'Report Fraud', href: '#' },
            { title: 'Contact us', href: '#' },
            { title: 'Blog', href: '#' },
            { title: 'Case Studies', href: '#' },
          ],
        },
        {
          title: 'Company',
          items: [
            { title: 'About us', href: '#' },
            { title: 'Newsroom', href: '#' },
            { title: 'Careers', href: '#' },
            { title: 'Partner with Us', href: '#' },
            { title: 'Affiliate Program', href: '#' },
          ],
        },
      ],
    },
  ]
  return (
    <header className="bg-contrast-900 py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block"></div>
            <Button color="primary">Open an account</Button>
            <Button color="white" variant="outline">
              Login to web
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
