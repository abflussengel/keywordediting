import React from 'react'
import { IntlContextConsumer, Link } from 'gatsby-plugin-intl'

const languageName = {
  en: 'English',
  es: 'Spanish',
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, originalPath }) =>
          languages.map(language => (
            <Link
              key={language}
              language={language}
              to={originalPath}
              style={{
                color: `white`,
                margin: 10,
                textDecoration: `underline`,
              }}>
              {languageName[language]}
            </Link>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
