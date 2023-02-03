import { WeatherSunny, WeatherNight } from '../icons'
import { ButtomToggleTheme } from '../icons/styles'

const ModeToggler = props => {
  const { settings, saveSettings, theme } = props

  const handleModeChange = mode => {
    saveSettings({ ...settings, mode })
  }

  const handleModeToggle = () => {
    settings.mode === 'light' ? handleModeChange('dark') : handleModeChange('light')
  }

  return (
    <ButtomToggleTheme aria-haspopup='true' onClick={handleModeToggle} theme={theme}>
      {settings.mode === 'dark' ? <WeatherSunny /> : <WeatherNight />}
    </ButtomToggleTheme>
  )
}

export default ModeToggler
