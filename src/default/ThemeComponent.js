// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'

import GlobalStyle from '../components/styles/globals'

// ** Theme Config
import themeConfig from '../components/theme/themeConfig'

// ** Theme
import themeOptions from '../components/theme/ThemeOptions'

const ThemeComponent = props => {
  // ** Props
  const { settings, children } = props

  // ** Merged ThemeOptions of Core and User
  const coreThemeConfig = themeOptions(settings)

  // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
  let theme = createTheme(coreThemeConfig)

  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle theme={theme} />
      {children}
    </ThemeProvider>
  )
}

export default ThemeComponent
