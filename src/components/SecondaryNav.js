import React from 'react'
import { Link } from 'gatsby'
import { Disclosure} from '@headlessui/react'
import styled from 'styled-components'

const StickySecondaryNavWrap = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`
const navigation = [
  { name: 'Overview', href: '#overview', current: true },
  { name: 'What We Do', href: '#whatWeDo', current: false },
  { name: 'Our Team', href: '#ourTeam', current: false },
  { name: 'Advisory Board', href: '#advisoryBoard', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function SecondaryNav() {
  return (
    <StickySecondaryNavWrap>
    <Disclosure as="header" className="bg-gray-100">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative h-16 flex justify-between">
              <div className="relative z-10 px-2 flex lg:px-0">
                
              </div>
              <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  
                </div>
              </div>
            </div>
            <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'underline text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                    'rounded-md py-2 px-3 inline-flex items-center text-md font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

        </>
      )}
    </Disclosure>
    </StickySecondaryNavWrap>
  )
}