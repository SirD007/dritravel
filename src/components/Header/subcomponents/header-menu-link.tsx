import { ReactNode } from 'react'

export default function HeaderMenuLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700">
      {children}
    </a>
  )
}
