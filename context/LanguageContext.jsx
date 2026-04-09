'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { getDictionary } from '../dictionaries'

const LanguageContext = createContext({})

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('pt')
  const [dict, setDict] = useState(getDictionary('pt'))

  // lê do localStorage ao carregar
  useEffect(() => {
    const saved = localStorage.getItem('locale') || 'pt'
    setLocale(saved)
    setDict(getDictionary(saved))
  }, [])

  function changeLocale(newLocale) {
    const newDict = getDictionary(newLocale)
    localStorage.setItem('locale', newLocale)
    setLocale(newLocale)
    setDict(newDict)
  }

  return (
    <LanguageContext.Provider value={{ locale, dict, changeLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}