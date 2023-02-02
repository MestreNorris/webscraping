import { createContext, useState, useContext } from 'react'
import themeConfig from './themeConfig'

const initialSettings = {
  themeColor: themeConfig.themeColor,
  mode: themeConfig.mode,
  contentWidth: themeConfig.contentWidth
}

export const SettingsContext = createContext({
  saveSettings: () => null,
  settings: initialSettings
})

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({ ...initialSettings })

  const saveSettings = updatedSettings => setSettings(updatedSettings)

  return <SettingsContext.Provider value={{ settings, saveSettings }}>{children}</SettingsContext.Provider>
}

export const SettingsConsumer = SettingsContext.Consumer

export const useSettings = () => useContext(SettingsContext)
