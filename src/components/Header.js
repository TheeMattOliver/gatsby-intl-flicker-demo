/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import { Logo } from "./Logo"
import LanguageToggleList from './LanguageToggleList'

export default function HeaderNew(siteTitle) {
  const { title } = siteTitle

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center pt-6 md:space-x-10">
          <div className="flex md:justify-start lg:w-0 lg:flex-1 items-center">
            <Link to="/">
              <Logo
                className="inline object-cover w-16 h-16 mr-2 rounded-sm"
                alt="Placeholder logo" />
            </Link>
            <p className="text-base pr-6 pt-1 font-medium text-gray-500 hover:text-gray-900">{title}</p>
            <nav className="hidden md:flex space-x-10">
              <Link to="/about" className="text-base pt-4 font-medium text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link to="/contact" className="text-base pt-4 font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>

              <LanguageToggleList />
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
