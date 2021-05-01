import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  es: "Español"
}

const LanguageToggleList = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <div
              key={language}
              className="-m-3 p-3 inline-block rounded-md hover:bg-gray-100 transition ease-in-out duration-150"
              onClick={() => changeLocale(language)}
              onKeyDown={() => changeLocale(language)}
              role="button"
              tabIndex={0}
              style={{
                color: currentLocale === language ? `var(--color-langPrimary)` : `var(--color-langSecondary)`,
                margin: 2,
                textDecoration: `underline`,
                cursor: `pointer`
              }}
            >
              <p className="text-base font-medium">
                {languageName[language]}
              </p>
            </div>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default LanguageToggleList