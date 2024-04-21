'use client'

import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import HeaderLink from './subcomponents/header-link'
import HeaderMenuLink from './subcomponents/header-menu-link'

const links = [
  { name: 'Início', href: '#' },
  { name: 'Nossos veículos', href: '#' },
  { name: 'Solicite uma viagem', href: '#' }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const Logo = (
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
    </a>
  )
  return (
    <header className="bg-white dark:bg-slate-800 sticky top-0 z-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">{Logo}</div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {links.map((link) => (
            <HeaderLink key={link.name} href={link.href}>
              {link.name}
            </HeaderLink>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <HeaderLink href="#">Login</HeaderLink>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {Logo}
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((link) => (
                  <HeaderMenuLink key={link.name} href={link.href}>
                    {link.name}
                  </HeaderMenuLink>
                ))}
              </div>
              <div className="py-6">
                <HeaderMenuLink href="#">Log in</HeaderMenuLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
