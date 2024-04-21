import { ReactNode } from 'react'

export default function HeaderLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="rounded-lg px-2 py-3 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700">
      {children}
    </a>
  )
}
