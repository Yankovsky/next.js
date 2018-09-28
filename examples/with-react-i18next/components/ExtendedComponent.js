import React from 'react'
import { translate } from 'react-i18next'

function MyComponent ({ t }) {
  return <p>{t('home:sample_button')}</p>
}

const Extended = translate('home')(MyComponent)

export default Extended
