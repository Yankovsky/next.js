import React from 'react'
import { withI18next } from '../lib/withI18next'

function MyComponent ({ t }) {
  return <p>{t('home:sample_button')}</p>
}

const Extended = withI18next(['home'])(MyComponent)

export default Extended
