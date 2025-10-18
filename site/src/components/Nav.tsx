"use client";

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'Map', href: '/map' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    const pathname = usePathname()

    return (
        <Disclosure as="nav" className="bg-white shadow-sm">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href="/" className="flex items-center">
                                        <Image 
                                            src="/okn.png" 
                                            height={50} 
                                            width={118} 
                                            alt="Open Knowledge Nepal" 
                                            className="h-8 w-auto"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                pathname === item.href
                                                    ? 'border-blue-500 text-slate-900'
                                                    : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700',
                                                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="sm:hidden flex items-center">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as={Link}
                                    href={item.href}
                                    className={classNames(
                                        pathname === item.href
                                            ? 'bg-blue-50 border-blue-500 text-blue-700'
                                            : 'border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700',
                                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                    )}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
