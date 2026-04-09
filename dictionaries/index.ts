import pt from './pt'
import en from './en'

export function getDictionary(locale) {
  if (locale === 'en' || locale === 'en-us') return en
  return pt
}