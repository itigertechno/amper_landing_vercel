import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import Link from 'next/link'

export type NavLinkProps = {
  title: string
  offset: number
  links: { title: string; items: { title: string; href: string }[] }[]
}
export function NavLink(props: NavLinkProps) {
  return (
    <Menu as="div" className="relative text-white">
      <div>
        <MenuButton>{props.title}</MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-max origin-top-left shadow-sm transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="flex items-start gap-6 rounded-md bg-white p-6 text-sm text-contrast-600">
          {props.links.map((link, i) => (
            <div key={i}>
              <strong>{link.title}</strong>
              <div className="mt-1 flex flex-col gap-1">
                {link.items.map((item, j) => (
                  <Link href={item.href} key={j}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}
